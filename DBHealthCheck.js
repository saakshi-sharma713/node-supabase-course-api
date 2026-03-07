import { supabase } from "./Config/supabaseClient.config.js";

export  const checkStatus = async()=>{
  const {data,error} = await supabase.from("courses").select()
  if(error){
    return false
  }
  return true
}