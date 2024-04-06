import { DetailsProductPage } from "@/app/components/DetailsProductPage";
import type { Metadata } from "next";

export default function IndexPage({params:{id}}:{params:{id:number}}) {
  return <DetailsProductPage id={id}/>
}

export const metadata: Metadata = {
  title: "Product Details",
};