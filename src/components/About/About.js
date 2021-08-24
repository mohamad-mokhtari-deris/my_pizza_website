import React from 'react';
import Head from 'next/head';
import styles from './About.module.css';

function About(props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>About</title>
                <link rel="icon" href="./favicon.ico"/>
            </Head>
            <p className={styles.description}>This is the aboute page. This is where you mention things about stuff.</p>
        </div>
    );
}

export default About;