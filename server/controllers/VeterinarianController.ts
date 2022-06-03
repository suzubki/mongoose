import { Request, Response } from "express";
import { IVeterinarian } from "../interface";
import { Veterinarian } from "../models/Veterinarian";

type Props = {
    veterinarian: IVeterinarian;
};

const createVeterinarian = async (req: Request, res: Response) => {
    const { veterinarian }: Props = req.body;

    if (!veterinarian) {
        return res.status(400).json({
            message:
                "Ingrese en el req.body los datos del nuevo veterinario de manera válida",
        });
    }

    try {
        const newVeterinarian: Props = await Veterinarian.create(veterinarian);

        return res.status(201).json({
            message: "Veterinario creado",
            veterinarian: newVeterinarian,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error al crear al nuevo veterinario",
            error,
        });
    }
};

const getVeterinarians = async (req: Request, res: Response) => {
    try {
        const owners: Props[] = await Veterinarian.find();

        if (!owners) {
            return res.status(400).json({
                message: "No hay veterinarios registrados",
            });
        }

        return res.status(200).json({
            message: "Veterinarios encontrados satisfactoriamante!!",
            owners,
        });
    } catch (err) {
        return res.status(400).json({
            message: "Error al obtener los veterinarios",
            error: err,
        });
    }
};

const getVeterinarianById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const veterinarian: Props | any = await Veterinarian.findById(
            id
        ).populate("mascotas");

        if (!veterinarian) {
            return res.status(400).json({
                message: "Aquel veterinario no existe",
            });
        }

        return res.status(200).json({
            message: "Veterinario encontrado",
            veterinarian,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error al obtener el veterinario",
            error,
        });
    }
};

const updateVeterinarianById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const veterinarian: Props | null = await Veterinarian.findByIdAndUpdate(
            id,
            req.body
        );

        if (!veterinarian) {
            return res.status(400).json({
                message: "Aquel veterinario no existe",
            });
        }

        return res.status(201).json({
            message: "Veterinario actualizado!",
            veterinarian,
        });
    } catch (error) {
        return res.json({
            message: "Error al actualizar los datos del veterinario",
        });
    }
};

const deleteVeterinarianById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const veterinarian: Props | any = await Veterinarian.findByIdAndDelete(
            id
        );

        if (!veterinarian) {
            return res.status(400).json({
                message: "Aquel veterinario no existe en la base de datos!",
            });
        }

        return res.status(200).json({
            message: "Veterinario eliminado!",
            veterinarian,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error al eliminar al veterinario",
        });
    }
};

const VeterinarianControllers = {
    createVeterinarian,
    getVeterinarians,
    getVeterinarianById,
    updateVeterinarianById,
    deleteVeterinarianById,
};

export default VeterinarianControllers;
