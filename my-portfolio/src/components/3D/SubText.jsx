import React, { useRef, useEffect, useState } from "react";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const SubText = (props) => {
  const textRef = useRef();
  const [mounted, setMounted] = useState(false); // 컴포넌트 마운트 상태 관리

  // 컴포넌트가 마운트된 후에만 애니메이션을 시작
  useEffect(() => {
    setMounted(true);
  }, []);

  useFrame(({ clock }) => {
    if (mounted && textRef.current) {
      const elapsedTime = clock.getElapsedTime();
      textRef.current.position.y =
        props.position[1] + Math.sin(elapsedTime * 2) * 0.1; // Y축 애니메이션
    }
  });

  return (
    <Text
      ref={textRef}
      position={props.position} // 텍스트 위치 조정
      font="/fonts/GmarketSansTTFBold.ttf"
      rotation={[0, Math.PI / 2, 0]} // Y축 기준으로 90도 회전
      fontSize={0.12} // 텍스트 크기 조정
      color={props.color} // 텍스트 색상
      anchorX="center" // 텍스트 정렬
      anchorY="middle"
    >
      {"Click, Drag, Zoom In & out it"}
    </Text>
  );
};

export default SubText;
