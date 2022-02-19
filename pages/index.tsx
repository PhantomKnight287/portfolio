import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Floor, Walls,Lights,TableModel } from "../components";
const Home: NextPage = () => {
  useEffect(() => {
    if (process.env.NODE_ENV == "production") {
      window.scroll(0, 0);
    }
  }, []);
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
      </p>
      <div
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <Canvas
          camera={{
            position: [0, 200, 350],
          }}
        >
          <style jsx>{`
            canvas {
              width: 100% !important;
              height: 100vh !important;
            }
          `}</style>
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            addEventListener={undefined}
            hasEventListener={undefined}
            removeEventListener={undefined}
            dispatchEvent={undefined}
          />
          <Lights/>
          <Floor />
          <Walls />
          <TableModel/>
        </Canvas>
      </div>
    </div>
  );
};

export default Home;
