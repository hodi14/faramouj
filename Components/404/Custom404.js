import { Canvas } from "@react-three/fiber";
import Face from "./Face";

export default function Custom404() {
  return (
    <div className="custom404">
      <Canvas camera={{ position: [0, 0, 35] }}>
        <ambientLight intensity={1} />
        <pointLight position={[0, 40, 40]} />
        <Face position={[0, 0, 0]}/>
      </Canvas>
    </div>
  );
}
