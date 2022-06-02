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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPet = void 0;
const Pet_1 = require("../models/Pet");
const createPet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pet } = req.body;
    if (!pet)
        return res.status(400).json({
            message: "Falta información el req.body",
        });
    try {
        const newPet = yield Pet_1.Pet.create(pet);
        return res.status(201).json({
            message: "Usuario creado!!",
            pet: newPet,
        });
    }
    catch (err) {
        return res.status(400).json({
            message: "Error en la validación!!",
        });
    }
});
exports.createPet = createPet;
//# sourceMappingURL=PetController.js.map