import { MyContext } from "src/types";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Podcast } from "../entities/Podcast";

@Resolver()
export class PodcastResolver {
  // Get all Podcasts
  @Query(() => [Podcast])
  podcasts(@Ctx() { em }: MyContext) {
    return em.find(Podcast, {});
  }

  // Get One Podcast
  @Query(() => Podcast, { nullable: true })
  podcast(
    @Arg("id") id: number,
    @Ctx() { em }: MyContext
  ): Promise<Podcast | null> {
    return em.findOne(Podcast, { id });
  }

  // Create a new podcast
  @Mutation(() => Podcast)
  async createPodcast(
    @Arg("title") title: string,
    @Arg("url") url: string,
    @Arg("id") id: number,
    @Ctx() { em }: MyContext
  ): Promise<Podcast> {
    id = Math.floor(Math.random() * 10000000 + 1);
    const podcast = em.create(Podcast, { title, url, id });
    await em.persistAndFlush(podcast);
    return podcast;
  }

  // Update a post
  @Mutation(() => Podcast, { nullable: true })
  async updatePodcast(
    @Arg("id") id: number,
    @Arg("title", () => String, { nullable: true }) title: string,
    @Ctx() { em }: MyContext
  ): Promise<Podcast | null> {
    const podcast = await em.findOne(Podcast, { id });
    console.log(id);
    if (!podcast) {
      return null;
    }
    if (typeof title !== "undefined") {
      podcast.title = title;
      await em.persistAndFlush(podcast);
    }
    return podcast;
  }
}
