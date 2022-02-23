import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function MainTableModel({ ...props }) {
  const group = useRef<JSX.IntrinsicElements["group"]>();
  useEffect(() => {
    if (group.current && group.current.add) {
      const loader = new GLTFLoader();
      loader.load("/models/MainTable/scene.gltf", (gltf) => {
        (group.current as any).add(gltf.scene);
        gltf.scene.position.set(0,1,0)
        gltf.scene.scale.set(0.7,0.4,0.8)
        gltf.scene.rotation.set(0,Math.PI,0)
        gltf.scene.castShadow = true
      });
    }
  }, []);
  return <group ref={group} {...props}></group>;
}
