import mongoose, { Connection } from "mongoose";
import config from "./config";

const { database } = config;

const databaseHandlers: Connection = mongoose.connection;

databaseHandlers.on("connecting", () => {
    console.log("Intentando conectarse a la base de datos");
});

databaseHandlers.on("error", (error) => {
    console.error("⭕ Error en mongodatabaseHandlers" + error);
});

databaseHandlers.on("connected", () => {
    console.log("✅ Conexiíon a la base de datos establecida ");
});

databaseHandlers.on("disconnected", () => {
    console.info("🥐 Se ha desconectado de la base de datos");
});

databaseHandlers.on("reconnected", () => {
    console.log("Reconectado a la base de datos");
});

const connect = async () => {
    await mongoose.connect(
        `mongodb+srv://${database.MONGO_DB_USER}:${database.MONGO_DB_PASSWORD}@${database.MONGO_DB_HOST}/${database.MONGO_DB_NAME}?retryWrites=true&w=majority`
    );
};

export const db = {
    connect,
};
