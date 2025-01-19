import React from "react";
import { useGLTF } from "@react-three/drei";

export function Room(props) {
  const { nodes, materials } = useGLTF("/models/Room/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane_Material_0.geometry}
        material={materials.Material}
        rotation={[-Math.PI / 2, 0.2, 1]}
        scale={3}
        position={[-4, -1, 0]}
      />
    </group>
  );
}

useGLTF.preload("/scene.gltf");

export default Room;
