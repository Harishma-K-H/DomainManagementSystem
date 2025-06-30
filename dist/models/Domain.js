"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DomainSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    owner: String
});
const Domain = mongoose_1.default.model('Domain', DomainSchema);
exports.default = Domain;
