import './App.css';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './Body';
import Lights from './Setup/Lights';
import { Loader, Preload, Stars } from '@react-three/drei';
//
//
const App = () => {
  return (
    <div id="cover">
      <div id="selector">
        <div id="welcome">
          <div>
            <h1
              style={{
                fontSize: '45px',
                fontWeight: '500',
                marginBottom: '50px',
              }}
            >
              Chào mừng đến với game{' '}
              <span style={{ color: 'red' }}>Profile</span> của tôi
            </h1>
            <h2
              style={{
                fontSize: '40px',
                fontWeight: '500',
                marginBottom: '50px',
                textAlign: 'center',
              }}
            >
              Junior Backend Developer
            </h2>
          </div>
          {window.innerWidth > 767 ? (
            <div style={{ textAlign: 'center' }}>
              <p>Bắt đầu chơi</p>
              <p style={{ marginTop: '50px' }}>
                Di chuyển: các phím{' '}
                <span style={{ color: 'red' }}>W A S D</span>
                <br />
                Nhảy lên: phím <span style={{ color: 'red' }}>SPACE</span>
                <br />
                Nhìn xung quanh: di chuyển{' '}
                <span style={{ color: 'red' }}>MOUSE</span>
                <br />
                Chạy nhanh: <span style={{ color: 'red' }}>Left Shift</span>
                <br />
                Bay lên trời: phím <span style={{ color: 'red' }}>F</span>
                <br />
                Thoát: phím <span style={{ color: 'red' }}>ESC</span>
              </p>
            </div>
          ) : (
            <div>
              <p>What the hell gì vậy!!!!</p>
              <p>Trang web này chưa hỗ trợ thiết bị di động.</p>
            </div>
          )}
        </div>
      </div>

      <Canvas
        style={{
          height: '95vh',
          width: '100vw',
          backgroundColor: 'black',
        }}
        camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 5, 25] }}
        id="canvas"
        // shadows
      >
        <fog attach="fog" args={['#0d1a26', 70, 120]} />

        <Suspense fallback={null}>
          <Scene />
          <Preload all />
        </Suspense>
        <Stars
          radius={160}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />

        <Lights />
      </Canvas>
      <div className="controls">
        <span>WASD - Di chuyển</span>
        <span>Shift - Chạy nhanh</span>
        <span>Space - Nhảy</span>
        <span>F - Bay lên trời</span>
        <span>Mouse - Nhìn xung quanh</span>
      </div>
      <Loader
        containerStyles={{
          background:
            'radial-gradient(circle farthest-corner at center top,#071021,#19324a)',
        }} // Flex layout styles
        innerStyles={{
          backgroundColor: 'salmon',
          width: '50vw',
        }} // Inner container styles
        barStyles={{
          backgroundColor: 'lightgreen',
        }} // Loading-bar styles
        dataInterpolation={(p) => `Loading ${Math.round(p)}%`}
        initialState={(active) => active}
        dataStyles={{
          color: '#fafafa',
          fontSize: '25px',
          fontFamily: 'Raleway',
          fontWeight: '500',
        }}
      />
    </div>
  );
};

export default App;
