"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Homepage from "./home/page";
// import Navigation from "../components/nav"
import Navigation from "./components/nav";
// import styles from './home.module.css'
import Hero from "./components/Hero";
import Construction from "./components/Construction";
import About from "./components/about";
import Work from "./components/work";
import Contact from "./components/contact";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // const [isSectionInView, setIsSectionInView] = useState();

  // useEffect(() => {
  //   const contactSection = document.querySelector(".contact");
  //   console.log('contact section', contactSection)
  //   const handleScroll = () => {
  //     setIsSectionInView(contactSection.getBoundingClientRect().top >= 0);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

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
        {
          // backgroundColor: gsap.getProperty("main", "--dark"),
        },
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
      {/* <Homepage /> */}

      <Navigation />
      <Hero />
      <Construction />
      <About />
      <div className="work">
        <Work />
      </div>
      <div className="contact">
        <Contact />
      </div>
    </main>
  );
}
