import mongoose, { Schema } from "mongoose";

const model: Schema = new mongoose.Schema({
    nombre: {
        type: String,
        unique: true,
        required: [true, "El nombre del veterinario ser único"],
        trim: true,
        
    },
    edad: Number,
    correo: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "El correo es obligatorio"],
        trim: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Por favor ingrese un correo válido",
        ],
    },
});

export const Veterinarian = mongoose.model("Veterinarians", model);
