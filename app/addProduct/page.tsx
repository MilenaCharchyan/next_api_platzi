import type { Metadata } from "next";
import { AddProductPage } from "../components/AddProductPage";

export default function IndexPage() {
  return <AddProductPage/>;
}

export const metadata: Metadata = {
  title: "Add Product",
};