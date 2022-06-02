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
const Owner_1 = require("../models/Owner");
const createOwner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { owner } = req.body;
    if (!owner) {
        return res.status(400).json({
            message: "Ingrese en el req.body un owner válido",
        });
    }
    try {
        const newOwner = yield Owner_1.Owner.create(owner);
        return res.status(201).json({
            message: "Owner created successfully",
            owner: newOwner,
        });
    }
    catch (error) {
        return res.json({
            message: "Error al crear el dueño",
            error,
        });
    }
});
exports.default = createOwner;
//# sourceMappingURL=OwnerController.js.map