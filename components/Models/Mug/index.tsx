import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
export function MugModel({ ...props }) {
  const group = useRef<JSX.IntrinsicElements["group"]>();
  useEffect(() => {
      
    if (group.current && group.current.add) {
      const loader = new GLTFLoader();
      loader.load("/models/mug/scene.gltf", (gltf) => {
        (group.current as any).add(gltf.scene);
        gltf.scene.position.set(-130, 163, -70);
        gltf.scene.scale.set(5,5,5)
        gltf.scene.rotation.set(0, 0, Math.PI);
        gltf.scene.castShadow = true;
      });
    }
  }, []);
  return <group ref={group} {...props}></group>;
}
