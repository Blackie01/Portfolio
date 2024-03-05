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

  return (
    <div id={styles.navbarcontainer}>
      <div id={styles.logo}>
        <Link href="/">Oludamola</Link>
      </div>

      <div id={styles.menu}>
        <span>Work</span>
        <Link href="/resume">
          <span>Resume</span>
        </Link>
        <span>Contact</span>
      </div>
      <div id={styles.hamburger} onClick={handleResponsiveMenuOpen}>
        {openResponsiveMenu ? (
          <span class="material-symbols-outlined">close</span>
        ) : (
          <span class="material-symbols-outlined">sort</span>
        )}
      </div>

      <div ref={responsiveMenuRef} id={styles.responsiveMenu}>
        <span>Work</span>
        <Link href="/resume">
          <span>Resume</span>
        </Link>
        <span>Contact</span>
      </div>
    </div>
  );
}
