import { Text } from "@react-three/drei";
import { Suspense } from "react";

export function React() {
  return (
    <Suspense fallback={null}>
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
        position={[0, 80, 0]}
      >
        {"React.js"}
      </Text>
    </Suspense>
  );
}
