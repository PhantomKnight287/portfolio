import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { BsGithub } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";
const Home: NextPage = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Gurpal Singh | Portfolio</title>
        <meta property="og:title" content="Gurpal Singh | Portfolio" />
      </Head>
      <img
        width={400}
        height={400}
        src="/images/myself.jpg"
        alt="myself"
        className={styles.img}
      />
      <p className={styles.whoami}>Hi, I am Gurpal Singh</p>
      <p className={styles.detail}>
        A Full Stack Web Developer. I&apos;m 16 years old and from India.
        Currently Learning Rust and Web Assembly
      </p>
      <h1 className={styles.skills}>Skills</h1>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsContainerNested}>
          <span className={styles.blueText}>Python</span>
          <span className={styles.orangeText}>Html</span>
          <span style={{ color: "#264de4 " }}>Css</span>
          <span className={styles.yellowText}>Javascript</span>
          <span style={{ color: "#007acc " }}>Typescript</span>
          <span style={{ color: "#ce422b" }}>Rust</span>
        </div>
        <div className={styles.skillsContainerNested}>
          <span style={{ color: " #61dbfb" }}>React</span>
          <span style={{ color: "white" }}>Nextjs</span>
          <span style={{ color: "#3c873a" }}>Nodejs</span>
          <span style={{ color: "#61DBFB" }}>React Native</span>
        </div>
      </div>
      <h1 className={styles.myProjects}>My Projects</h1>
      <p className={styles.projectP}>
        I am a Student so most of my time is spent on studies. I try to make
        whatever comes in my mind in my spare time.
      </p>
      <button
        className={`${styles.button} ${
          hover ? "animate__animated animate__tada" : ""
        }`}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </button>
      <div className={styles.logoHolder}>
        <a
          href="https://github.com/PhantomKnight287"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub size={40} color="white" cursor="pointer" />
        </a>
      </div>
    </div>
  );
};

export default Home;
