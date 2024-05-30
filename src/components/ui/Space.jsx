import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { SpaceShip } from '../../../public/SpaceShip';

function Space({ onReachTarget, ...props }) {
  const group = useRef();
  const targetZ = -10; // The Z position at which we want to trigger the transition
  const speed = 10;

  useFrame((state, delta) => {
    if (group.current) {
      group.current.position.z += speed * delta;
      if (group.current.position.z >= targetZ && onReachTarget) {
        onReachTarget();
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
