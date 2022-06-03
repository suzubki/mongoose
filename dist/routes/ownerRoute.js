"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const OwnerController_1 = __importDefault(require("../controllers/OwnerController"));
const router = (0, express_1.Router)();
router.get("/owner", OwnerController_1.default.getOwners);
router.get("/owner/:id", OwnerController_1.default.getOwnerByIdWithPets);
router.post("/owner", OwnerController_1.default.createOwner);
router.put("/owner/:id", OwnerController_1.default.updateOwnerById);
router.delete("/owner/:id", OwnerController_1.default.deleteOwnerById);
exports.default = router;
//# sourceMappingURL=ownerRoute.js.map