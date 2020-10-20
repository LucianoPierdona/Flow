import { isAuth } from "../middleware/isAuth";
import { MyContext } from "../types";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { Podcast } from "../entities/Podcast";
import { getMongoManager } from "typeorm";

@InputType()
class PodcastInput {
  @Field()
  title: string;
  @Field()
  description: string;
  @Field()
  url: string;
  @Field()
  thumbnail: string;
}

@Resolver()
export class PodcastResolver {
  // Get all Podcasts
  @Query(() => [Podcast])
  async podcasts(): Promise<Podcast[]> {
    return Podcast.find();
  }

  // Get One Podcast
  @Query(() => Podcast, { nullable: true })
  podcast(@Arg("id", () => Int) id: number): Promise<Podcast | undefined> {
    return Podcast.findOne(id, { relations: ["creatorId"] });
  }

  // Create a new podcast
  @Mutation(() => Podcast)
  @UseMiddleware(isAuth)
  async createPodcast(
    @Arg("input") input: PodcastInput,
    @Arg("id") id: number,
    @Ctx() { req }: MyContext
  ): Promise<Podcast> {
    const result = new Podcast();

    const manager = getMongoManager();

    try {
      id = Math.floor(Math.random() * 10000000 + 1);

      result.title = input.title;
      result.url = input.url;
      result.thumbnail = input.thumbnail;
      result.description = input.description;
      result.creatorId = req.session.userId;
      result.id = id;
    } catch (err) {
      console.log(err);
    }
    return await manager.save(result);
  }

  // Update a post
  @Mutation(() => Podcast, { nullable: true })
  async updatePodcast(
    @Arg("id") id: number,
    @Arg("title", () => String, { nullable: true }) title: string
  ): Promise<Podcast | null> {
    const podcast = await Podcast.findOne(id);
    console.log(id);
    if (!podcast) {
      return null;
    }
    if (typeof title !== "undefined") {
      await Podcast.update({ id }, { title });
    }

    return podcast;
  }

  @Mutation(() => Boolean)
  async deletePost(
    @Arg("id") id: number,
    @Ctx() { req }: MyContext
  ): Promise<boolean> {
    await Podcast.delete({ id, creatorId: req.session.userId });
    return true;
  }
}
