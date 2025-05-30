import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials:true // Allow credentials (cookies, authorization headers, etc.) to be sent with requests
}))

app.use(express.json({limit: "10kb"})); // Limit the size of JSON payloads to 10kb
app.use(express.urlencoded({extended: true,limit: "10kb"}));// Limit the size of URL-encoded payloads to 10kb.
app.use(cookieParser());
app.use(express.static("public"));// used to save and use static files like images,css etc from public directory.