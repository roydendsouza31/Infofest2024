import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/space_ship.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" position={[0.004, 0, 0.004]} rotation={[-Math.PI / 2, 0, Math.PI]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Dizzy_Space_0" position={[0.086, 0.794, -0.021]}>
                <group name="Vortex_1" position={[-0.086, -0.794, 0.021]}>
                  <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.Vortex} />
                </group>
                <group name="Nave_2" position={[-0.086, -0.794, -860]} scale={10}>
                  <group name="Propulsor_3" position={[0, 0.01, 0.56]} scale={[1, 1, 1.48]}>
                    <mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.Propulsor} />
                  </group>
                  <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.Nave} />
                </group>
                <group name="Velocidad_4" position={[-26.686, 12.7, 1027]} scale={[1, 1, 12.77]}>
                  <group name="Velocidad_(16)_5">
                    <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(17)_6" position={[82.086, 21.2, -4.66]} scale={[1, 1, 0.8]}>
                    <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(18)_7" position={[0, 31.1, -10.86]} scale={[1, 1, 0.6]}>
                    <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(19)_8" position={[0, -28.1, -2.16]} scale={[1, 1, 0.4]}>
                    <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(20)_9" position={[111.086, 20.1, -24.16]} scale={[1, 1, 0.6]}>
                    <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(21)_10" position={[21.986, 27, -18.18]} scale={[1, 1, 0.5]}>
                    <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(22)_11" position={[-32.614, -21, -18.54]} scale={[1, 1, 0.6]}>
                    <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(23)_12" position={[-14.314, 45.6, -10.86]} scale={[1, 1, 0.4]}>
                    <mesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(24)_13" position={[43.686, -15.2, -10.86]} scale={[1, 1, 0.6]}>
                    <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(25)_14" position={[35.286, 40.2, -23.16]} scale={[1, 1, 0.4]}>
                    <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(26)_15" position={[-68.514, -22.4, -10.86]} scale={[1, 1, 0.8]}>
                    <mesh name="Object_32" geometry={nodes.Object_32.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(27)_16" position={[-96.714, -43, -10.86]} scale={[1, 1, 0.3]}>
                    <mesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(28)_17" position={[-68.514, -8.3, -2.74]} scale={[1, 1, 0.6]}>
                    <mesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(29)_18" position={[4.786, 0.5, -17.06]} scale={[1, 1, 0.4]}>
                    <mesh name="Object_38" geometry={nodes.Object_38.geometry} material={materials.Velocity} />
                  </group>
                </group>
                <group name="Velocidad_2_19" position={[27.2, -9.5, 944]} rotation={[0, 0, Math.PI / 2]} scale={[1, 1, 1.28]}>
                  <group name="Velocidad_20" position={[-62.7, 8.706, 83.2]} scale={[1, 1, 2]}>
                    <mesh name="Object_41" geometry={nodes.Object_41.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(1)_21" position={[-4.786, -4, 54.3]} scale={[1, 1, 5]}>
                    <mesh name="Object_43" geometry={nodes.Object_43.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(2)_22" position={[77.3, 17.2, 31]} scale={[1, 1, 4]}>
                    <mesh name="Object_45" geometry={nodes.Object_45.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(3)_23" position={[-4.786, 27.1, 0]} scale={[1, 1, 3]}>
                    <mesh name="Object_47" geometry={nodes.Object_47.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(4)_24" position={[-4.786, -32.1, 43.5]} scale={[1, 1, 2]}>
                    <mesh name="Object_49" geometry={nodes.Object_49.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(5)_25" position={[106.3, 16.1, -66.5]} scale={[1, 1, 3]}>
                    <mesh name="Object_51" geometry={nodes.Object_51.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(6)_26" position={[17.2, 23, -36.6]} scale={[1, 1, 2.5]}>
                    <mesh name="Object_53" geometry={nodes.Object_53.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(7)_27" position={[-37.4, -25, -38.4]} scale={[1, 1, 3]}>
                    <mesh name="Object_55" geometry={nodes.Object_55.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(8)_28" position={[-19.1, 41.6, 0]} scale={[1, 1, 2]}>
                    <mesh name="Object_57" geometry={nodes.Object_57.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(9)_29" position={[38.9, -19.2, 0]} scale={[1, 1, 3]}>
                    <mesh name="Object_59" geometry={nodes.Object_59.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(10)_30" position={[30.5, 36.2, -61.5]} scale={[1, 1, 2]}>
                    <mesh name="Object_61" geometry={nodes.Object_61.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(11)_31" position={[-73.3, -26.4, 0]} scale={[1, 1, 4]}>
                    <mesh name="Object_63" geometry={nodes.Object_63.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(12)_32" position={[-101.5, -47, 0]} scale={[1, 1, 1.5]}>
                    <mesh name="Object_65" geometry={nodes.Object_65.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(13)_33" position={[-73.3, -12.3, 40.6]} scale={[1, 1, 3]}>
                    <mesh name="Object_67" geometry={nodes.Object_67.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(14)_34" position={[0, -3.5, -31]} scale={[1, 1, 2]}>
                    <mesh name="Object_69" geometry={nodes.Object_69.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(15)_35" position={[-89.3, 34.906, 83.2]} scale={[1, 1, 2]}>
                    <mesh name="Object_71" geometry={nodes.Object_71.geometry} material={materials.Velocity} />
                  </group>
                </group>
                <group name="Velocidad_(1)_36" position={[-101, 12.7, 1141]} rotation={[0, 0, -2.357]} scale={[1, 1, 5.14]}>
                  <group name="Velocidad_(16)_37">
                    <mesh name="Object_74" geometry={nodes.Object_74.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(17)_38" position={[82.086, 21.2, -4.66]} scale={[1, 1, 0.8]}>
                    <mesh name="Object_76" geometry={nodes.Object_76.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(18)_39" position={[0, 31.1, -10.86]} scale={[1, 1, 0.6]}>
                    <mesh name="Object_78" geometry={nodes.Object_78.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(19)_40" position={[0, -28.1, -2.16]} scale={[1, 1, 0.4]}>
                    <mesh name="Object_80" geometry={nodes.Object_80.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(20)_41" position={[111.086, 20.1, -24.16]} scale={[1, 1, 0.6]}>
                    <mesh name="Object_82" geometry={nodes.Object_82.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(21)_42" position={[21.986, 27, -18.18]} scale={[1, 1, 0.5]}>
                    <mesh name="Object_84" geometry={nodes.Object_84.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(22)_43" position={[-32.614, -21, -18.54]} scale={[1, 1, 0.6]}>
                    <mesh name="Object_86" geometry={nodes.Object_86.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(23)_44" position={[-14.314, 45.6, -10.86]} scale={[1, 1, 0.4]}>
                    <mesh name="Object_88" geometry={nodes.Object_88.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(24)_45" position={[43.686, -15.2, -10.86]} scale={[1, 1, 0.6]}>
                    <mesh name="Object_90" geometry={nodes.Object_90.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(25)_46" position={[35.286, 40.2, -23.16]} scale={[1, 1, 0.4]}>
                    <mesh name="Object_92" geometry={nodes.Object_92.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(26)_47" position={[-68.514, -22.4, -10.86]} scale={[1, 1, 0.8]}>
                    <mesh name="Object_94" geometry={nodes.Object_94.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(27)_48" position={[-96.714, -43, -10.86]} scale={[1, 1, 0.3]}>
                    <mesh name="Object_96" geometry={nodes.Object_96.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(28)_49" position={[-68.514, -8.3, -2.74]} scale={[1, 1, 0.6]}>
                    <mesh name="Object_98" geometry={nodes.Object_98.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(29)_50" position={[4.786, 0.5, -17.06]} scale={[1, 1, 0.4]}>
                    <mesh name="Object_100" geometry={nodes.Object_100.geometry} material={materials.Velocity} />
                  </group>
                </group>
                <group name="Velocidad_2_(1)_51" position={[-34, -23.5, 1199]} rotation={[0, 0, 2.077]} scale={[1, 1, 1.56]}>
                  <group name="Velocidad_52" position={[-62.7, 8.706, 83.2]} scale={[1, 1, 2]}>
                    <mesh name="Object_103" geometry={nodes.Object_103.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(1)_53" position={[-4.786, -4, 54.3]} scale={[1, 1, 5]}>
                    <mesh name="Object_105" geometry={nodes.Object_105.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(2)_54" position={[77.3, 17.2, 31]} scale={[1, 1, 4]}>
                    <mesh name="Object_107" geometry={nodes.Object_107.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(3)_55" position={[-4.786, 27.1, 0]} scale={[1, 1, 3]}>
                    <mesh name="Object_109" geometry={nodes.Object_109.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(4)_56" position={[-4.786, -32.1, 43.5]} scale={[1, 1, 2]}>
                    <mesh name="Object_111" geometry={nodes.Object_111.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(5)_57" position={[106.3, 16.1, -66.5]} scale={[1, 1, 3]}>
                    <mesh name="Object_113" geometry={nodes.Object_113.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(6)_58" position={[17.2, 23, -36.6]} scale={[1, 1, 2.5]}>
                    <mesh name="Object_115" geometry={nodes.Object_115.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(7)_59" position={[-37.4, -25, -38.4]} scale={[1, 1, 3]}>
                    <mesh name="Object_117" geometry={nodes.Object_117.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(8)_60" position={[-19.1, 41.6, 0]} scale={[1, 1, 2]}>
                    <mesh name="Object_119" geometry={nodes.Object_119.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(9)_61" position={[38.9, -19.2, 0]} scale={[1, 1, 3]}>
                    <mesh name="Object_121" geometry={nodes.Object_121.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(10)_62" position={[30.5, 36.2, -61.5]} scale={[1, 1, 2]}>
                    <mesh name="Object_123" geometry={nodes.Object_123.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(11)_63" position={[-73.3, -26.4, 0]} scale={[1, 1, 4]}>
                    <mesh name="Object_125" geometry={nodes.Object_125.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(12)_64" position={[-101.5, -47, 0]} scale={[1, 1, 1.5]}>
                    <mesh name="Object_127" geometry={nodes.Object_127.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(13)_65" position={[-73.3, -12.3, 40.6]} scale={[1, 1, 3]}>
                    <mesh name="Object_129" geometry={nodes.Object_129.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(14)_66" position={[0, -3.5, -31]} scale={[1, 1, 2]}>
                    <mesh name="Object_131" geometry={nodes.Object_131.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(15)_67" position={[-89.3, 34.906, 83.2]} scale={[1, 1, 2]}>
                    <mesh name="Object_133" geometry={nodes.Object_133.geometry} material={materials.Velocity} />
                  </group>
                </group>
                <group name="Velocidad_(2)_68" position={[-26.686, 30, 1351]} rotation={[0, 0, 0.047]} scale={[1, 1, 9.73]}>
                  <group name="Velocidad_(16)_69">
                    <mesh name="Object_136" geometry={nodes.Object_136.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(17)_70" position={[82.086, 21.2, -4.66]} scale={[1, 1, 0.8]}>
                    <mesh name="Object_138" geometry={nodes.Object_138.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(18)_71" position={[0, 31.1, -10.86]} scale={[1, 1, 0.6]}>
                    <mesh name="Object_140" geometry={nodes.Object_140.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(19)_72" position={[0, -28.1, -2.16]} scale={[1, 1, 0.4]}>
                    <mesh name="Object_142" geometry={nodes.Object_142.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(20)_73" position={[111.086, 20.1, -24.16]} scale={[1, 1, 0.6]}>
                    <mesh name="Object_144" geometry={nodes.Object_144.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(21)_74" position={[21.986, 27, -18.18]} scale={[1, 1, 0.5]}>
                    <mesh name="Object_146" geometry={nodes.Object_146.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(22)_75" position={[-32.614, -21, -18.54]} scale={[1, 1, 0.6]}>
                    <mesh name="Object_148" geometry={nodes.Object_148.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(23)_76" position={[-14.314, 45.6, -10.86]} scale={[1, 1, 0.4]}>
                    <mesh name="Object_150" geometry={nodes.Object_150.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(24)_77" position={[43.686, -15.2, -10.86]} scale={[1, 1, 0.6]}>
                    <mesh name="Object_152" geometry={nodes.Object_152.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(25)_78" position={[35.286, 40.2, -23.16]} scale={[1, 1, 0.4]}>
                    <mesh name="Object_154" geometry={nodes.Object_154.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(26)_79" position={[-68.514, -22.4, -10.86]} scale={[1, 1, 0.8]}>
                    <mesh name="Object_156" geometry={nodes.Object_156.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(27)_80" position={[-96.714, -43, -10.86]} scale={[1, 1, 0.3]}>
                    <mesh name="Object_158" geometry={nodes.Object_158.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(28)_81" position={[-68.514, -8.3, -2.74]} scale={[1, 1, 0.6]}>
                    <mesh name="Object_160" geometry={nodes.Object_160.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(29)_82" position={[4.786, 0.5, -17.06]} scale={[1, 1, 0.4]}>
                    <mesh name="Object_162" geometry={nodes.Object_162.geometry} material={materials.Velocity} />
                  </group>
                </group>
                <group name="Velocidad_2_(2)_83" position={[4.7, -25.8, 971]} rotation={[0, 0, -1.071]} scale={[1, 1, 1.28]}>
                  <group name="Velocidad_84" position={[-62.7, 8.706, 83.2]} scale={[1, 1, 2]}>
                    <mesh name="Object_165" geometry={nodes.Object_165.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(1)_85" position={[-4.786, -4, 54.3]} scale={[1, 1, 5]}>
                    <mesh name="Object_167" geometry={nodes.Object_167.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(2)_86" position={[77.3, 17.2, 31]} scale={[1, 1, 4]}>
                    <mesh name="Object_169" geometry={nodes.Object_169.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(3)_87" position={[-4.786, 27.1, 0]} scale={[1, 1, 3]}>
                    <mesh name="Object_171" geometry={nodes.Object_171.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(4)_88" position={[-4.786, -32.1, 43.5]} scale={[1, 1, 2]}>
                    <mesh name="Object_173" geometry={nodes.Object_173.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(5)_89" position={[106.3, 16.1, -66.5]} scale={[1, 1, 3]}>
                    <mesh name="Object_175" geometry={nodes.Object_175.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(6)_90" position={[17.2, 23, -36.6]} scale={[1, 1, 2.5]}>
                    <mesh name="Object_177" geometry={nodes.Object_177.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(7)_91" position={[-37.4, -25, -38.4]} scale={[1, 1, 3]}>
                    <mesh name="Object_179" geometry={nodes.Object_179.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(8)_92" position={[-19.1, 41.6, 0]} scale={[1, 1, 2]}>
                    <mesh name="Object_181" geometry={nodes.Object_181.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(9)_93" position={[38.9, -19.2, 0]} scale={[1, 1, 3]}>
                    <mesh name="Object_183" geometry={nodes.Object_183.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(10)_94" position={[30.5, 36.2, -61.5]} scale={[1, 1, 2]}>
                    <mesh name="Object_185" geometry={nodes.Object_185.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(11)_95" position={[-73.3, -26.4, 0]} scale={[1, 1, 4]}>
                    <mesh name="Object_187" geometry={nodes.Object_187.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(12)_96" position={[-101.5, -47, 0]} scale={[1, 1, 1.5]}>
                    <mesh name="Object_189" geometry={nodes.Object_189.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(13)_97" position={[-73.3, -12.3, 40.6]} scale={[1, 1, 3]}>
                    <mesh name="Object_191" geometry={nodes.Object_191.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(14)_98" position={[0, -3.5, -31]} scale={[1, 1, 2]}>
                    <mesh name="Object_193" geometry={nodes.Object_193.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(15)_99" position={[-89.3, 34.906, 83.2]} scale={[1, 1, 2]}>
                    <mesh name="Object_195" geometry={nodes.Object_195.geometry} material={materials.Velocity} />
                  </group>
                </group>
                <group name="Velocidad_(3)_100" position={[-101, -21.5, 1127]} rotation={[0, 0, 1.77]} scale={[1, 1, 5.14]}>
                  <group name="Velocidad_(16)_101">
                    <mesh name="Object_198" geometry={nodes.Object_198.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(17)_102" position={[82.086, 21.2, -4.66]} scale={[1, 1, 0.8]}>
                    <mesh name="Object_200" geometry={nodes.Object_200.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(18)_103" position={[0, 31.1, -10.86]} scale={[1, 1, 0.6]}>
                    <mesh name="Object_202" geometry={nodes.Object_202.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(19)_104" position={[0, -28.1, -2.16]} scale={[1, 1, 0.4]}>
                    <mesh name="Object_204" geometry={nodes.Object_204.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(20)_105" position={[111.086, 20.1, -24.16]} scale={[1, 1, 0.6]}>
                    <mesh name="Object_206" geometry={nodes.Object_206.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(21)_106" position={[21.986, 27, -18.18]} scale={[1, 1, 0.5]}>
                    <mesh name="Object_208" geometry={nodes.Object_208.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(22)_107" position={[-32.614, -21, -18.54]} scale={[1, 1, 0.6]}>
                    <mesh name="Object_210" geometry={nodes.Object_210.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(23)_108" position={[-14.314, 45.6, -10.86]} scale={[1, 1, 0.4]}>
                    <mesh name="Object_212" geometry={nodes.Object_212.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(24)_109" position={[43.686, -15.2, -10.86]} scale={[1, 1, 0.6]}>
                    <mesh name="Object_214" geometry={nodes.Object_214.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(25)_110" position={[35.286, 40.2, -23.16]} scale={[1, 1, 0.4]}>
                    <mesh name="Object_216" geometry={nodes.Object_216.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(26)_111" position={[-68.514, -22.4, -10.86]} scale={[1, 1, 0.8]}>
                    <mesh name="Object_218" geometry={nodes.Object_218.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(27)_112" position={[-96.714, -43, -10.86]} scale={[1, 1, 0.3]}>
                    <mesh name="Object_220" geometry={nodes.Object_220.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(28)_113" position={[-68.514, -8.3, -2.74]} scale={[1, 1, 0.6]}>
                    <mesh name="Object_222" geometry={nodes.Object_222.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(29)_114" position={[4.786, 0.5, -17.06]} scale={[1, 1, 0.4]}>
                    <mesh name="Object_224" geometry={nodes.Object_224.geometry} material={materials.Velocity} />
                  </group>
                </group>
                <group name="Velocidad_2_(3)_115" position={[-6.5, -9.5, 1217]} rotation={[0, 0, 0.117]} scale={[1, 1, 1.56]}>
                  <group name="Velocidad_116" position={[-62.7, 8.706, 83.2]} scale={[1, 1, 2]}>
                    <mesh name="Object_227" geometry={nodes.Object_227.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(1)_117" position={[-4.786, -4, 54.3]} scale={[1, 1, 5]}>
                    <mesh name="Object_229" geometry={nodes.Object_229.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(2)_118" position={[77.3, 17.2, 31]} scale={[1, 1, 4]}>
                    <mesh name="Object_231" geometry={nodes.Object_231.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(3)_119" position={[-4.786, 27.1, 0]} scale={[1, 1, 3]}>
                    <mesh name="Object_233" geometry={nodes.Object_233.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(4)_120" position={[-4.786, -32.1, 43.5]} scale={[1, 1, 2]}>
                    <mesh name="Object_235" geometry={nodes.Object_235.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(5)_121" position={[106.3, 16.1, -66.5]} scale={[1, 1, 3]}>
                    <mesh name="Object_237" geometry={nodes.Object_237.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(6)_122" position={[17.2, 23, -36.6]} scale={[1, 1, 2.5]}>
                    <mesh name="Object_239" geometry={nodes.Object_239.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(7)_123" position={[-37.4, -25, -38.4]} scale={[1, 1, 3]}>
                    <mesh name="Object_241" geometry={nodes.Object_241.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(8)_124" position={[-19.1, 41.6, 0]} scale={[1, 1, 2]}>
                    <mesh name="Object_243" geometry={nodes.Object_243.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(9)_125" position={[38.9, -19.2, 0]} scale={[1, 1, 3]}>
                    <mesh name="Object_245" geometry={nodes.Object_245.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(10)_126" position={[30.5, 36.2, -61.5]} scale={[1, 1, 2]}>
                    <mesh name="Object_247" geometry={nodes.Object_247.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(11)_127" position={[-73.3, -26.4, 0]} scale={[1, 1, 4]}>
                    <mesh name="Object_249" geometry={nodes.Object_249.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(12)_128" position={[-101.5, -47, 0]} scale={[1, 1, 1.5]}>
                    <mesh name="Object_251" geometry={nodes.Object_251.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(13)_129" position={[-73.3, -12.3, 40.6]} scale={[1, 1, 3]}>
                    <mesh name="Object_253" geometry={nodes.Object_253.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(14)_130" position={[0, -3.5, -31]} scale={[1, 1, 2]}>
                    <mesh name="Object_255" geometry={nodes.Object_255.geometry} material={materials.Velocity} />
                  </group>
                  <group name="Velocidad_(15)_131" position={[-89.3, 34.906, 83.2]} scale={[1, 1, 2]}>
                    <mesh name="Object_257" geometry={nodes.Object_257.geometry} material={materials.Velocity} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/space_ship.gltf')
