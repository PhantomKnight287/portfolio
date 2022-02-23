import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function LaptopModel({ ...props }) {
  const group = useRef<JSX.IntrinsicElements["group"]>();
  useEffect(() => {
    if (group.current && group.current.add) {
      const loader = new GLTFLoader();
      loader.load("/models/laptop/scene.gltf", (gltf) => {
        (group.current as any).add(gltf.scene);
        gltf.scene.position.set(-130,62,-102)
        gltf.scene.scale.set(1,1,1)
        //  the laptop is facing the left wall so rotate it 90 degrees
        gltf.scene.rotation.set(0,(Math.PI/2),0)
        gltf.scene.castShadow = true
      });
    }
  }, []);
  return <group ref={group} {...props}></group>;
}
