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
        console.log('Attempting to find intro data...');
        const intro = yield Intro_1.default.findOne();
        console.log('Found intro data:', intro);
        if (intro) {
            console.log('Sending intro data to client');
            res.json(intro);
        }
        else {
            console.log('No intro data found');
            res.status(404).json({ message: 'Intro data not found' });
        }
    }
    catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}));
exports.default = router;
