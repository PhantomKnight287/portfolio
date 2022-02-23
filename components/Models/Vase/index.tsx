
import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function FlowerVaseModel({ ...props }) {
  const group = useRef<JSX.IntrinsicElements["group"]>();
  useEffect(() => {
    if (group.current && group.current.add) {
      const loader = new GLTFLoader();
      loader.load("/models/Flowers/scene.gltf", (gltf) => {
        (group.current as any).add(gltf.scene);
        gltf.scene.position.set(0,35,0);
        gltf.scene.castShadow = true
      });
    }
  }, []);
  return <group ref={group} {...props}></group>;
}
