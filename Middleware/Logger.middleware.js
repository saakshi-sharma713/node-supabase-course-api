import fs from "fs"
export const logger = (req,res,next)=>{
    const method = req.method;
    const  url = req.url;
    const data = `${method} - ${url}\n`
    fs.appendFile("logs.txt",data,(err)=>{
        if(err){
            console.log("Unable to append");
        }
    })
    next();
}