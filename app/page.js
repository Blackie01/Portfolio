'use client'
import React, {useEffect} from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Homepage from "./home/page";
// import Navigation from "../components/nav"
import Navigation from "./components/nav";
// import styles from './home.module.css'
import Hero from "./components/Hero"
import Construction from "./components/Construction"
import About from './components/about'
import Work from './components/work'
import Contact from './components/contact'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  useEffect(() =>{
    gsap.fromTo( "#main", {
      backgroundColor: gsap.getProperty("html", "--light")
    }, {
      scrollTrigger: {
        trigger: ".work",
        scrub: true,
        start: 'top 40%',
        end: 'top top',
        // () => "+=" + document.querySelector(".work").offsetHeight, 
        duration: 0.05,
      },
      backgroundColor: gsap.getProperty("html", "--dark")
    });

  }, [])

  // useEffect(() =>{
  //   gsap.fromTo( ".contact", {
  //     backgroundColor: gsap.getProperty("html", "")
  //   }, {
  //     scrollTrigger: {
  //       trigger: ".contact",
  //       scrub: true,
  //       start: 'top 40%',
  //       end: 'top top',
  //       duration: 0.05,
  //     },
  //     backgroundColor: gsap.getProperty("html", "--light")
  //   });

  // }, [])
 


  return (
    <main id="main" className={styles.main}>
      {/* <Homepage /> */}

      <Navigation/>
            <Hero/>
            <Construction/>
            <About/>
            <div className="work">
            <Work/>
            </div>
            <div className="contact">
            <Contact/>
            </div>
    </main>
  );
}
