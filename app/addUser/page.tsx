import type { Metadata } from "next";
import { AddUserPage } from "../components/AddUserPage";

export default function IndexPage() {
  return <AddUserPage/>;
}

export const metadata: Metadata = {
  title: "Add User",
};