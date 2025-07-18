import { Text3D } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Me = ({ font }) => {
  // const firstRef = useRef(null);
  const secondRef = useRef(null);
  // const textOptions2 = {
  //   font,
  //   size: 4,
  //   height: 0.5,
  // };
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    // firstRef.current.rotation.x = -Math.PI - Math.sin(elapsedTime * 0.5);
    secondRef.current.rotation.x = -Math.PI - Math.sin(elapsedTime * 0.5);
  });
  return (
    <>
      <mesh
        position={[130, 2, 110]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        ref={secondRef}
      >
        <Text3D font={font} size={10} height={2}>
          Welcome!
        </Text3D>
        <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
      </mesh>
    </>
  );
};

export default Me;
