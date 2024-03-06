import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <section className={styles.overallContainer}>
      <section className={styles.borderContainer}>
        <p>Let&apos;s</p>
        <hr style={{height: '1px', border: "0.5px solid #000"}}  />
        <p id={styles.talk}>Talk</p>
        <hr style={{height: '1px', border: "0.5px solid #000"}} />
        <a target="_blank" href="mailto:onioludamola@gmail.com" id={styles.contactButton}>via email</a>
      </section>

      <div className={styles.footer}>
        <div className={styles.socials}>
          <a target="_blank" href="https://github.com/Blackie01">GitHub</a>
          <a target="_blank" href="https://twitter.com/blhack_">Twitter</a>
        </div>

        <div>Design and Development: Oludamola Oni (©a blhack site)</div>
      </div>
    </section>
  );
};

export default Contact;
