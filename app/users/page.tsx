import type { Metadata } from "next";
import { ShowUsersPage } from "../components/ShowUsersPage";

export default function IndexPage() {
  return <ShowUsersPage/>
}

export const metadata: Metadata = {
  title: "Users",
};