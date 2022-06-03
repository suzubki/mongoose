import { Router } from "express";
import OwnerController from "../controllers/OwnerController";

const router = Router();

router.get("/owner", OwnerController.getOwners);
router.get("/owner/:id", OwnerController.getOwnerByIdWithPets);

router.post("/owner", OwnerController.createOwner);

export default router;
