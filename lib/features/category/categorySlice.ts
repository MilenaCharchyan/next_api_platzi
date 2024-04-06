import { createAppSlice } from "@/lib/createAppSlice";
import { ICategory } from "@/lib/type/type";
import {  createCategoryAPI, deleteCategoryByIdAPI, getCategoryAPI, getCategoryByIdAPI, updateCategoryAPI } from "./categoryAPI";

const initialState:{categories:ICategory[],category:ICategory}={categories:[],category:{} as ICategory}
export const categorySlice=createAppSlice({
    name:'category',
    initialState,
    reducers:(create)=>({
        getCategoriesData:create.asyncThunk(
            async()=>{
                return await getCategoryAPI()
            },
            {
                fulfilled:(state,action)=>{
                    state.categories=action.payload
                }
            }
        ),
        getCategoryByIdData:create.asyncThunk(
            async(id:number)=>{
                return await getCategoryByIdAPI(id)
            },{
                fulfilled:(state,action)=>{
                    state.category=action.payload
                }
            }
        ),
        createCategoryData:create.asyncThunk(
            async(cat:ICategory)=>{
                return await createCategoryAPI(cat)
            }
        ),
        updateCategoryData:create.asyncThunk(
            async({id,cat}:{id:number,cat:{name:string,image:string}})=>{
                return await updateCategoryAPI({id,cat})
            }
        ),
        deleteCategoryByIdData:create.asyncThunk(
            async(id:number)=>{
                return await deleteCategoryByIdAPI(id)
            },
        )

    }),
    selectors:{
        selectCategories:(app)=>app.categories,
        selectCategory:(app)=>app.category
    }
})
export const {getCategoriesData,getCategoryByIdData,createCategoryData,updateCategoryData,deleteCategoryByIdData}=categorySlice.actions
export const {selectCategories,selectCategory}=categorySlice.selectors