"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PodcastResolver = void 0;
const isAuth_1 = require("../middleware/isAuth");
const type_graphql_1 = require("type-graphql");
const Podcast_1 = require("../entities/Podcast");
const typeorm_1 = require("typeorm");
let PodcastInput = class PodcastInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], PodcastInput.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], PodcastInput.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], PodcastInput.prototype, "url", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], PodcastInput.prototype, "thumbnail", void 0);
PodcastInput = __decorate([
    type_graphql_1.InputType()
], PodcastInput);
let PodcastResolver = class PodcastResolver {
    podcasts() {
        return __awaiter(this, void 0, void 0, function* () {
            return Podcast_1.Podcast.find();
        });
    }
    podcast(id) {
        return Podcast_1.Podcast.findOne(id);
    }
    createPodcast(input, id, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = new Podcast_1.Podcast();
            const manager = typeorm_1.getMongoManager();
            try {
                id = Math.floor(Math.random() * 10000000 + 1);
                result.title = input.title;
                result.url = input.url;
                result.thumbnail = input.thumbnail;
                result.description = input.description;
                result.creatorId = req.session.userId;
                result.id = id;
            }
            catch (err) {
                console.log(err);
            }
            return yield manager.save(result);
        });
    }
    updatePodcast(id, title) {
        return __awaiter(this, void 0, void 0, function* () {
            const podcast = yield Podcast_1.Podcast.findOne(id);
            console.log(id);
            if (!podcast) {
                return null;
            }
            if (typeof title !== "undefined") {
                yield Podcast_1.Podcast.update({ id }, { title });
            }
            return podcast;
        });
    }
    deletePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Podcast_1.Podcast.delete(id);
            return true;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [Podcast_1.Podcast]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PodcastResolver.prototype, "podcasts", null);
__decorate([
    type_graphql_1.Query(() => Podcast_1.Podcast, { nullable: true }),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PodcastResolver.prototype, "podcast", null);
__decorate([
    type_graphql_1.Mutation(() => Podcast_1.Podcast),
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    __param(0, type_graphql_1.Arg("input")),
    __param(1, type_graphql_1.Arg("id")),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PodcastInput, Number, Object]),
    __metadata("design:returntype", Promise)
], PodcastResolver.prototype, "createPodcast", null);
__decorate([
    type_graphql_1.Mutation(() => Podcast_1.Podcast, { nullable: true }),
    __param(0, type_graphql_1.Arg("id")),
    __param(1, type_graphql_1.Arg("title", () => String, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], PodcastResolver.prototype, "updatePodcast", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PodcastResolver.prototype, "deletePost", null);
PodcastResolver = __decorate([
    type_graphql_1.Resolver()
], PodcastResolver);
exports.PodcastResolver = PodcastResolver;
//# sourceMappingURL=podcast.js.map