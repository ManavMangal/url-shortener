import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import { ApiResponse } from "./utils/ApiResponce.js"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

app.use(cookieParser())

//health route

app.get("/api/v1/health", (req, res) => {
    res
    .status(200)
    .json( new ApiResponse(200, null, "Server is running"))
})

export  { app };