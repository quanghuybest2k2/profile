import { Text3D } from '@react-three/drei';

const Education = ({ font }) => {
  return (
    <>
      <mesh rotation={[0, Math.PI, 0]} position={[40, 0.5, 90]}>
        <Text3D font={font} size={3} height={1}>
          Education
        </Text3D>
        <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
      </mesh>
      <group>
        <mesh
          rotation={[Math.PI / 2 - Math.PI / 8, Math.PI, 0]}
          position={[35, 0.1, 84]}
        >
          <Text3D font={font} size={1} height={0.1}>
            Dalat University
          </Text3D>
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[36, 0.1, 81]}>
          <Text3D font={font} size={1} height={0.1}>
            Bachelor of Software Engineer
          </Text3D>
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[37, 0.1, 78]}>
          <Text3D font={font} size={1} height={0.1}>
            2020-2024
          </Text3D>
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[38, 0.1, 75]}>
          <Text3D font={font} size={1} height={0.1}>
            Graduated in June 2024
          </Text3D>
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
      </group>
    </>
  );
};

export default Education;
