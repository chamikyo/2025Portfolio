import React from "react";
import { useGLTF } from "@react-three/drei";

const Anxiety = (props) => {
  const { scene } = useGLTF("/models/Anxiety/scene.gltf"); // 캐릭터 GLTF 파일 경로

  return (
    <primitive
      object={scene}
      rotation={[-Math.PI / 2, Math.PI / 2, Math.PI / 2]}
      {...props}
    />
  );
};

useGLTF.preload("/models/scene.gltf");

export default Anxiety;
