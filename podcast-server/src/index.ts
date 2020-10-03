import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import mikroOrmConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PodcastResolver } from "./resolvers/podcast";
import { HelloResolver } from "./resolvers/hello";
import { UserResolver } from "./resolvers/user";
import redis from "redis";
import connectRedis from "connect-redis";
import session from "express-session";
import { __prod__ } from "./constants";
import cors from "cors";

const main = async () => {
  ("");
  const orm = await MikroORM.init(mikroOrmConfig);
  // await orm.getMigrator().up();
  await orm.em.getConnection();
  const app = express();

  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();

  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.use(
    session({
      name: "qid",
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
        httpOnly: true,
        sameSite: "lax",
        secure: __prod__,
      },
      saveUninitialized: false,
      secret: "meuamigo",
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PodcastResolver, HelloResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ em: orm.em, req, res }),
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(4000, () => {
    console.log("server started on port 4000");
  });
};

main().catch((err) => {
  console.error(err);
});
