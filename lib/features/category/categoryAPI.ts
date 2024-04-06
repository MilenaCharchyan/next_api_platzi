import { ICategory } from "@/lib/type/type";
import axios from "axios"

export const getCategoryAPI=async()=>{
    const {data}=await axios.get("https://api.escuelajs.co/api/v1/categories");
    return data;
}
export const  getCategoryByIdAPI=async(id:number)=>{
    const {data}=await axios.get("https://api.escuelajs.co/api/v1/categories/"+id)
    return data;
}
export const createCategoryAPI=async(cat:ICategory)=>{
    const {data}=await axios.post("https://api.escuelajs.co/api/v1/categories",cat);
    return data
}
export const updateCategoryAPI=async({id,cat}:{id:number,cat:{name:string, image:string}})=>{
    const {data}=await axios.post("https://api.escuelajs.co/api/v1/categories/"+id,cat);
    return data
}
export const  deleteCategoryByIdAPI=async(id:number)=>{
    console.log(id);
    
    const {data}=await axios.delete("https://api.escuelajs.co/api/v1/categories/"+id)
    return data;
}
