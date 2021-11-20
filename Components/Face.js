import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Sphere from "./Sphere";
import Box from "./Box";

export default function Face(props) {
  const mesh = useRef();
  const position = props.position;
  let cursor = {
    x: 0,
    y: 0,
  };
  useEffect(() => {
    cursor = {
      x: 0,
      y: 0,
    };
    window.addEventListener("mousemove", (event) => {
      cursor.x = event.clientX / window.innerWidth - 0.5;
      cursor.y = -(event.clientY / window.innerHeight - 0.5);
    });
  }, []);

  useFrame(() => {
    mesh.current.position.z = position[2];
    mesh.current.rotation.y = cursor.x * 2;
    mesh.current.rotation.x = -cursor.y * 2;
    mesh.current.position.y = 0;
  });

  return (
    <group ref={mesh}>
      <Sphere
        color="#0071E3"
        position={[0, 0, 0]}
        scale={[20, 30, 30]}
        movement={true}
      />
      <Sphere color="gray" position={[-4, 1, 18]} scale={[2.5, 20, 20]} />
      <Sphere color="gray" position={[4, 1, 18]} scale={[2.5, 20, 20]} />
      <Sphere color="black" position={[-4.5, 1.1, 19.75]} scale={[1, 10, 10]} />
      <Sphere color="black" position={[4.5, 1.1, 19.75]} scale={[1, 10, 10]} />
    </group>
  );
}
