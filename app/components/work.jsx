import React, { useEffect, useRef } from "react";
import styles from "./work.module.css";
import Image from "next/image";
import AIB from "../assets/aib.png";
import SyncSkills from "../assets/syncSkills.png";
import Scissors from "../assets/scissors.png";
import Automate from "../assets/automate.png";
import Link from "next/link";

const Work = () => {
  const projectId = {
    aib: 1,
  };
  return (
    <section id={styles.overallContainer}>
      <div id={styles.row1}>
        <div id={styles.workIntro}>
          <p id={styles.workTitle}>Work</p>
          <p>
            I have built a number of stuff with Next.js, React.js, Angular,
            JavaScript, TypeScript, CSS, SCSS, TailwindCSS MaterialUI, Redux and
            GSAP. Here are some:
          </p>
        </div>
        <Link
          target="_blank"
          href={"https://akinolaifeoluwa.vercel.app/"}
          className={styles.overlay}
          id={styles.aibContainer}
        >
          <Image src={AIB} alt="" />
          <div className={styles.info}>
            <div className={styles.slideContainer}>
              <p>
                <span className={styles.infoTitle}>Name:</span>
                <span>AIB Portfolio</span>
              </p>
              <p>
                <span className={styles.infoTitle}>Detail:</span>
                <span>
                  Scroll animated portfolio for Akinola Ifeoluwa, a software
                  developer.
                </span>
              </p>
              <p>
                <span className={styles.infoTitle}>Tech Stack:</span>
                <span>Next.js | JavaScript | GSAP | CSS</span>
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div id={styles.row2}>
        <div id={styles.row2Left}>
          <Link
            target="_blank"
            href={"https://syncskills.vercel.app/"}
            className={styles.overlay}
            id={styles.syncSkillsContainer}
          >
            <Image src={SyncSkills} alt="" />
            <div className={styles.info}>
              <div className={styles.slideContainer}>
                <p>
                  <span className={styles.infoTitle}>Name:</span>
                  <span>SyncSkills</span>
                </p>
                <p>
                  <span className={styles.infoTitle}>Detail:</span>
                  <span>
                    Landing page exploration for SyncSkills - a digital school.
                  </span>
                </p>
                <p>
                  <span className={styles.infoTitle}>Tech Stack:</span>
                  <span>Next.js | JavaScript | CSS</span>
                </p>
              </div>
            </div>
          </Link>
          <Link
            target="_blank"
            href={"https://scissors-neon.vercel.app/"}
            className={styles.overlay}
            id={styles.scissorsContainer}
          >
            <Image src={Scissors} alt="" />
            <div className={styles.info}>
              <div className={styles.slideContainer}>
                <p>
                  <span className={styles.infoTitle}>Name:</span>
                  <span>Scissors</span>
                </p>
                <p>
                  <span className={styles.infoTitle}>Detail:</span>
                  <span>A link shortening tool.</span>
                </p>
                <p>
                  <span className={styles.infoTitle}>Tech Stack:</span>
                  <span>React | JavaScript | CSS</span>
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div id={styles.row2Right}>
          <Link
            target="_blank"
            href={"https://auto-mate.vercel.app/"}
            className={styles.overlay}
            id={styles.automateContainer}
          >
            <Image src={Automate} alt="" />
            <div className={styles.info}>
              <div className={styles.slideContainer}>
                <p>
                  <span className={styles.infoTitle}>Name:</span>
                  <span>Automate</span>
                </p>
                <p>
                  <span className={styles.infoTitle}>Detail:</span>
                  <span>
                    Product exploration for Automate - a concept Fleet
                    Management tool.
                  </span>
                </p>
                <p>
                  <span className={styles.infoTitle}>Tech Stack:</span>
                  <span>React | JavaScript | CSS</span>
                </p>
              </div>
            </div>
          </Link>
          <div id={styles.needMyServiceContainer}>
            Since I&apos;m only as good as what I build next, I keep learning
            new web technologies and tools that will improve the quality of my
            work, one commit at a time.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
