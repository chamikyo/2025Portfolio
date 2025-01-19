import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import { useGLTF, Text } from "@react-three/drei";

export const Folders = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/models/folders/scene.gltf");
  const [hovered, setHovered] = useState(false);
  const folderRef = useRef();
  const [loaded, setLoaded] = useState(false); // 로드 완료 상태 관리

  // useImperativeHandle은 컴포넌트가 마운트된 후에 참조를 설정
  useImperativeHandle(
    ref,
    () => ({
      link: props.link,
      current: folderRef.current,
    }),
    [props.link]
  );

  // useEffect로 GLTF 로딩 상태를 확인
  useEffect(() => {
    if (nodes && materials) {
      setLoaded(true); // 모델이 로드된 후 상태 업데이트
    }
  }, [nodes, materials]);

  const handleClick = (e) => {
    e.stopPropagation();
    props.onClick();
  };

  return (
    <group
      {...props}
      ref={folderRef}
      dispose={null}
      scale={[0.09, 0.05, 0.09]}
      position={
        hovered
          ? [props.position[0], props.position[1] + 0.05, props.position[2]]
          : props.position
      }
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
      }}
      onClick={handleClick}
    >
      {/* 로딩이 완료된 후에만 렌더링 */}
      {loaded && (
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials["Scene_-_Root"]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]} // Y축 기준으로 90도 회전
          castShadow
          receiveShadow
        >
          <meshStandardMaterial color={props.color} />
        </mesh>
      )}
      <Text
        position={[0.02, 1.5, 1.5]} // 인덱스 텍스트 위치 조정
        rotation={[-Math.PI / 2, Math.PI / 2, Math.PI / 2]} // 텍스트 회전 조정
        fontSize={0.18} // 텍스트 크기 조정
        color={props.textColor || "black"} // 텍스트 색상
        anchorX="center" // 텍스트 정렬
        anchorY="middle"
        font="/fonts/Poppins-Regular.ttf"
        letterSpacing={-0.1} // 자간 조정
      >
        {props.indexText}
      </Text>
    </group>
  );
});

useGLTF.preload("/models/folders/scene.gltf");
