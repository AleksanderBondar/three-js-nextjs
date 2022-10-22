import { MeshProps, useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";

export const Box: React.FC<{ textureUrl: string }> = ({ textureUrl }) => {
  const texture = useLoader(TextureLoader, textureUrl);
  return (
    <mesh receiveShadow castShadow>
      <boxBufferGeometry />
      <meshPhysicalMaterial map={texture} color={"white"} />
    </mesh>
  );
};
