import { useEffect, useRef } from "react";
import { DoubleSide } from "three";
export function Walls() {
  const wall1 = useRef<JSX.IntrinsicElements["mesh"]>();
  const wall2 = useRef<JSX.IntrinsicElements["mesh"]>();
  useEffect(() => {
    if (wall1.current) {
      if (wall1.current.material) {
        (wall1.current.material as any).side = DoubleSide;
      }
    }
    if (wall2.current) {
      if (wall2.current.material) {
        (wall2.current.material as any).side = DoubleSide;
      }
    }
  }, []);
  return (
    <>
      <mesh position={[0, 150, -150]} ref={wall1}>
        <planeBufferGeometry attach="geometry" args={[300,300]} />
        <meshStandardMaterial attach="material"  />
      </mesh>
      <mesh ref={wall2} position={[-150, 150, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeBufferGeometry attach="geometry" args={[300,300]} />
        <meshStandardMaterial attach="material"  />
      </mesh>
    </>
  );
}
