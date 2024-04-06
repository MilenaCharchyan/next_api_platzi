import { DetailsUserPage } from "@/app/components/DetailsUserPage";
import type { Metadata } from "next";

export default function IndexPage({params:{id}}:{params:{id:number}}) {
  return <DetailsUserPage id={id}/>
}

export const metadata: Metadata = {
  title: "Users Details",
};