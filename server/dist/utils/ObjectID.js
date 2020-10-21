"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toObjectId = void 0;
const typeorm_1 = require("typeorm");
exports.toObjectId = (value) => {
    return typeof value === "number" ? new typeorm_1.ObjectID(value) : value;
};
//# sourceMappingURL=ObjectID.js.map