import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Earth(props) {
  const { nodes, materials } = useGLTF('/earth.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} scale={2} />
    </group>
  )
}

useGLTF.preload('/earth.gltf')
