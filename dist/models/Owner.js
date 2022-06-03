"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Owner = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const model = new mongoose_1.default.Schema({
    nombre: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    edad: Number,
    correo: {
        type: String,
        unique: true,
        required: [true, "El correo es obligatorio"],
        trim: true,
    },
    mascotas: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Pets",
        },
    ],
});
exports.Owner = mongoose_1.default.model("Owners", model);
//# sourceMappingURL=Owner.js.map