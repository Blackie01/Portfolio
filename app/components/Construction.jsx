"use client";
import React from "react";
import CraneAnimate from "../../public/construction-crane-animate.svg";
import styles from "./construction.module.css";
import Image from "next/image";

export default function Construction() {
  return (
    <section id={styles.OverallContainer}>
      <div id={styles.imageContainer}>
        <Image src={CraneAnimate} alt=''/>
      </div>

      <div id={styles.textOuterContainer}>
        <div id={styles.textContainer}>
          <p>
            I <span id={styles.construct}>CONSTRUCT</span> PIXEL-PERFECT UIs
            LIKE A LEGO FACTORY
            <br />
            THEN I MAKE THEM FUNCTIONAL AND SECURE
          </p>

          <sub>...even your grandma can use my web apps</sub>
        </div>
      </div>
    </section>
  );
}
