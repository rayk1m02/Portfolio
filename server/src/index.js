"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// express is a web fraemwork for Node.js that simplifies process of building server-side apps and APIs.
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 5000;
// JSON parsing middleware
app.use(express_1.default.json());
// Define router handler for HTTP GET requests to root URL ('/')
app.get('/', (req, res) => {
    res.send('Backend is running');
});
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
