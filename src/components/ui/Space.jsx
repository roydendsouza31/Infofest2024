import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { SpaceShip } from '../../../public/SpaceShip';

function Space(props) {
  const group = useRef();

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.8;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <SpaceShip />
    </group>
  );
}

export default Space;
