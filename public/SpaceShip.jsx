// SpaceShip.js
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const ObjectMesh = ({ name, geometry, material, position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1] }) => (
  <group name={name} position={position} rotation={rotation} scale={scale}>
    <mesh geometry={geometry} material={material} />
  </group>
)

const VelocidadGroup = ({ nodes, materials, positions }) => (
  <group>
    {positions.map((pos, index) => (
      <ObjectMesh key={index} name={`Velocidad_(${index + 1})`} geometry={nodes[`Object_${index * 2 + 12}`].geometry} material={materials.Velocity} position={pos.position} scale={pos.scale} />
    ))}
  </group>
)

export function SpaceShip(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/space_ship.gltf')
  const { actions } = useAnimations(animations, group)

  const velocidadPositions = [
    { position: [27.2, -9.5, 944], scale: [1, 1, 1.28] },
    { position: [-26.686, 12.7, 1027], scale: [1, 1, 12.77] },
    // Add more positions here as required
  ]

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" position={[0.004, 0, 0.004]} rotation={[-Math.PI / 2, 0, Math.PI]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Dizzy_Space_0" position={[0.086, 0.794, -0.021]}>
                <ObjectMesh name="Vortex_1" geometry={nodes.Object_5.geometry} material={materials.Vortex} />
                <group name="Nave_2" position={[-0.086, -0.794, -860]} scale={10}>
                  <ObjectMesh name="Propulsor_3" geometry={nodes.Object_9.geometry} material={materials.Propulsor} position={[0, 0.01, 0.56]} scale={[1, 1, 1.48]} />
                  <ObjectMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.Nave} />
                </group>
                <VelocidadGroup nodes={nodes} materials={materials} positions={velocidadPositions} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/space_ship.gltf')
