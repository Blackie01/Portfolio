"use client";
import React, { useState } from "react";
import styles from "./resume.module.css";
import Navigation from "../components/nav";
import Image from "next/image";

const Resume = () => {
  const [downloadState, setDownlaodState] = useState("Download");
  const downloadResume = () => {
    setDownlaodState("Downloading");
    const documentLink = "https://docs.google.com/document/d/1mwfRa5e2EFLaLOGd0e48S_MRI-PdQetd/export?format=pdf"
    const temporaryAnchorElement = document.createElement("a");
    temporaryAnchorElement.href = documentLink;
    temporaryAnchorElement.setAttribute("download", "oludamola.pdf");
    document.body.appendChild(temporaryAnchorElement);
    temporaryAnchorElement.click();
    document.body.removeChild(temporaryAnchorElement);
    setDownlaodState("Done");
    setTimeout(() => {
      setDownlaodState("Download");
    }, 2000);
  };

  return (
    <section className={styles.overallContainer}>
      <Navigation />
      <div id={styles.container}>
        {/* <p style={{cursor: 'pointer'}} onClick={downloadResume}>{downloadState}</p> */}
        <iframe
          className={styles.iFrame}
          src="https://docs.google.com/document/d/e/2PACX-1vTrxFfAevFLUdfzQ3S4tsC3BRRbO1dLAdPkIXOgoYaeQ9nTk6HO9TY5mhy-fBMZKg/pub?embedded=true"
        ></iframe>
      </div>
    </section>
  );
};

export default Resume;
