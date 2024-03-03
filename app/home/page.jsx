'use client'
import React from "react"
import Navigation from "../components/nav"
import styles from './home.module.css'
import Hero from "../components/Hero"
import Construction from "../components/Construction"
import About from '../components/about'
import Work from '../components/work'

const Homepage = () => {
    return (
        <div id={styles.homeContainer}>
            <Navigation/>
            <Hero/>
            <Construction/>
            <About/>
            <Work/>
        </div>
    )
}

export default Homepage