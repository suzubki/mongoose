import { Request, Response } from "express";
import { IOwner } from "../interface";
import { Owner } from "../models/Owner";

type Props = {
    owner: IOwner;
};

const createOwner = async (req: Request, res: Response) => {
    const { owner }: Props = req.body;

    if (!owner) {
        return res.status(400).json({
            message: "Ingrese en el req.body un owner válido",
        });
    }

    try {
        const newOwner: Props = await Owner.create(owner);

        return res.status(201).json({
            message: "Owner creado",
            owner: newOwner,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error al crear el dueño",
            error,
        });
    }
};

const getOwners = async (req: Request, res: Response) => {
    try {
        const owners: Props[] = await Owner.find();

        if (!owners) {
            return res.status(400).json({
                message: "No hay dueños",
            });
        }

        return res.status(200).json({
            message: "Owners encontrados satisfactoriamante!!",
            owners,
        });
    } catch (err) {
        return res.status(400).json({
            message: "Error al obtener los dueños",
            error: err,
        });
    }
};

const getOwnerByIdWithPets = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const owner: Props | any = await Owner.findById(id).populate(
            "mascotas"
        );

        if (!owner) {
            return res.status(400).json({
                message: "Ese dueño no existe!!!",
            });
        }

        return res.status(200).json({
            message: "Owner encontrado",
            owner,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error al obtener el dueño",
            error,
        });
    }
};

const updateOwnerById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { mascotas } = req.body;

    if (mascotas) {
        return res.status(401).json({
            message: "No se pueden actualizar las mascotas del dueño!!",
        });
    }

    try {
        const owner: Props | null = await Owner.findByIdAndUpdate(id, req.body);

        if (!owner) {
            return res.status(400).json({
                message: "Ese dueño no existe!!!",
            });
        }

        return res.status(201).json({
            message: "Dueño actualizado!",
            owner,
        });
    } catch (error) {
        return res.json({
            message: "Error al actualizar el dueño",
        });
    }
};

const deleteOwnerById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const owner: Props | any = await Owner.findByIdAndDelete(id);

        if (!owner) {
            return res.status(400).json({
                message: "Ese dueño no existe!!!",
            });
        }

        return res.status(200).json({
            message: "Owner eliminado!",
            owner,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error al eliminar el dueño",
        });
    }
};

const OwnerController = {
    createOwner,
    getOwners,
    getOwnerByIdWithPets,
    updateOwnerById,
    deleteOwnerById,
};

export default OwnerController;
