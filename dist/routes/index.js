"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ownerRoute_1 = __importDefault(require("./ownerRoute"));
const petRoute_1 = __importDefault(require("./petRoute"));
const routes = { ownerRoute: ownerRoute_1.default, petRoute: petRoute_1.default };
exports.default = routes;
//# sourceMappingURL=index.js.map