import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { a, useSpring } from '@react-spring/three';
import { SpaceShip } from '../../../public/SpaceShip';
import '../../earth.css'

function Space(props) {
  const group = useRef();
  
  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.2;
  });
  
  return (
    <group ref={group} {...props} dispose={null}>
      <SpaceShip />
    </group>
  );
}

export default function SplashScreen({ setSplashDone }) {
  const [loaded, setLoaded] = useState(false);

  const { scale } = useSpring({
    scale: loaded ? 1 : 10,
    config: { duration: 2000 },
  });

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setSplashDone(true);
      }, 2000);
    }, 3000);
  }, [setSplashDone]);

  return (
    <a.group scale={scale}>
      <Canvas>
        <ambientLight />
        <pointLight position={[1, 1, 1]} />
        <SpaceShip />
        <OrbitControls />
      </Canvas>
    </a.group>
  );
}
