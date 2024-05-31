import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { SpaceShip } from '../../../public/SpaceShip';

function Space({ onReachTarget, ...props }) {
  const group = useRef();
  const targetZ = 50; 
  const speed = 30;

  useFrame((state, delta) => {
    if (group.current) {
      group.current.position.z += speed * delta;
      if (group.current.position.z >= targetZ && onReachTarget) {
        onReachTarget();
      }
      if (group.current.position.z > 1000) { 
        group.current.position.z = -1000;
      }
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <SpaceShip />
    </group>
  );
}

export default Space;
