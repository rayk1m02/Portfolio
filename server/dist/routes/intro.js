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
const Intro_1 = __importDefault(require("../models/Intro"));
const router = express_1.default.Router();
// Route will be accessed at /api/intro
router.get('/intro', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const intro = yield Intro_1.default.findOne();
        if (intro) {
            console.log('Found intro data. Sending to client', intro);
            res.json(intro);
        }
        else {
            res.status(404);
        }
    }
    catch (error) {
        console.error('Database error:', error);
        res.status(500);
    }
}));
exports.default = router;
