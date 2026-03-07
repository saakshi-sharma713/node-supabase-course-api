import express from "express"
import { checkStatus } from "./DBHealthCheck.js";
import { CourseRouter } from "./Routes/course.route.js";
const app = express()
const PORT=8080;
app.use("/courses",CourseRouter)
app.listen(PORT,()=>{
    const status = checkStatus();
    if(!status){
        console.log("Unable to Connect to DB")
        return ;
    }
    console.log("Database Connected SuccessFully :)")
    console.log(`Server is running at PORT:${PORT}`)
})