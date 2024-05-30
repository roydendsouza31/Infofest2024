import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function SpaceShip(props) {
  const { nodes, materials } = useGLTF('/SpaceShip.gltf')
  return (
    <group {...props} dispose={null} scale={[15,15,15]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Blue_Buttons} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['Blue_Buttons.001']} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Engine} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Glass} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Headlights} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['Material.003']} />
      </group>
    </group>
  )
}

useGLTF.preload('/SpaceShip.gltf')
