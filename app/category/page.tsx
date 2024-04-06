import type { Metadata } from "next";
import { ShowCategoryPage } from "../components/ShowCategoryPage";

export default function IndexPage() {
  return <ShowCategoryPage/>;
}

export const metadata: Metadata = {
  title: "Category",
};