import mongoose, { Schema } from "mongoose";

const model: Schema = new mongoose.Schema({
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
            type: mongoose.Schema.Types.ObjectId,
            ref: "Pets",
        },
    ],
});

export const Owner = mongoose.model("Owners", model);
