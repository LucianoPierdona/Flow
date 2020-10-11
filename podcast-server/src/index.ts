import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PodcastResolver } from "./resolvers/podcast";
import { HelloResolver } from "./resolvers/hello";
import { UserResolver } from "./resolvers/user";
import redis from "redis";
import connectRedis from "connect-redis";
import session from "express-session";
import { COOKIE_NAME, __prod__ } from "./constants";
import cors from "cors";
import { createConnection } from "typeorm";
import { Podcast } from "./entities/Podcast";
import { NewUser } from "./entities/NewUser";

const main = async () => {
  ("");

  const conn = await createConnection({
    type: "mongodb",
    database: "podcast",
    host: "localhost",
    port: 27017,
    logging: false,
    synchronize: true,
    entities: [Podcast, NewUser],
  });
  conn.isConnected;

  const app = express();

  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: ["http://localhost:3000", "http://localhost:4000/graphql"],
      credentials: true,
    })
  );

  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();
  app.use(
    session({
      name: COOKIE_NAME,
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
    context: ({ req, res }) => ({ req, res, redis }),
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(4000, () => {
    console.log("server started on port 4000");
  });
};

main().catch((err) => {
  console.error(err);
});
