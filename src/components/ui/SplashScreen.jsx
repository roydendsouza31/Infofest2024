import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import  Space  from './Space';
import * as THREE from 'three'
import '../../earth.css'

const StarField = () => {
  const groupRef = useRef()
  const starMeshRef = useRef()
  const starSpeed = 5;
  // const starSpeed = 0.5;

  useEffect(() => {
    const group = groupRef.current
    const stars = new THREE.BufferGeometry()
    const starCount = 5000

    const positions = []
    for (let i = 0; i < starCount; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000)
      const y = THREE.MathUtils.randFloatSpread(2000)
      const z = THREE.MathUtils.randFloatSpread(2000)
      positions.push(x, y, z)
    }

    stars.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))

    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff })

    const starMesh = new THREE.Points(stars, starMaterial)
    starMeshRef.current = starMesh
    group.add(starMesh)
  }, [])

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

  return <group ref={groupRef} />
}

export default function SplashScreen({ setSplashDone }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleReachTarget = () => {
    setTimeout(() => {
      setSplashDone(true);
    }, 19000);
  };

  return (
    <Canvas camera={{ position: [-50, 200, -175], fov: 75 }} style={{ background: 'black' }}>
      <ambientLight intensity={2}/>
      <pointLight position={[1, 1, 1]} />
      <Suspense fallback={null}>
        <Space onReachTarget={handleReachTarget}/>
      </Suspense>
      <StarField/>
      <OrbitControls />
    </Canvas>
  );
}