"use client";
import React from "react";
import styles from "./resume.module.css";
import Link from "next/link";

const Resume = () => {

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1h5Om7ClGMWe0w5UIIyg2AoeOHq7NVEGz/view?usp=sharing"
    );
  };

  return (
    <section className={styles.overallContainer}>
      <div id={styles.container}>
        <Link href={"/"} id={styles.logoContainer}>
          Home
        </Link>

        <p id={styles.downloadButton} onClick={handleDownload}>
          Download
        </p>
        <iframe
          style={{ border: "none" }}
          src="https://drive.google.com/file/d/1h5Om7ClGMWe0w5UIIyg2AoeOHq7NVEGz/preview"
          width="100%"
          height="100%"
          allow="autoplay"
        ></iframe>
      </div>
    </section>
  );
};



export default Resume;
