import { Html } from '@react-three/drei';
import { forwardRef } from 'react';

const spriteStyles = {
  color: '#fff',
  backgroundColor: 'rgba(0,0,0,0.8)',
  fontSize: '30px',
  padding: '100px 200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};
const Track = forwardRef(
  ({ position, args = [30, 80], show, completed }, ref) => {
    return (
      <group>
        <mesh position={position} rotation={[-Math.PI / 2, 0, 0]} ref={ref}>
          <planeGeometry args={args} />
          <meshStandardMaterial
            attach="material"
            color={'#e0d296'}
            roughness={1}
          />
        </mesh>
        {!show && (
          <Html sprite style={spriteStyles} position={[100, 5, 0]} transform>
            {!completed ? (
              <>
                <span>Bắt đầu ngay</span>
                <br />
                <span>( Chỉ tiến về phía trước hoặc lùi</span>
                <span>Trong khi con búp bê đang nhìn đi chỗ khác )</span>
              </>
            ) : (
              <>completed</>
            )}
          </Html>
        )}
      </group>
    );
  },
);

export default Track;
