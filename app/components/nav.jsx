"use client";
import React from "react";
import styles from "./nav.module.css";
import Link from "next/link";

export default function Navigation() {
  return (
    <div id={styles.navbarcontainer}>
      <div id={styles.logo}>
        <Link href="/">Oludamola</Link>
      </div>

      <div id={styles.menu}>
        <span>Work</span>
        <Link href='/resume'>
        <span>Resume</span>

        </Link>
        <span>Contact</span>
      </div>
      <div id={styles.hamburger}>
        <span class="material-symbols-outlined">sort</span>
      </div>
    </div>
  );
}
