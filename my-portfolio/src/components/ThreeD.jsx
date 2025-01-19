import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { Cabinet } from "./3D/Cabinet";
import MainText from "./3D/MainText";
import SubText from "./3D/SubText";
// import Background from "./3D/Background";
// import Room from "./3D/Room";

const Stars = () => {
  const starsRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    const starGeometry = new THREE.SphereGeometry(0.1, 24, 24);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const stars = new THREE.Group();
    const starCount = 1000;
    const starFieldSize = 200;

    for (let i = 0; i < starCount; i++) {
      const starMesh = new THREE.Mesh(starGeometry, starMaterial);
      starMesh.position.set(
        THREE.MathUtils.randFloatSpread(starFieldSize),
        THREE.MathUtils.randFloatSpread(starFieldSize),
        THREE.MathUtils.randFloatSpread(starFieldSize)
      );
      stars.add(starMesh);
    }

    starsRef.current = stars;
    scene.add(stars);

    return () => {
      scene.remove(stars);
    };
  }, [scene]);

  return null;
};

const ThreeD = () => {
  const [dragging, setDragging] = useState(false);
  const [mounted, setMounted] = useState(false); // 컴포넌트 마운트 상태

  useEffect(() => {
    setMounted(true); // 마운트 완료 시점 설정
  }, []);

  const frontc = "#ffe853";
  const backc = "#0040ff";

  const subTexts = Array.from({ length: 8 }, (_, i) => ({
    position: [
      i % 2 === 0 ? 1 : 0.98, // X 좌표: 짝수는 1, 홀수는 0.98
      0 - Math.floor(i / 2) * 0.15, // Y 좌표: 인덱스 2마다 0.15씩 줄어듦
      i % 2 === 0 ? 1.8 : 1.78, // Z 좌표: 짝수는 2, 홀수는 1.98
    ],
    color: i % 2 === 0 ? frontc : backc, // 짝수는 frontc, 홀수는 backc
  }));

  return (
    <div style={{ height: "100vh" }}>
      {mounted && ( // 마운트 완료 후에만 Canvas 렌더링
        <Canvas camera={{ position: [4.8, -0.2, 0], fov: 75 }}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, -2, 1]} />
          <directionalLight position={[0, 5, 1]} />
          <directionalLight position={[0, 0, 5]} />
          <spotLight position={[3, 3, 0]} angle={0.5} penumbra={0} />

          <Suspense fallback={<Html center>Loading...</Html>}>
            {/* <Background position={[0, 0, 0]} scale={[100, 100, 100]} />
            <Room /> */}
            <Cabinet position={[0, -0.5, 0]} setDragging={setDragging} />
            <MainText position={[-5, 0, 0]} />
            <MainText color="#5e87ff" position={[-5.2, 0, 0]} />
            <Stars />
            {subTexts.map((props, index) => (
              <SubText key={index} {...props} />
            ))}
          </Suspense>

          <OrbitControls enabled={!dragging} />
        </Canvas>
      )}
    </div>
  );
};

export default ThreeD;
