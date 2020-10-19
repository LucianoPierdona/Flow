"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const podcast_1 = require("./resolvers/podcast");
const hello_1 = require("./resolvers/hello");
const user_1 = require("./resolvers/user");
const redis_1 = __importDefault(require("redis"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const express_session_1 = __importDefault(require("express-session"));
const constants_1 = require("./constants");
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
const Podcast_1 = require("./entities/Podcast");
const NewUser_1 = require("./entities/NewUser");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    ("");
    const conn = yield typeorm_1.createConnection({
        type: "mongodb",
        database: "podcast",
        host: "localhost",
        port: 27017,
        logging: false,
        synchronize: true,
        entities: [Podcast_1.Podcast, NewUser_1.NewUser],
        useUnifiedTopology: true,
    });
    conn.isConnected;
    const app = express_1.default();
    app.set("trust proxy", 1);
    app.use(cors_1.default({
        origin: ["http://localhost:3000", "http://localhost:4000/graphql"],
        credentials: true,
    }));
    const RedisStore = connect_redis_1.default(express_session_1.default);
    const redisClient = redis_1.default.createClient();
    app.use(express_session_1.default({
        name: constants_1.COOKIE_NAME,
        store: new RedisStore({
            client: redisClient,
            disableTouch: true,
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365,
            httpOnly: true,
            sameSite: "lax",
            secure: constants_1.__prod__,
        },
        saveUninitialized: false,
        secret: "meuamigo",
        resave: false,
    }));
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: yield type_graphql_1.buildSchema({
            resolvers: [podcast_1.PodcastResolver, hello_1.HelloResolver, user_1.UserResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({ req, res, redis: redis_1.default }),
    });
    apolloServer.applyMiddleware({ app, cors: false });
    app.listen(4000, () => {
        console.log("server started on port 4000");
    });
});
main().catch((err) => {
    console.error(err);
});
//# sourceMappingURL=index.js.map