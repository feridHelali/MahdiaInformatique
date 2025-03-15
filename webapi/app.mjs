import express from "express"
import morgan from "morgan"
import cors from "cors"



const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

app.get('/', (req, res, next) => {
    res.json({ message: "Hello Mahdia Informatique" })
})

app.use((error, req, res, next) => {
    res.status(500).json({
        code: "Server Error 500",
        message: `error : ${error.message}`
    }
    )
})

export default app;