import { Request, Response } from "express";
import { IPet } from "../interface";
import { Owner } from "../models/Owner";
import { Pet } from "../models/Pet";

type Props = {
    pet: IPet;
    ownerId: string;
};

const createPet = async (req: Request, res: Response) => {
    const { pet, ownerId }: Props = req.body;

    if (!pet || !ownerId)
        return res.status(400).json({
            message: "Falta información el req.body",
        });

    try {
        // buscamos si el dueño existe
        const owner = await Owner.findById(ownerId);

        if (!owner) {
            return res.status(404).json({
                message: "El dueño no existe",
            });
        }

        // Creamos la mascota y agregamos el id de la nuevo mascota al dueño
        const newPet = await Pet.create(pet);
        owner.mascotas.push(newPet.id);
        await owner.save();

        return res.status(201).json({
            message: "Mascota creada!!",
            pet: newPet,
        });
    } catch (err) {
        return res.status(400).json({
            message: "Error en la validación!!",
        });
    }
};

export { createPet };
