import React, { Suspense, useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';
import Orbitron from '../../assets/json/Orbitron-VariableFont_wght.ttf'

const StarField = ({ starSpeed }) => {
  const groupRef = useRef();
  const starMeshRef = useRef();

  useEffect(() => {
    const group = groupRef.current;
    const stars = new THREE.BufferGeometry();
    const starCount = 20000;

    const positions = [];
    for (let i = 0; i < starCount; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000);
      positions.push(x, y, z);
    }

    stars.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });

    const starMesh = new THREE.Points(stars, starMaterial);
    starMeshRef.current = starMesh;
    group.add(starMesh);
  }, []);

  useFrame(() => {
    if (starMeshRef.current) {
      const positions = starMeshRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 2] += starSpeed;
        if (positions[i + 2] > 1000) {
          positions[i + 2] = -1000;
        }
      }
      starMeshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return <group ref={groupRef} />;
};

const AnimatedText = ({ transition }) => {
  const textRef1 = useRef();
  const textRef2 = useRef();
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [position, setPosition] = useState([0, 0, -50]);
  const [color, setColor] = useState("#2596be")

  useEffect(() => {
    if (transition) {
      const timer = setTimeout(() => {
        setRotation([Math.PI / 2, 0, 0]);
        setPosition([0, 0, -50]); 
        setColor("#000000")
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [transition]);

  return (
    <>
      <Text
        ref={textRef1}
        fontSize={35}
        font={Orbitron}
        position={position}
        rotation={rotation}
      >
        GET READY FOR THE BIGGEST EVENT
      </Text>
      <Text
        ref={textRef2}
        fontSize={45}
        font={Orbitron}
        position={[0, -50, 0]}
        rotation={rotation}
      >
        INFOFEST
      </Text>
    </>
  );
};

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const [transition, setTransition] = useState(false);
  const [cameraPosition, setCameraPosition] = useState([-50, 200, 255]);
  const { pathname } = useLocation();

  useEffect(() => {
    if (show) document.body.style.overflow = "hidden";

    if (pathname !== '/') {
      setShow(false);
      document.body.style.overflow = "visible";
    }

    const zoomIn = { y: 200, z: 255 };

    const zoomInInterval = setInterval(() => {
      if (zoomIn.z > 50) {
        zoomIn.z -= 5;
        setCameraPosition([0, 0, zoomIn.z]);
      } else {
        clearInterval(zoomInInterval);
        setTransition(true);
      }
    }, 175);

    const timer2 = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "visible";
    }, 10000);

    return () => {
      clearInterval(zoomInInterval);
      clearTimeout(timer2);
    };
  }, [pathname, show]);

  if (pathname === '/' && !show) {
    return null;
  }

  return (
    <>
      {(pathname === '/' && show) && (
        <Canvas camera={{ position: cameraPosition, fov: 75 }} style={{ background: 'black', inset: '0', zIndex: 30, position: 'absolute' }}>
          <ambientLight intensity={2} />
          <pointLight position={[1, 1, 1]} />
          <Suspense fallback={null}>
            <AnimatedText transition={transition} />
          </Suspense>
          <StarField starSpeed={transition ? 10 : 1} />
          <OrbitControls />
        </Canvas>
      )}
    </>
  );
}
