import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Shadow } from "@react-three/drei";
import {
  Floor,
  Walls,
  Lights,
  TableModel,
  LaptopModel,
  BookModel,
  React,
  SofaModel,
  MainTableModel,
  TvTableModel,
  FlowerVaseModel,
  NextLogo,
  RustLogo,
  JsLogo,
} from "../components";
import dynamic from "next/dynamic";

const Chair = dynamic(() => import("../components/Models/Chair/index"), {
  ssr: false,
});
const Book = dynamic(() => import("../components/Models/Parrot"), {
  ssr: false,
});

const Home: NextPage = () => {
  useEffect(() => {
    if (process.env.NODE_ENV == "production") {
      window.scroll(0, 0);
    }
  }, []);
  return (
    <>
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
        <p style={{
          color:"rgb(255, 28, 92)",
          fontFamily:"Mulish",
        }} >
          Click on Projects Book to view Projects
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
            shadows
          >
            <style jsx>{`
              canvas {
                width: 100% !important;
                height: 100vh !important;
              }
            `}</style>
            <Suspense fallback={null}>
              <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
                addEventListener={undefined}
                hasEventListener={undefined}
                removeEventListener={undefined}
                dispatchEvent={undefined}
              />
              <Shadow color="black" colorStop={0} opacity={0.5} fog={false} />

              <Lights />
              <Floor />
              <Walls />
              <TableModel />
              <LaptopModel />
              <BookModel />
              <SofaModel />
              <MainTableModel />
              <TvTableModel />
              <FlowerVaseModel />
              <NextLogo />
              <RustLogo />
              <JsLogo />
              <Chair />
              <Book/>
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Home;
