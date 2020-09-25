import path from "path";
import { __prod__ } from "./constants";
import { Podcast } from "./entities/Podcast";
export default {
    migrations: {
        path: path.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Podcast],
    dbName: "podcast",
    clientUrl: "mongodb://localhost:27017/podcast",
    type: "mongo",
    debug: !__prod__,
};
//# sourceMappingURL=mikro-orm.config.js.map