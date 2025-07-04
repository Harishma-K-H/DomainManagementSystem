"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Domain_1 = __importDefault(require("../models/Domain"));
const router = express_1.default.Router();
// GET all domains
router.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const domains = yield Domain_1.default.find();
        res.json(domains);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch domains', error });
    }
}));
// POST create new domain
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const domain = new Domain_1.default(req.body);
        const savedDomain = yield domain.save();
        res.status(201).json(savedDomain);
    }
    catch (error) {
        res.status(400).json({ message: 'Failed to create domain', error });
    }
}));
exports.default = router;
