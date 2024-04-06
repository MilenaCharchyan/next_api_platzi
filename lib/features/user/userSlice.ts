import { createAppSlice } from "@/lib/createAppSlice";
import { IUser } from "@/lib/type/type";
import { createUserAPI, getUserByIdAPI, getUsersAPI, updateUserAPI } from "./userAPI";

const initialState:{users:IUser[],user:IUser}={users:[], user:{} as IUser}
export const useSlice=createAppSlice({
    name:'user',
    initialState,
    reducers:(create)=>({
        getUsersData:create.asyncThunk(
            async()=>{
                return await getUsersAPI()
            },
            {
                fulfilled:(state,action)=>{
                    state.users=action.payload
                }
            }
        ),
        getUserByIdData:create.asyncThunk(
            async(id:number)=>{
                return await getUserByIdAPI(id)

            },{
                fulfilled:(state,action)=>{
                    state.user=action.payload
                }
            }
        ),
        createUserData:create.asyncThunk(
            async(us:IUser)=>{
                return await createUserAPI(us)
            }
        ),
        updateUserData:create.asyncThunk(
            async({id,us}:{id:number,us:{name:string, email:string}})=>{
                return await updateUserAPI({id,us})
            }
        )
    }),
    selectors:{
        selectUsers:(app)=>app.users,
        selectUser:(app)=>app.user,
        

    }
})

export const {getUserByIdData, getUsersData,createUserData,updateUserData} = useSlice.actions
export const {selectUser,selectUsers} = useSlice.selectors