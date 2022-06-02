import mongoose, { Schema } from "mongoose";

const model: Schema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    correo: String,
});

export const Owner = mongoose.model("User", model);
