import mongoose from "mongoose";

const connect = () => {
    mongoose.connect(process.env.MONGODB || "mongodb://127.0.0.1:27017/mi_db")
        .then(() => console.log("Successfully connected to database"))
        .catch(error => console.error("Failed to connect to database\nError: ", error.message))
}

export default connect;