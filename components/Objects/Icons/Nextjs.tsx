import { Text } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import { useRef } from "react";
import {
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PlaneBufferGeometry,
  TextureLoader,
} from "three";
export function NextLogo() {
  const ref = useRef<JSX.IntrinsicElements["group"]>();

  useEffect(() => {
    const loader = new TextureLoader();
    loader.load("/assets/python.png", (texture) => {
      if (ref.current && ref.current.add) {
        const image = new Mesh(
          new PlaneBufferGeometry(80, 50),
          new MeshStandardMaterial({ map: texture, metalness: 0, roughness: 0 })
        );
        image.rotation.set(0, Math.PI / 2, 0);
        image.position.set(-149, 150, -80);

        (ref.current as any).add(image);
      }
    });
  }, []);
  return (
    <Suspense fallback={null}>
      <group ref={ref}>
        <Text
          color={"#000000"}
          fontSize={12}
          maxWidth={200}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign={"left"}
          font="Lobster"
          anchorX="center"
          anchorY="middle"
          position={[-149, 120, -80]}
          rotation={[0, Math.PI / 2, 0]}
        >
          {"Python"}
        </Text>
      </group>
    </Suspense>
  );
}
