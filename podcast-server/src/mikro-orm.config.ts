import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { __prod__ } from "./constants";
import { Podcast } from "./entities/Podcast";
import { NewUser } from "./entities/NewUser";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Podcast, NewUser],
  dbName: "podcast",
  clientUrl: "mongodb://localhost:27017/podcast",
  type: "mongo",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
