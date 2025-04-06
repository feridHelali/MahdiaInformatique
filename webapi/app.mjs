import express from "express"
import morgan from "morgan"
import cors from "cors"
import catalogRouter from "./routers/catalog.routes.mjs"
import authenticationRouter from "./routers/authentication.routes.mjs"


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

app.use("/api/v1/products",catalogRouter)
app.use("/api/v1/auth",authenticationRouter)

app.use((error, req, res, next) => {
    res.status(500).json({
        code: "Server Error 500",
        message: `error : ${error.message}`
    }
    )
})

export default app;