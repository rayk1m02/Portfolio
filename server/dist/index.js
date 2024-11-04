"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const intro_1 = __importDefault(require("./routes/intro"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config({ path: '../.env' });
const app = (0, express_1.default)();
const port = 5001; // port 5000 taken by ControlCe (Apple)
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
// Add debug middleware to log all requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use(express_1.default.json());
app.use('/api', intro_1.default); // Updated to mount at /api
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
    throw new Error('MONGO_URI environment variable not set');
}
// establish connection to MongoDB database
mongoose_1.default.connect(MONGO_URI)
    .then(() => {
    console.log('MongoDB connected');
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
})
    .catch(err => console.error('MongoDB connection error:', err));
