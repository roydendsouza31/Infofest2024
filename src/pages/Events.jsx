import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Earth } from '../../public/Earth.jsx'
import '../earth.css'
import * as THREE from 'three'

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

const Events = () => {
  return (
      <Canvas style={{ background: 'black' }}>
        <ambientLight intensity={2}/>
        <OrbitControls enableZoom={false}/>
        <Suspense fallback={null}>
          {/* <Earth /> */}
        </Suspense>
        {/* <Environment preset='sunset'/> */}
        <StarField />
      </Canvas>
  )
}

export default Events
