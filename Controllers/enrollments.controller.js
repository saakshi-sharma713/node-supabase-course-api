import { supabase } from "../Config/supabaseClient.config.js";

export async function enrollStudent(req,res){
    const {student_name,course_id} = req.body;
    
    const {data,error} = await supabase.from("enrollments").insert([{student_name,course_id}]).select()
if(error){
        return res.status(400).json({message:error.message})
    }
    return res.json({message:"Student Enrolled SuccessFully",data})
}

export async function getStudents(req,res){
    const {id} = req.params
    const {data,error} = await supabase.from("enrollments").select("*").eq("course_id",id);
    if(error){
        return res.status(400).json({message:error.message})
    }
    return res.json({message:"List of Student in one course",data})
}