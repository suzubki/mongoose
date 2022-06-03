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
            message: "Owner creado",
            owner: newOwner,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error al crear el dueño",
            error,
        });
    }
});
const getOwners = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const owners = yield Owner_1.Owner.find();
        if (!owners) {
            return res.status(400).json({
                message: "No hay dueños",
            });
        }
        return res.status(200).json({
            message: "Owners encontrados satisfactoriamante!!",
            owners,
        });
    }
    catch (err) {
        return res.status(400).json({
            message: "Error al obtener los dueños",
            error: err,
        });
    }
});
const getOwnerByIdWithPets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const owner = yield Owner_1.Owner.findById(id).populate("mascotas");
        if (!owner) {
            return res.status(400).json({
                message: "Ese dueño no existe!!!",
            });
        }
        return res.status(200).json({
            message: "Owner encontrado",
            owner,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error al obtener el dueño",
            error,
        });
    }
});
const updateOwnerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { mascotas } = req.body;
    if (mascotas) {
        return res.status(401).json({
            message: "No se pueden actualizar las mascotas del dueño!!",
        });
    }
    try {
        const owner = yield Owner_1.Owner.findByIdAndUpdate(id, req.body);
        if (!owner) {
            return res.status(400).json({
                message: "Ese dueño no existe!!!",
            });
        }
        return res.status(201).json({
            message: "Dueño actualizado!",
            owner,
        });
    }
    catch (error) {
        return res.json({
            message: "Error al actualizar el dueño",
        });
    }
});
const deleteOwnerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const owner = yield Owner_1.Owner.findByIdAndDelete(id);
        if (!owner) {
            return res.status(400).json({
                message: "Ese dueño no existe!!!",
            });
        }
        return res.status(200).json({
            message: "Owner eliminado!",
            owner,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error al eliminar el dueño",
        });
    }
});
const OwnerController = {
    createOwner,
    getOwners,
    getOwnerByIdWithPets,
    updateOwnerById,
    deleteOwnerById,
};
exports.default = OwnerController;
//# sourceMappingURL=OwnerController.js.map