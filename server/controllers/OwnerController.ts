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
        const newOwner = await Owner.create(owner);

        return res.status(201).json({
            message: "Owner created successfully",
            owner: newOwner,
        });
    } catch (error) {
        return res.json({
            message: "Error al crear el dueño",
            error,
        });
    }
};

export default createOwner;
