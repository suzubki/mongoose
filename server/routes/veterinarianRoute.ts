import { Router } from "express";
import VeterinarianControllers from "../controllers/VeterinarianController";

const router = Router();

router.get("/veterinarian", VeterinarianControllers.getVeterinarians);
router.get("/veterinarian/:id", VeterinarianControllers.getVeterinarianById);

router.post("/veterinarian", VeterinarianControllers.createVeterinarian);

router.put("/veterinarian/:id", VeterinarianControllers.updateVeterinarianById);

router.delete(
    "/veterinarian/:id",
    VeterinarianControllers.deleteVeterinarianById
);

export default router;
