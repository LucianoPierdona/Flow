var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
var Podcast = /** @class */ (function () {
    function Podcast() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    __decorate([
        PrimaryKey()
    ], Podcast.prototype, "id", void 0);
    __decorate([
        Property({ type: "date" })
    ], Podcast.prototype, "createdAt", void 0);
    __decorate([
        Property({ type: "date", onUpdate: function () { return new Date(); } })
    ], Podcast.prototype, "updatedAt", void 0);
    __decorate([
        Property({ type: "text" })
    ], Podcast.prototype, "title", void 0);
    Podcast = __decorate([
        Entity()
    ], Podcast);
    return Podcast;
}());
export { Podcast };
//# sourceMappingURL=Podcast.js.map