import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials:true // Allow credentials (cookies, authorization headers, etc.) to be sent with requests
}))

app.use(express.json({limit: "10kb"})); // Limit the size of JSON payloads to 10kb