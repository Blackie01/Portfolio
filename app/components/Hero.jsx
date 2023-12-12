"use client";
import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import Crane from '../../public/Construction crane-bro.svg'

export default function Hero() {
  return (
    <section id={styles.heroContainer}>
      <div id={styles.heroTextContainer}>
        <p id={styles.frontend}>FRONT-END</p>
        <div id={styles.developerDiv}>
          <span>D</span>
          <span>E</span>
          <span>V</span>
          <span>E</span>
          <span>L</span>
          <span>O</span>
          <span>P</span>
          <span>E</span>
          <span>R</span>
        </div>
        <p id={styles.oludamolaOni}>OLUDAMOLA ONI</p>
      </div>
      
      <Image src={Crane}/>
    </section>
  );
}