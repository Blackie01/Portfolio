import React, { useEffect, useRef } from "react";
import styles from "./work.module.css";
import Image from "next/image";
import AIB from "../assets/aib.png";
import Imbrief from "../assets/imbrief.png"
import ExpenseExpress from "../assets/xpenseExpress.png"
import SyncSkills from "../assets/syncSkills.png";
import FinAi from "../assets/finAi.png"
import Scissors from "../assets/scissors.png";
import Automate from "../assets/automate.png";
import Cashabank from "../assets/cashabank.png"
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
            JavaScript, TypeScript, CSS, SCSS, TailwindCSS, MaterialUI, Redux and
            GSAP. Here are some:
          </p>
        </div>
        <Link
          target="_blank"
          href={"https://www.immigrationbrief.com/"}
          className={styles.overlay}
          id={styles.aibContainer}
        >
          <Image src={Imbrief} alt="" />
          <div className={styles.info}>
            <div className={styles.slideContainer}>
              <p>
                <span className={styles.infoTitle}>Name:</span>
                <span>Immigration Brief</span>
              </p>
              <p>
                <span className={styles.infoTitle}>Detail:</span>
                <span>
                  Contract founding engineer on the Immigration Brief team; built the marketing web pages, core 
                  pricing and subscription flow, SSE notification system, user profile management, etc. 
                </span>
              </p>
              <p>
                <span className={styles.infoTitle}>Tech Stack:</span>
                <span>Next.js | TypeScript | Framer Motion | TailwindCSS | RTK | Jest</span>
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div id={styles.row2}>
        <div id={styles.row2Left}>
          <Link
            target="_blank"
            href={"https://expense-xpress.vercel.app/"}
            className={styles.overlay}
            id={styles.syncSkillsContainer}
          >
            <Image src={ExpenseExpress} alt="" />
            <div className={styles.info}>
              <div className={styles.slideContainer}>
                <p>
                  <span className={styles.infoTitle}>Name:</span>
                  <span>ExpenseExpress</span>
                </p>
                <p>
                  <span className={styles.infoTitle}>Detail:</span>
                  <span>
                    An expense and income tracking application for small businesses to keep track of credit and debit transactions.
                    Also used to generate invoice for their customers. 
                  </span>
                </p>
                <p>
                  <span className={styles.infoTitle}>Tech Stack:</span>
                  <span>Next.js | TypeScript | RTK | Jest | TailwindCSS</span>
                </p>
              </div>
            </div>
          </Link>
          <Link
            target="_blank"
            href={"https://finai-landing-page.vercel.app/"}
            className={styles.overlay}
            id={styles.scissorsContainer}
          >
            <Image src={FinAi} alt="" />
            <div className={styles.info}>
              <div className={styles.slideContainer}>
                <p>
                  <span className={styles.infoTitle}>Name:</span>
                  <span>FinAi</span>
                </p>
                <p>
                  <span className={styles.infoTitle}>Detail:</span>
                  <span>FinAi is an AI powered fintech application that helps users manage their finances. My work involved building
                  the marketing pages, the blog interface, and optimizing the heavy animated pages for high-performance.
                  </span>
                </p>
                <p>
                  <span className={styles.infoTitle}>Tech Stack:</span>
                  <span>Next.js | TypeScript | TailwindCSS | Framer Motion</span>
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div id={styles.row2Right}>
          <Link
            target="_blank"
            href={"https://www.cashabank.com/"}
            className={styles.overlay}
            id={styles.automateContainer}
          >
            <Image src={Cashabank} alt="" />
            <div className={styles.info}>
              <div className={styles.slideContainer}>
                <p>
                  <span className={styles.infoTitle}>Name:</span>
                  <span>Cashabank MFB</span>
                </p>
                <p>
                  <span className={styles.infoTitle}>Detail:</span>
                  <span>
                    Part of the core team building the Cashabank MFB web applications. Responsible for the marketing landing pages, 
                    dashboard, etc.
                  </span>
                </p>
                <p>
                  <span className={styles.infoTitle}>Tech Stack:</span>
                  <span>Next.js | TypeScript | TailwindCSS | React Query</span>
                </p>
              </div>
            </div>
          </Link>
          {/* <div id={styles.needMyServiceContainer}>
            Since I&apos;m only as good as what I build next, I keep learning
            new web technologies and tools that will improve the quality of my
            work, one commit at a time.
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Work;
