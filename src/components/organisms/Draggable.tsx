import { extend, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { Group } from "three";
import { DragControls } from "three/examples/jsm/controls/DragControls";

extend({ DragControls });

export const Draggable = (props: { children: any }) => {
  const groupRef = useRef<any>();
  const controlsRef = useRef<any>();
  const [objects, setObjects] = useState();
  const { camera, gl, scene } = useThree();
  useEffect(() => {
    setObjects(groupRef.current?.children);
  }, [groupRef]);

  useEffect(() => {
    controlsRef.current.addEventListener("hoveron", () => {
      //@ts-ignore
      scene.orbitControls.enabled = false;
    });
    controlsRef.current.addEventListener("hoveroff", () => {
      //@ts-ignore
      scene.orbitControls.enabled = true;
    });
  }, [objects]);
  return (
    <group ref={groupRef}>
      <dragControls
        ref={controlsRef}
        args={[objects!, camera, gl.domElement]}
      />
      {props.children}
    </group>
  );
};
