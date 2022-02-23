import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MeshStandardMaterial, TextureLoader } from "three";
export function BookModel({ ...props }) {
  const group = useRef<JSX.IntrinsicElements["group"]>();
  useEffect(() => {
    // if (group.current && group.current.add) {
    //   const loader = new GLTFLoader();
    //   loader.load("/models/book/scene.gltf", (gltf) => {
    //     (group.current as any).add(gltf.scene);
    //     gltf.scene.position.set(-130, 63, -70);
    //     gltf.scene.scale.set(20, 20, 20);
    //     gltf.scene.castShadow = true;
    //     const textureLoader = new TextureLoader();
    //     textureLoader.load("/assets/rust.jpg", (texture) => {
    //       gltf.scene.traverse((child) => {
    //         if ((child as any).material)
    //           ((child as any).material as MeshStandardMaterial).map = texture;
    //       });
    //     });
    //   });
    // }
  }, []);
  return <group ref={group} {...props}></group>;
}
