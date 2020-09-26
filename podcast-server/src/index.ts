import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import { Podcast } from "./entities/Podcast";
import mikroOrmConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PodcastResolver } from "./resolvers/podcast";
import { HelloResolver } from "./resolvers/hello";

const main = async () => {
  ("");
  const orm = await MikroORM.init(mikroOrmConfig);
  // await orm.getMigrator().up();
  await orm.em.getConnection();

  console.log(Podcast);
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PodcastResolver, HelloResolver],
      validate: false,
    }),
    context: () => ({ em: orm.em }),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("server started on port 4000");
  });
};

main().catch((err) => {
  console.error(err);
});
