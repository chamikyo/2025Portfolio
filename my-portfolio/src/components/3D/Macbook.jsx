import React from "react";
import { useGLTF } from "@react-three/drei";

export function Macbook(props) {
  const { nodes, materials } = useGLTF("/models/Macbook/scene.gltf");

  return (
    <group {...props} rotation={[0, Math.PI, 0.5]} dispose={null}>
      <group position={[0.121, 0.007, 0]}>
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.MacBookPro}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.MacBookPro}
        />
      </group>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.MacBookPro}
      />
    </group>
  );
}

useGLTF.preload("/models/Macbook/scene.gltf");
