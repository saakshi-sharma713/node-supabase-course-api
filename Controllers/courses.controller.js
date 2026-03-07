import { supabase } from "../Config/supabaseClient.config.js";

export async function getCourses(req,res){
    const {data,error} = await supabase.from("courses").select("*")
    if(error){
        return res.status(400).json({message:error.message})
    }
    return res.json({message:"All Courses",data})
}