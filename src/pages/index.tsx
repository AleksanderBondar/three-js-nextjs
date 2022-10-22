import type { NextPage } from "next";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import BrickTexture from "public/brick.png";
import { Floor, LightBulb, Box, OrbitControl, Draggable } from "../components";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen ">
      <div className="w-[90%] h-[90%] bg-[#13131C]">
        <Canvas
          shadows={true}
          camera={{
            position: [-12, 7, 7],
          }}
        >
          <ambientLight color={"white"} intensity={0.3} />
          <LightBulb position={[0, 3, 0]} />
          <Draggable>
            <Suspense fallback={null}>
              <Box textureUrl={BrickTexture.src} />
            </Suspense>
          </Draggable>

          <Floor position={[-3, -10, 0]} />
          <OrbitControl />
        </Canvas>
      </div>
    </div>
  );
};

export default Home;
