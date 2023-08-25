"use client";

import { useState, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navLinks } from "@/constants/constants";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const handelMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <Link href="/">Natural Thing</Link>
        </div>
        <ul className={styles.navbarLinks}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.navbarToggleBtn} onClick={handelMenuOpen}>
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </nav>

      <div
        ref={menuRef}
        className={
          menuOpen
            ? `${styles.dropdownMenu} ${styles.open}`
            : `${styles.dropdownMenu}`
        }
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.url} onClick={handelMenuOpen}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
