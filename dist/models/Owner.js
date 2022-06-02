"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Owner = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const model = new mongoose_1.default.Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    correo: String,
});
exports.Owner = mongoose_1.default.model("User", model);
//# sourceMappingURL=Owner.js.map