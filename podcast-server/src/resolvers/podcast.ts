import { isAuth } from "../middleware/isAuth";
import { MyContext } from "../types";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { Podcast } from "../entities/Podcast";

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
  podcast(@Arg("id") id: number): Promise<Podcast | undefined> {
    return Podcast.findOne(id);
  }

  // Create a new podcast
  @Mutation(() => Podcast)
  @UseMiddleware(isAuth)
  async createPodcast(
    @Arg("input") input: PodcastInput,
    @Arg("id") id: number,
    @Ctx() { req }: MyContext
  ): Promise<Podcast> {
    id = Math.floor(Math.random() * 10000000 + 1);
    return Podcast.create({
      ...input,
      creatorId: req.session.userId,
      id,
    }).save();
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
  async deletePost(@Arg("id") id: number): Promise<boolean> {
    await Podcast.delete(id);
    return true;
  }
}
