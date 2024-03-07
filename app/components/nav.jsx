"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./nav.module.css";
import Link from "next/link";

export default function Navigation() {
  const [openResponsiveMenu, setOpenResponsiveMenu] = useState(false);
  const responsiveMenuRef = useRef();

  const handleResponsiveMenuOpen = () => {
    setOpenResponsiveMenu(!openResponsiveMenu);
  };

  useEffect(() => {
    if (responsiveMenuRef.current) {
      responsiveMenuRef.current.style.transform = openResponsiveMenu
        ? "translateY(0)"
        : "translateY(-100vh)";
    }
  }, [openResponsiveMenu]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToMobileSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      handleResponsiveMenuOpen()
    }
  };

  return (
    <div id={styles.navbarcontainer}>
      <div id={styles.logo}>
        <Link className={styles.menuItem} href="/">Oludamola</Link>
      </div>

      <div id={styles.menu}>
        <Link href="" onClick={() => scrollToSection("work")}>
          <span className={styles.menuItem}>Work</span>
        </Link>
        <Link href="/resume">
          <span className={styles.menuItem}>Resume</span>
        </Link>
        <Link href="" onClick={() => scrollToSection("contact")}>
          <span className={styles.menuItem}>Contact</span>
        </Link>
      </div>
      <div id={styles.hamburger} onClick={handleResponsiveMenuOpen}>
        {openResponsiveMenu ? (
          <span class="material-symbols-outlined">close</span>
        ) : (
          <span class="material-symbols-outlined">sort</span>
        )}
      </div>

      <div ref={responsiveMenuRef} id={styles.responsiveMenu}>
        <Link href="" onClick={() => scrollToMobileSection("work")}>
          <span>Work</span>
        </Link>
        <Link href="/resume">
          <span>Resume</span>
        </Link>
        <Link href="" onClick={() => scrollToMobileSection("contact")}>
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
}
