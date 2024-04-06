import type { Metadata } from "next";
import { ShowProductsPage } from "./components/ShowProductsPage";

export default function IndexPage() {
  return <ShowProductsPage/>;
}

export const metadata: Metadata = {
  title: "Products",
};
