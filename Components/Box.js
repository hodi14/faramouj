import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Box as NativeBox } from "@react-three/drei";

export default function Box(props) {
  const mesh = useRef();
  const color = props.color;
  const position = props.position;
  const scale = props.scale;
  useFrame(() => {
    mesh.current.position.x = position[0];
    mesh.current.position.y = position[1];
    mesh.current.position.z = position[2];
  })

  return (
    <NativeBox args={[1, 1, 1]} {...props} ref={mesh} scale={scale}>
      <meshStandardMaterial attach="material" color={color} />
    </NativeBox>
  );
}
