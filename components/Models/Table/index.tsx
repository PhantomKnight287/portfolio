/*
author: felixawani (https://sketchfab.com/felixawani)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/05353724b7884bfb81211c7033a57fd4
title: Computer Desk
*/

import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function TableModel({ ...props }) {
  const group = useRef<JSX.IntrinsicElements["group"]>();
  useEffect(() => {
    if (group.current && group.current.add) {
      const loader = new GLTFLoader();
      loader.load("/models/table/scene.gltf", (gltf) => {
        (group.current as any).add(gltf.scene);
        gltf.scene.position.set(-120,60,-80)
        gltf.scene.scale.set(20,20,20)
        gltf.scene.rotation.set(0,Math.PI/2,0)
        gltf.scene.castShadow = true
      });
    }
  }, []);
  return <group ref={group} {...props}></group>;
}
