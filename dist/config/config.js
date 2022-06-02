"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const envinroment = (_a = process.env.NODE_ENV) === null || _a === void 0 ? void 0 : _a.trim();
dotenv_1.default.config({
    path: `.env.${envinroment}`,
});
const config = {
    serverConfig: {
        PORT: process.env.PORT || 3000,
    },
    database: {
        MONGO_DB_USER: process.env.MONGO_DB_USER,
        MONGO_DB_PASSWORD: process.env.MONGO_DB_PASSWORD,
        MONGO_DB_HOST: process.env.MONGO_DB_HOST,
        MONGO_DB_NAME: process.env.MONGO_DB_NAME,
        MONGO_DB_PORT: process.env.MONGO_DB_PORT,
    },
};
exports.default = config;
//# sourceMappingURL=config.js.map