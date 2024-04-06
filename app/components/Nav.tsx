"use client";
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.css";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/"
      >
        Products
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/addProduct" ? styles.active : ""
        }`}
        href="/addProduct"
      >
        AddProduct
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/category" ? styles.active : ""
        }`}
        href="/category"
      >
        Category
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/addCategory" ? styles.active : ""
        }`}
        href="/addCategory"
      >
        AddCategory
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/users" ? styles.active : ""
        }`}
        href="/users"
      >
        Users
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/addUser" ? styles.active : ""
        }`}
        href="/addUser"
      >
        Adduser
      </Link>
    </nav>
  );
};
