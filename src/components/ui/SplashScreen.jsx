import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import  Space  from './Space';
import * as THREE from 'three'
import '../../earth.css'

const StarField = () => {
  const groupRef = useRef()
  const starMeshRef = useRef()

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
      starMeshRef.current.rotation.y += 0.0005 // Rotate stars slowly around the y-axis
    }
  })

  return <group ref={groupRef} />
}

export default function SplashScreen({ setSplashDone }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLoaded(true);
    }, 6000);
    
    const timer2 = setTimeout(() => {
      setSplashDone(true);
    }, 19000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [setSplashDone]);

  return (
    <Canvas camera={{ position: [15, -10, 10], fov: 15 }} style={{ background: 'black' }}>
      <ambientLight />
      <pointLight position={[1, 1, 1]} />
      <Suspense fallback={null}>
        <Space />
      </Suspense>
      <StarField/>
      <OrbitControls />
    </Canvas>
  );
}