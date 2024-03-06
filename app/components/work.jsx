import React, { useEffect, useRef } from "react";
import styles from "./work.module.css";
import Image from "next/image";
import AIB from "../assets/aib.png";
import SyncSkills from "../assets/syncSkills.png";
import Scissors from "../assets/scissors.png";
import Automate from "../assets/automate.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  return (
    <section id={styles.overallContainer}>
      <div id={styles.row1}>
        <div id={styles.workIntro}>
          <p id={styles.workTitle}>Work</p>
          <p>
            I have built a number of stuff with Next.js, React.js, Angular, Vue,
            Vanilla JS, TypeScript, CSS, SCSS, MaterialUI and GSAP. Here are
            some:
          </p>
        </div>
        <div className={styles.overlay} id={styles.aibContainer}>
          <Image src={AIB} alt="" />
        </div>
      </div>

      <div id={styles.row2}>
        <div id={styles.row2Left}>
          <div className={styles.overlay} id={styles.syncSkillsContainer}>
            <Image src={SyncSkills} alt="" />
          </div>
          <div className={styles.overlay} id={styles.scissorsContainer}>
            <Image src={Scissors} alt="" />
          </div>
        </div>
        <div id={styles.row2Right}>
          <div className={styles.overlay} id={styles.automateContainer}>
            <Image src={Automate} alt="" />
          </div>
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
