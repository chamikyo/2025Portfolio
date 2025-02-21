import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Background = (props) => {
  const { scene } = useGLTF("/models/background/scene.gltf");
  const backgroundRef = useRef();

  // 마운트된 후에만 초기화하도록 useEffect 사용
  useEffect(() => {
    if (backgroundRef.current) {
      backgroundRef.current.rotation.set(0, Math.PI / 2 + 0.5, 0); // 초기 회전 설정
    }
  }, []); // 빈 의존성 배열로 컴포넌트가 마운트된 후에만 실행

  useFrame(() => {
    if (backgroundRef.current) {
      backgroundRef.current.rotation.y += 0.001; // 애니메이션: 천천히 회전
    }
  });

  return <primitive ref={backgroundRef} object={scene} {...props} />;
};

// 모델을 미리 로드
useGLTF.preload("/models/background/scene.gltf");

export default Background;
