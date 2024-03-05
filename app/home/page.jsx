'use client'
import React, {useEffect} from "react"
import Navigation from "../components/nav"
import styles from './home.module.css'
import Hero from "../components/Hero"
import Construction from "../components/Construction"
import About from '../components/about'
import Work from '../components/work'
import Contact from '../components/contact'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Homepage = () => {
    useEffect(() => {
        gsap.to("body", {
          backgroundColor: gsap.getProperty(".homeContainer", "--dark"), // Initial background color
        });
    
        ScrollTrigger.create({
          trigger: ".color-dark", // Trigger when entering the Work component section
          start: "top top",
          endTrigger: ".color-light", // End trigger when leaving the About or Contact section
          end: "bottom bottom",
          onEnter: () => {
            gsap.to("body", {
              backgroundColor: gsap.getProperty("html", "--dark"), // Change to dark background color
              duration: 0.5,
            });
          },
          onLeaveBack: () => {
            gsap.to("body", {
              backgroundColor: gsap.getProperty("html", "--light"), // Return to normal background color
              duration: 0.5,
            });
          },
        });
      }, []);

    return (
        <div className={`${styles.homeContainer} ${styles.root}`}>
            <Navigation/>
            <Hero/>
            <Construction/>
            <About/>
            <div className={`${styles.section} ${styles.colorDark}`}>
            <Work/>
            </div>
            <Contact/>
        </div>
    )
}

export default Homepage