import express from "express";
import routes from "./routes";

const api = express();
api.use(express.json());

api.use("/", routes.petRoute);
api.use("/", routes.ownerRoute);

export default api;
