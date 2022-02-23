import { Image, Html } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import {
  Mesh,
  MeshStandardMaterial,
  PlaneBufferGeometry,
  Texture,
  TextureLoader,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function TvTableModel({ ...props }) {
  const group = useRef<JSX.IntrinsicElements["group"]>();
  useEffect(() => {
    if (group.current && group.current.add) {
      const loader = new GLTFLoader();
      loader.load("/models/TvTable/scene.gltf", (gltf) => {
        (group.current as any).add(gltf.scene);
        gltf.scene.position.set(0, 110, -141);
        gltf.scene.scale.set(0.3, 0.3, 0.3);
        gltf.scene.castShadow = true;
        const loader = new TextureLoader();
        const texture = loader.load("/assets/Nextjs.png");
        const mesh = new Mesh(
          new PlaneBufferGeometry(100, 60),
          new MeshStandardMaterial({ map: texture,metalness:0, roughness:0 })
        );
        mesh.position.set(0, 110, -138);
        (group.current as any).add(mesh);
      });
    }
  }, []);
  return (
    <>
      <group ref={group} {...props}></group>
    </>
  );
}
