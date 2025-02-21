import React, { useState, useRef, useEffect, useCallback } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import { Folders } from "./Folders";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";

export function Cabinet({ setDragging, ...props }) {
  // const { nodes, materials } = useGLTF("/models/cabinet/scene.gltf");
  const { nodes, materials } = useGLTF(
    `${process.env.PUBLIC_URL}/models/cabinet/scene.gltf`
  );
  const [drawerPosition, setDrawerPosition] = useState(0);
  const drawerRef = useRef();
  const folderRefs = useRef([]);
  const { gl, scene, camera } = useThree();
  const navigate = useNavigate();
  const [cameraAnimating, setCameraAnimating] = useState(false); // 애니메이션 상태

  const handleDrag = useCallback(
    ({ offset: [, y], active }) => {
      setDrawerPosition(Math.min(Math.max(y / 100, 0), 0.35)); // 드래그 범위 제한
      setDragging(active); // 드래그 상태 업데이트
    },
    [setDragging]
  );

  const bind = useDrag(handleDrag);

  useEffect(() => {
    gl.shadowMap.enabled = true;
    scene.traverse((object) => {
      if (object.isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
  }, [gl, scene]);

  useFrame(() => {
    if (drawerRef.current) {
      drawerRef.current.position.x = drawerPosition;
    }
  });

  const handleFolderClick = useCallback(
    (index) => {
      navigate(index === 7 ? "/about" : "/portfolio");
    },
    [navigate]
  );

  const animateCamera = useCallback(() => {
    const targetPosition = new THREE.Vector3(3.2, 0.7, 0); // 목표 위치
    const targetLookAt = new THREE.Vector3(0, 0, 0); // 목표 시점

    const animate = () => {
      const delta = 0.05; // 이동 속도
      camera.position.lerp(targetPosition, delta); // 카메라 이동
      camera.lookAt(targetLookAt); // 카메라 방향

      if (camera.position.distanceTo(targetPosition) > 0.1) {
        requestAnimationFrame(animate); // 목표 지점까지 계속 애니메이션 실행
      } else {
        setCameraAnimating(false); // 애니메이션 완료 후 상태 업데이트
      }
    };

    animate();
  }, [camera]);

  useEffect(() => {
    if (cameraAnimating) {
      animateCamera(); // 애니메이션 실행
    }
  }, [cameraAnimating, animateCamera]);

  const handleDrawerClick = () => {
    if (!cameraAnimating) {
      setCameraAnimating(true); // 애니메이션 시작
    }
  };

  const folderCount = 10;
  const folderSpacing = 0.04;
  const colors = [
    "#ffe19a",
    "#FAFAD2",
    "#FFEFD5",
    "#FFE4B5",
    "#ffd0a6",
    "#EEE8AA",
    "#F0E68C",
    "#8d0000",
    "#FFF8DC",
    "#F5DEB3",
  ];
  const indexTexts = ["A", "B", "C", "D", "E", "F", "G", "MIKYO CHA", "I", "J"];

  return (
    <group
      {...props}
      dispose={null}
      scale={[2.5, 2.5, 2.5]}
      rotation={[0, 0, -0.3]}
    >
      <group>
        <mesh
          geometry={nodes.File_cabinet_File_container_metal_0.geometry}
          material={materials.File_container_metal}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.File_cabinet_04_File_container_metal_0.geometry}
          material={materials.File_container_metal}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.File_cabinet_01_File_container_metal_0.geometry}
          material={materials.File_container_metal}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.File_cabinet_02_File_container_metal_0.geometry}
          material={materials.File_container_metal}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          ref={drawerRef}
          {...bind()}
          position={[0, 0, 0]}
          onClick={handleDrawerClick}
        >
          <mesh
            geometry={nodes.File_cabinet_03_File_container_metal_0.geometry}
            material={materials.File_container_metal}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          {Array.from({ length: folderCount }, (_, i) => (
            <Folders
              key={i}
              position={[i * folderSpacing + 0.01, 0.19, 0]}
              color={colors[i % colors.length]}
              indexText={indexTexts[i % indexTexts.length]}
              textColor={i === 7 ? "white" : "black"}
              onClick={() => handleFolderClick(i)}
              ref={(el) => (folderRefs.current[i] = el)}
            />
          ))}
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/cabinet/scene.gltf");
