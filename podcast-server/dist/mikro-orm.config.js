"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const constants_1 = require("./constants");
const Podcast_1 = require("./entities/Podcast");
const NewUser_1 = require("./entities/NewUser");
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Podcast_1.Podcast, NewUser_1.NewUser],
    dbName: "podcast",
    clientUrl: "mongodb://localhost:27017/podcast",
    type: "mongo",
    debug: !constants_1.__prod__,
};
//# sourceMappingURL=mikro-orm.config.js.map