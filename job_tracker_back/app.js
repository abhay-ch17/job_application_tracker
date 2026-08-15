import express, { application } from "express";
import { AuthRouter } from "./router/AuthRouter.js";
import mongooseConnection from "./config/mongooseConnection.js";
import cookieParser from "cookie-parser";
import applicationRouter from "./router/ApplicationRouter.js";
import cors from "cors"
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:'https://jobb-tracker.netlify.app', //add frontend origin
    credentials:true
}))


app.use(cookieParser());

app.use("/jobTracker/api/auth/", AuthRouter);
app.use("/jobTracker/api/application/", applicationRouter);

app.listen(3000, ()=>{
    console.log("server started successfull");
})