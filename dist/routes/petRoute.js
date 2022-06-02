"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PetController_1 = require("../controllers/PetController");
const router = (0, express_1.Router)();
router.post("/pet", PetController_1.createPet);
exports.default = router;
//# sourceMappingURL=petRoute.js.map