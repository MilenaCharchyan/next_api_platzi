
export interface IUser  {
    id: number;
    name: string;
    role: string;
    email: string;
    password: string;
    avatar: string;
}

export interface IProduct  {
    id: number;
    title: string;
    price: number;
    description: string;
    category: ICategory;
    categoryId: number;
    images: string[];
}

export interface ICategory  {
    id: number;
    name: string;
    image: string;
}
export interface IRange{
    price_min:number;
    price_max:number
}