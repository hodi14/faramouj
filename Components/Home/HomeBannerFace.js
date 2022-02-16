import React, { useRef } from 'react';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  
  const { nodes, materials } = useGLTF('../assets/face.gltf');
  return (
    // <group ref={group} {...props} dispose={null}>
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Helix.geometry}
    //     material={nodes.Helix.material}
    //     position={[-346, -62, -9.5]}
    //     rotation={[0.3, 0, Math.PI / 2]}
    //     scale={[1, 1, 1]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Sphere_bottol.geometry}
    //     material={nodes.Sphere_bottol.material}
    //     position={[-373, -172, 0]}
    //     scale={[1.11, 1.11, 1.11]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Sphere_4.geometry}
    //     material={nodes.Sphere_4.material}
    //     position={[-287.93, 30.73, -72]}
    //     scale={[1.11, 1.11, 1.11]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Sphere_3.geometry}
    //     material={nodes.Sphere_3.material}
    //     position={[-284.6, -219.76, 78.09]}
    //     scale={[1.11, 1.11, 1.11]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.beat_cylinder_small.geometry}
    //     material={nodes.beat_cylinder_small.material}
    //     position={[-546.22, -70, -310.65]}
    //     rotation={[0, -0.26, Math.PI / 2]}
    //     scale={[1, 1.96, 1]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.beat_cylinder_big.geometry}
    //     material={nodes.beat_cylinder_big.material}
    //     position={[-453.58, -70, 13.21]}
    //     rotation={[0, -0.7, Math.PI / 2]}
    //     scale={[1, 1.96, 1]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cone.geometry}
    //     material={nodes.Cone.material}
    //     position={[-214.43, -73.57, -92]}
    //     rotation={[0, 0, -2.2]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Helix_1.geometry}
    //     material={nodes.Helix_1.material}
    //     position={[-346, -62, -9.5]}
    //     rotation={[0.3, 0, Math.PI / 2]}
    //     scale={[1, 1, 1]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Sphere_bottol_1.geometry}
    //     material={nodes.Sphere_bottol_1.material}
    //     position={[-373, -172, 0]}
    //     scale={[1.11, 1.11, 1.11]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Sphere_4_1.geometry}
    //     material={nodes.Sphere_4_1.material}
    //     position={[-287.93, 30.73, -72]}
    //     scale={[1.11, 1.11, 1.11]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Sphere_3_1.geometry}
    //     material={nodes.Sphere_3_1.material}
    //     position={[-284.6, -219.76, 78.09]}
    //     scale={[1.11, 1.11, 1.11]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.beat_cylinder_small_1.geometry}
    //     material={nodes.beat_cylinder_small_1.material}
    //     position={[-546.22, -70, -310.65]}
    //     rotation={[0, -0.26, Math.PI / 2]}
    //     scale={[1, 1.96, 1]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.beat_cylinder_big_1.geometry}
    //     material={nodes.beat_cylinder_big_1.material}
    //     position={[-453.58, -70, 13.21]}
    //     rotation={[0, -0.7, Math.PI / 2]}
    //     scale={[1, 1.96, 1]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cone_1.geometry}
    //     material={nodes.Cone_1.material}
    //     position={[-214.43, -73.57, -92]}
    //     rotation={[0, 0, -2.2]}
    //   />
    //   <spotLight
    //     intensity={0.9}
    //     angle={1.43}
    //     decay={2}
    //     distance={2000}
    //     position={[0, 328.28, 750.48]}
    //     rotation={[1.17, 0, 0]}
    //   />
    //   <PerspectiveCamera
    //     makeDefault={false}
    //     far={100000}
    //     fov={45}
    //     position={[0, 30.55, 814.51]}
    //     rotation={[0, 0, 0]}>
    //     <directionalLight
    //       intensity={3.4}
    //       decay={2}
    //       position={[850000, 1300000, 1000000]}
    //       rotation={[-0.92, 0.48, -0.34]}
    //     />
    //   </PerspectiveCamera>
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.bg.geometry}
    //     material={nodes.bg.material}
    //     position={[-2079.5, 1201.5, 159.77]}
    //     rotation={[Math.PI / 2, 0, Math.PI]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.head.geometry}
    //     material={nodes.head.material}
    //     position={[0, -40.96, -6.25]}
    //     rotation={[Math.PI / 9, 0, 0]}
    //     scale={[1.3, 1.3, 1.3]}>
    //     <group
    //       position={[49.93, 160.3, 54.38]}
    //       rotation={[-0.09, 0, 0.26]}
    //       scale={[0.77, 0.77, 0.77]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Lathe_3.geometry}
    //         material={nodes.Lathe_3.material}
    //         position={[-1.1, -53.74, -0.5]}
    //         rotation={[0, 0, -1.55]}
    //         scale={[0.75, 0.93, 0.75]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Lathe_2.geometry}
    //         material={nodes.Lathe_2.material}
    //         position={[-37.1, 9.26, -0.5]}
    //         rotation={[0, 0, -0.89]}
    //         scale={[0.86, 1.07, 0.86]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Lathe.geometry}
    //         material={nodes.Lathe.material}
    //         position={[8.06, -12.22, 0]}
    //         rotation={[0, 0, -1.15]}
    //       />
    //     </group>
    //     <group position={[0, -109.56, 119.39]} rotation={[-0.09, 0, 0]} scale={[0.77, 0.77, 0.77]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.stash_R.geometry}
    //         material={nodes.stash_R.material}
    //         position={[50, 6.38, -1.16]}
    //         rotation={[0, 0, -Math.PI / 2]}
    //         scale={[-1, 1, 1]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.stash_L.geometry}
    //         material={nodes.stash_L.material}
    //         position={[-50, 6.38, -1.16]}
    //         rotation={[0, 0, Math.PI / 2]}
    //       />
    //     </group>
    //     <group position={[0, 12.85, 129.13]} rotation={[-0.09, 0, 0]} scale={[0.77, 0.77, 0.36]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.R.geometry}
    //         material={nodes.R.material}
    //         position={[59.5, 0, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.L.geometry}
    //         material={nodes.L.material}
    //         position={[-59.5, 0, 0]}
    //       />
    //     </group>
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.nose.geometry}
    //       material={nodes.nose.material}
    //       position={[0.77, 10.06, 119.89]}
    //       rotation={[-0.09, Math.PI / 4, 0]}
    //       scale={[0.77, 0.77, 0.77]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.glasses.geometry}
    //       material={nodes.glasses.material}
    //       position={[-0.87, 4.87, 141.95]}
    //       rotation={[-1.48, 0.7, 3.14]}
    //       scale={[0.75, 0.05, 0.75]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cylinder.geometry}
    //         material={nodes.Cylinder.material}
    //         position={[43.07, -25.84, 53.14]}
    //         rotation={[-1.57, -0.11, -0.7]}
    //         scale={[0.94, 0.91, 13.49]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.R_1.geometry}
    //         material={nodes.R_1.material}
    //         position={[-66.51, -3.93, 56.27]}
    //         rotation={[-Math.PI, -0.7, Math.PI]}
    //         scale={[0.92, 0.92, 0.92]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Cylinder_3.geometry}
    //           material={nodes.Cylinder_3.material}
    //           position={[0, -50.82, 0]}
    //         />
    //       </mesh>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.L_1.geometry}
    //         material={nodes.L_1.material}
    //         position={[65.18, -3.93, -54.23]}
    //         rotation={[-Math.PI, -0.7, Math.PI]}
    //         scale={[0.92, 0.92, 0.92]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Cylinder_3_1.geometry}
    //           material={nodes.Cylinder_3_1.material}
    //           position={[0, -50.82, 0]}
    //         />
    //       </mesh>
    //     </mesh>
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.headphone.geometry}
    //       material={nodes.headphone.material}
    //       position={[0, 6.91, 11.33]}
    //       rotation={[1.48, Math.PI / 2, 0]}
    //       scale={[2.03, 1, 1.7]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.R_2.geometry}
    //         material={nodes.R_2.material}
    //         position={[-13.05, -0.42, 89.94]}
    //         rotation={[-Math.PI / 2, 0, 0]}
    //         scale={[-0.85, 0.48, 1.73]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Text.geometry}
    //           material={nodes.Text.material}
    //           position={[-36, -1.73, -15.35]}
    //           rotation={[1.3, -0.25, 1.23]}
    //           scale={[-0.45, 0.48, 0.93]}
    //         />
    //       </mesh>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.L_2.geometry}
    //         material={nodes.L_2.material}
    //         position={[-13.05, -0.42, -89.16]}
    //         rotation={[-Math.PI / 2, 0, Math.PI]}
    //         scale={[0.85, 0.47, 1.73]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Text_2.geometry}
    //           material={nodes.Text_2.material}
    //           position={[-43.54, 0.37, -15.35]}
    //           rotation={[-1.3, 0.25, -1.65]}
    //           scale={[-0.45, 0.48, 0.94]}
    //         />
    //       </mesh>
    //     </mesh>
    //   </mesh>
    // </group>
    <group></group>
  )
}