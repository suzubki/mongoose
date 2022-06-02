import { Router } from "express";
import createOwner from "../controllers/OwnerController";

const router = Router();

router.post("/owner", createOwner);

export default router;
