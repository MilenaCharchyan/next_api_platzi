import { createAppSlice } from "@/lib/createAppSlice";
import { IProduct, IRange } from "@/lib/type/type";
import { createProductAPI, deleteProductByIdAPI, filterProductByCategoryAPI, filterProductByPriceRangeAPI, filterProductByTitleAPI, getProductAPI, getProductByIdAPI, updateProductAPI } from "./productAPI";

const initialState: { products: IProduct[], product: IProduct } = { products: [], product: {} as IProduct }
export const productSlice = createAppSlice({
    name: 'product',
    initialState,
    reducers: (create) => ({
        getProductsData: create.asyncThunk(
            async () => {
                return await getProductAPI()
            },
            {
                fulfilled: (state, action) => {
                    state.products = action.payload
                }
            }
        ),
        getProductByIdData: create.asyncThunk(
            async (id: number) => {
                return await getProductByIdAPI(id)
            }, {
            fulfilled: (state, action) => {
                state.product = action.payload
            }
        }
        ),
        filterProductByTitleData: create.asyncThunk(
            async (text: string) => {
                return await filterProductByTitleAPI(text)
            }, {
            fulfilled: (state, action) => {
                state.products = action.payload
            }
        }
        ),
        filterProductByPriceRangeData: create.asyncThunk(
            async ({ price_min, price_max }: IRange) => {
                return await filterProductByPriceRangeAPI({ price_min, price_max })
            }, {
            fulfilled: (state, action) => {
                state.products = action.payload
            }
        }
        ),
        filterProductByCategoryData: create.asyncThunk(
            async (id: number) => {
                return await filterProductByCategoryAPI(id)
            }, {
            fulfilled: (state, action) => {
                state.products = action.payload
            }
        }
        ),


        createProductData: create.asyncThunk(
            async (pr: any) => {
                return await createProductAPI(pr)
            }
        ),
        updateProductData: create.asyncThunk(
            async ({ id, pr }: { id: number, pr: { title: string, price: number, description: string, categoryId: number, images: string[] } }) => {
                return await updateProductAPI({ id, pr });
            }
        ),
        deleteProductByIdData: create.asyncThunk(
            async (id: number) => {
                return await deleteProductByIdAPI(id)
            }
        )
    }),
    selectors: {
        selectProducts: (app) => app.products,
        selectProduct: (app) => app.product
    }
})
export const {
    getProductsData,
    getProductByIdData,
    createProductData,
    updateProductData,
    deleteProductByIdData,
    filterProductByCategoryData,
    filterProductByPriceRangeData,
    filterProductByTitleData
} = productSlice.actions
export const { selectProduct, selectProducts } = productSlice.selectors