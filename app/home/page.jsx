'use client'
import React from "react"
import Navigation from "../components/nav"
import styles from './home.module.css'

const Homepage = () => {
    return (
        <div id={styles.homeContainer}>
            <Navigation/>
        </div>
    )
}

export default Homepage