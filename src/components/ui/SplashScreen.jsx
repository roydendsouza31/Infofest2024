import React, { Suspense, useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    if (show)
      document.body.style.overflow = "hidden";
    
    if (pathname !== '/') {
      setShow(false);
      document.body.style.overflow = "visible";
    }

    setTimeout(() => {
      setShow(false)
      document.body.style.overflow = "visible";
    },5000);
  }, [])

  if (pathname == '/' && !show) {
    return null;
  }

  const handleReachTarget = () => {
    setTimeout(() => {
      setSplashDone(true);
    }, 19000);
  };

  return (

    <>
      {(pathname == '/' && show) && (
        <Canvas camera={{ position: [-50, 200, -175], fov: 75 }} style={{ background: 'black' ,inset:'0', zIndex:30 , position:'absolute'}} >
          <ambientLight intensity={2} />
          <pointLight position={[1, 1, 1]} />
          <Suspense fallback={null}>
            <Space onReachTarget={handleReachTarget} />
          </Suspense>
          <StarField />
          <OrbitControls />
        </Canvas>
      )}
    </>
  );
}