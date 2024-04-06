import { IUser } from "@/lib/type/type";
import axios from "axios"

export const getUsersAPI=async()=>{
    const {data}=await axios.get("https://api.escuelajs.co/api/v1/users");
    return data;
}
export const getUserByIdAPI=async(id:number)=>{
    const {data}=await axios.get("https://api.escuelajs.co/api/v1/users/"+id)
    return data
}
export const createUserAPI=async(us:IUser)=>{
    const {data}=await axios.post("https://api.escuelajs.co/api/v1/users", us);
    return data
}
export const updateUserAPI=async({id,us}:{id:number,us:{name:string, email:string}})=>{
    const {data}=await axios.put("https://api.escuelajs.co/api/v1/users/"+id, us)
    return data
}