"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const OwnerController_1 = __importDefault(require("../controllers/OwnerController"));
const router = (0, express_1.Router)();
router.post("/owner", OwnerController_1.default);
exports.default = router;
//# sourceMappingURL=ownerRoute.js.map