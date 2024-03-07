import React from "react";
import styles from "./about.module.css";
import Oludamola from "../assets/oludamola.png";
import AIB from "../assets/aib.png";
import Image from "next/image";

const About = () => {
  return (
    <section className={styles.overallContainer}>
      <div className={styles.mainContent}>
        I&apos;M OLUDAMOLA ONI, A <strong>FRONTEND ENGINEER</strong> WITH
        BACKGROUND IN PRODUCT MANAGEMENT AND CONTENT MARKETING. WHEN WORKING ON
        A PROJECT, I MAKE SURE TO LEVERAGE MY KNOWLEDGE OF HOW PRODUCTS SHOULD
        WORK, AND WHAT PEOPLE WANT TO SEE.
        <br />
        <br />
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={Oludamola} alt="" />
        </div>
        <br />
        I&apos;M NOT THAT DEVELOPER THAT JUST WANTS TO SIT AND WAIT FOR
        FIGMA FILES. NO.{" "}
        <strong>
          I WANT TO BE A CORE PART OF THE PROCESS OF DEVELOPING GREAT PRODUCTS.
        </strong>{" "}
        I MEAN; FINDING PROBLEMS, IDEATING FEASIBLE SOLUTIONS, CONTRIBUTING
        ENGINEERING EXPERTISE, CONCEPTUALISING JAW-DROPPING DESIGNS, ETC. THESE
        ARE THE THINGS I LIVE FOR.
        <br />
        <br />I LIVE BY STEVE JOB&apos;S WORDS:{" "}
        <strong>
          &apos;DESIGN IS NOT JUST WHAT IT LOOKS LIKE, AND FEELS LIKE. DESIGN IS
          HOW IT WORKS.&apos;
        </strong>{" "}
        SO, I&apos;M ALWAYS OBSESSING OVER THE DETAILS OF HOW PRODUCTS LOOK,
        FEEL, AND WORK.
        <br />
        <br />
      </div>

      <div className={styles.subContent}>
        When I&apos;m not coding, or writing fiction, I&apos;m either watching
        K.drama or bookmarking really cool designs on Twitter (I&apos;m
        struggling to call it X).
        <br />
        <br />
        And oh! I love Formula 1.
      </div>
    </section>
  );
};

export default About;
