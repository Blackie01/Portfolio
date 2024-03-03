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
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScrollBgChange = () => {
        const sectionPosition = sectionRef.current?.getBoundingClient()
        if (sectionPosition?.top < window.innerHeight && sectionPosition.bottom < 0) {
            document.body.style.backgroundColor = '#000'
        } else {
            document.body.style.backgroundColor = '#E1DFDD'
        }
    }

    ScrollTrigger.create ({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        onEnter: handleScrollBgChange(),
        onLeaveBack: handleScrollBgChange(),
    })

    return () => {
        window.removeEventListener('scroll', handleScrollBgChange)
    }
  }, [])

  return (
    <section id={styles.overallContainer}>
      <div id={styles.row1}>
        <div id={styles.workIntro}>
          <p>Work</p>
          <p>
            I have built a number of stuff with Next.js, React.js, Angular, Vue,
            Vanilla JS, TypeScript, CSS, SCSS, MaterialUI and GSAP. Here are
            some:
          </p>
        </div>
        <div className={styles.overlay} id={styles.aibContainer}>
          <Image src={AIB} />
        </div>
      </div>

      <div id={styles.row2}>
        <div id={styles.row2Left}>
          <div className={styles.overlay} id={styles.syncSkillsContainer}>
            <Image src={SyncSkills} />
          </div>
          <div className={styles.overlay} id={styles.scissorsContainer}>
            <Image src={Scissors} />
          </div>
        </div>
        <div id={styles.row2Right}>
            <div className={styles.overlay} id={styles.automateContainer}>
            <Image src={Automate} />
            </div>
            <div id={styles.needMyServiceContainer}>
                Need my service?
            </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
