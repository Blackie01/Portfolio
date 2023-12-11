'use client'
import React from "react"
import Navigation from "../components/nav"
import styles from './home.module.css'
import Hero from "../components/Hero"

const Homepage = () => {
    return (
        <div id={styles.homeContainer}>
            <Navigation/>
            <Hero/>
        </div>
    )
}

export default Homepage