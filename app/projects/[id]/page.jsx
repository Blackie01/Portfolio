"use client";

import React, { useEffect, useState } from "react";
import styles from "./projectCaseStudy.module.css";
import { useSearchParams } from "next/navigation";

const ProjectCaseStudy = () => {
  const [searchParams] = useSearchParams();
  const [caseStudyId, setCaseStudyId] = useState(null);

  useEffect(() => {
    const id = searchParams.get("id");
    setCaseStudyId(id);
  }, [searchParams]);

  console.log(caseStudyId);

  return (
    <section className={styles.overallContainer}>
      <div className={styles.tableOfContent}>
        <p>Flow:</p>
      </div>
      <div className={styles.contentDisplay}>Content goes here</div>
    </section>
  );
};

export default ProjectCaseStudy;
