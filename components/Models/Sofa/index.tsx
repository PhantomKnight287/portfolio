import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function SofaModel({ ...props }) {
  const group = useRef<JSX.IntrinsicElements["group"]>();
  useEffect(() => {
    if (group.current && group.current.add) {
      const loader = new GLTFLoader();
      loader.load("/models/sofa/scene.gltf", (gltf) => {
        (group.current as any).add(gltf.scene);
        gltf.scene.position.set(0,35,120)
        gltf.scene.scale.set(1,1,1)
        gltf.scene.rotation.set(0,Math.PI,0)
        gltf.scene.castShadow = true
      });
    }
  }, []);
  return <group ref={group} {...props}></group>;
}
