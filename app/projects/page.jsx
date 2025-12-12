'use client'
import React from "react"
import Navigation from "../components/nav"
import styles from "./projects.module.css"

export default function Projects() {
    return (
        <section className={styles.overallContainer}>
            <Navigation/>

            <section className={styles.headerContainer}>
                <h1 className={styles.headerText}>~ Projects.</h1>
                <p className={styles.subline}>...just some of the things I&apos;ve built</p>
            </section>


        </section>
    )
}