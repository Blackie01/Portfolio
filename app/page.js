"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import Navigation from "./components/nav";
import Hero from "./components/Hero";
import Construction from "./components/Construction";
import About from "./components/about";
import Work from "./components/work";
import Contact from "./components/contact";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    gsap.fromTo(
      "#main",
      {
        backgroundColor: gsap.getProperty("html", "--light"),
      },
      {
        scrollTrigger: {
          trigger: ".work",
          scrub: true,
          start: "top 40%",
          end: "top top",
          duration: 0.05,

          toggleActions: "play reverse play reverse",
        },
        backgroundColor: gsap.getProperty("html", "--dark"),
      }
    );

    gsap.fromTo(
      "#main",
      {},
      {
        scrollTrigger: {
          trigger: ".contact",
          scrub: true,
          start: "top 80%",
          end: "top top",
          duration: 0.05,
        },
        backgroundColor: gsap.getProperty("html", "--light"),
      }
    );
  }, []);

  return (
    <main id="main" className={styles.main}>
      <Navigation />
      <Hero />
      <Construction />
      <About id="about" />
      <div id="work" className="work">
        <Work />
      </div>
      <div id="contact" className="contact">
        <Contact />
      </div>
    </main>
  );
}
