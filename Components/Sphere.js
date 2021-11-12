import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Sphere(props) {
  const mesh = useRef();
  const color = props.color;
  const position = props.position;
  const scale = props.scale;

  useFrame(() => {
    mesh.current.position.x = position[0];
    mesh.current.position.y = position[1];
    mesh.current.position.z = position[2];
  });

  return (
    <mesh ref={mesh}>
      <sphereBufferGeometry args={scale} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
