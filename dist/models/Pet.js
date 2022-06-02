"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const model = new mongoose_1.default.Schema({
    edad: Number,
    nombre: String,
    raza: String,
    tipo: String,
});
exports.Pet = mongoose_1.default.model("Pet", model);
//# sourceMappingURL=Pet.js.map