import { IProduct, IRange } from "@/lib/type/type";
import axios from "axios"

export const getProductAPI=async()=>{
    const {data}=await axios.get("https://api.escuelajs.co/api/v1/products");
    return data;
}
export const getProductByIdAPI=async(id:number)=>{
    const {data}=await axios.get("https://api.escuelajs.co/api/v1/products/"+id);
    return data
}
export const createProductAPI=async(pr:IProduct)=>{
    const {data}=await axios.post("https://api.escuelajs.co/api/v1/products",pr);
    return data
}
export const updateProductAPI=async({id,pr}:{id:number,pr:{title:string,price:number,description:string,categoryId:number,images:string[]}})=>{
    const {data}=await axios.post("https://api.escuelajs.co/api/v1/products/"+id,pr)
    return data

}
export const deleteProductByIdAPI=async(id:number)=>{
    const {data}=await axios.delete("https://api.escuelajs.co/api/v1/products/"+id)
    return data;
}

export const filterProductByTitleAPI=async(text:string)=>{
    const {data}=await axios.get("https://api.escuelajs.co/api/v1/products/?title="+text)
    return data
}

export const filterProductByPriceRangeAPI=async({price_min,price_max}:IRange)=>{
    const {data}=await axios.get(`https://api.escuelajs.co/api/v1/products/?price_min=${price_min}&price_max=${price_max}`)
    return data
}
export const filterProductByCategoryAPI=async(id:number)=>{
    const {data}=await axios.get("https://api.escuelajs.co/api/v1/products/?categoryId="+id)
    return data
}