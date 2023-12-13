'use client'
import React from "react"
import Navigation from "../components/nav"
import styles from './home.module.css'
import Hero from "../components/Hero"
import Construction from "../components/Construction"

const Homepage = () => {
    return (
        <div id={styles.homeContainer}>
            <Navigation/>
            <Hero/>
            <Construction/>
        </div>
    )
}

export default Homepage