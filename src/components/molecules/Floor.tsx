import { MeshProps } from "@react-three/fiber";
import React from "react";

export const Floor = (props: MeshProps) => {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[30, 1, 10]} />
      <meshPhysicalMaterial color="white" />
    </mesh>
  );
};
