/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 scene.gltf --transform 
Files: scene.gltf [39.22KB] > C:\Users\frede\OneDrive\Images\3D models\PortfolioSelected\NEW\about\hover_bike_-_the_rocket\scene-transformed.glb [954.9KB] (-2335%)
Author: TuppsM (https://sketchfab.com/TuppsM)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hover-bike-the-rocket-8b2e5bfca78e41c791b4e5b5e8c04512
Title: Hover bike - "The Rocket"
*/

import React, { useRef, useEffect } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"
import * as THREE from "three"
import { useFrame } from "@react-three/fiber"

const HoverBike = React.memo(function HoverBike({
  animationSpeed = 1,
  mousePosition,
  ...props
}) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(
    "/models/hoverbike-transformed.glb"
  )
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        if (action) {
          action.play()
          action.setEffectiveTimeScale(animationSpeed)
          action.loop = THREE.LoopRepeat
          action.repetitions = Infinity
        }
      })

      return () => {
        Object.values(actions).forEach((action) => {
          if (action && action.stop) {
            action.stop()
          }
        })
      }
    }
  }, [actions, animationSpeed])

  useFrame((state) => {
    if (group.current) {
      // Add subtle floating animation
      const floatAmplitude = 0.05 // Adjust this value to control the height of the movement
      const floatFrequency = 1 // Adjust this value to control the speed of the movement
      group.current.position.y =
        Math.sin(state.clock.elapsedTime * floatFrequency) * floatAmplitude
    }
  })

  // Mouse tracking
  // const initialRotation = new THREE.Euler(0, 0, 0)

  // useEffect(() => {
  //   if (group.current) {
  //     group.current.rotation.copy(initialRotation)
  //   }
  // }, [initialRotation])

  // useFrame(() => {
  //   if (group.current && mousePosition) {
  //     const targetX = initialRotation.x + (-mousePosition.y * Math.PI) / 8
  //     const targetY = initialRotation.y + (mousePosition.x * Math.PI) / 8

  //     group.current.rotation.x = THREE.MathUtils.lerp(
  //       group.current.rotation.x,
  //       targetX,
  //       0.05
  //     )
  //     group.current.rotation.y = THREE.MathUtils.lerp(
  //       group.current.rotation.y,
  //       targetY,
  //       0.05
  //     )
  //   }
  // })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="_rootJoint"
          rotation={[-Math.PI / 1.8, 0, -Math.PI / 5]}
          position={[0.4, 0, 0]}
          scale={1}
        >
          <group name="Root_00" rotation={[Math.PI / 2, 0, -Math.PI / 7]}>
            <group
              name="VentMain_01"
              position={[0, 1.2, 3.739]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}
            >
              <group
                name="VentMain"
                position={[0, 0.11, 0]}
                rotation={[0, 0, Math.PI]}
              >
                <mesh
                  name="VentMain_Test_0"
                  geometry={nodes.VentMain_Test_0.geometry}
                  material={materials.Test}
                />
              </group>
            </group>
            <group
              name="VentSub_02"
              position={[0, 1.2, 3.51]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}
            >
              <group
                name="VentSub"
                position={[0, 0.063, 0]}
                rotation={[0, 0, Math.PI]}
              >
                <mesh
                  name="VentSub_Test_0"
                  geometry={nodes.VentSub_Test_0.geometry}
                  material={materials.Test}
                />
              </group>
            </group>
            <group
              name="WingRight_03"
              position={[-0.195, 0.88, -2.905]}
              rotation={[-Math.PI / 2, 0, Math.PI]}
            >
              <group
                name="FlapRight_04"
                position={[0.548, 0.042, 0]}
                rotation={[0, 0, -1.84]}
              >
                <group
                  name="FlapRight"
                  position={[0, 0.203, 0]}
                  rotation={[0, 0, -1.302]}
                >
                  <mesh
                    name="FlapRight_Test_0"
                    geometry={nodes.FlapRight_Test_0.geometry}
                    material={materials.Test}
                  />
                </group>
              </group>
              <group
                name="WingRight"
                position={[0, 0.241, 0]}
                rotation={[0, 0, -Math.PI]}
              >
                <mesh
                  name="WingRight_Test_0"
                  geometry={nodes.WingRight_Test_0.geometry}
                  material={materials.Test}
                />
              </group>
            </group>
            <group
              name="WingLeft_05"
              position={[0.195, 0.88, -2.905]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}
            >
              <group
                name="FlapLeft_06"
                position={[-0.548, 0.042, 0]}
                rotation={[0, 0, 1.84]}
              >
                <group
                  name="FlapLeft"
                  position={[0, 0.203, 0]}
                  rotation={[0, 0, 1.302]}
                >
                  <mesh
                    name="FlapLeft_Test_0"
                    geometry={nodes.FlapLeft_Test_0.geometry}
                    material={materials.Test}
                  />
                </group>
              </group>
              <group
                name="WingLeft"
                position={[0, 0.241, 0]}
                rotation={[0, 0, Math.PI]}
              >
                <mesh
                  name="WingLeft_Test_0"
                  geometry={nodes.WingLeft_Test_0.geometry}
                  material={materials.Test}
                />
              </group>
            </group>
            <group
              name="SwitchRight_07"
              position={[-0.695, 1.944, 0.645]}
              rotation={[-0.489, -0.018, -0.031]}
            >
              <group name="SwitchRight" rotation={[-1.082, -0.018, 0.031]}>
                <mesh
                  name="SwitchRight_Test_0"
                  geometry={nodes.SwitchRight_Test_0.geometry}
                  material={materials.Test}
                />
              </group>
            </group>
            <group
              name="SwitchLeft_08"
              position={[0.695, 1.944, 0.645]}
              rotation={[-0.489, 0.018, 0.031]}
            >
              <group name="SwitchLeft" rotation={[-1.082, 0.018, -0.031]}>
                <mesh
                  name="SwitchLeft_Test_0"
                  geometry={nodes.SwitchLeft_Test_0.geometry}
                  material={materials.Test}
                />
              </group>
            </group>
            <group
              name="WingMain_09"
              position={[0, 1.762, -2.721]}
              rotation={[-0.384, 0, 0]}
            >
              <group name="WingMain" rotation={[-1.187, 0, 0]}>
                <mesh
                  name="WingMain_Test_0"
                  geometry={nodes.WingMain_Test_0.geometry}
                  material={materials.Test}
                />
              </group>
            </group>
            <group name="Bike" rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                name="Bike_Test_0"
                geometry={nodes.Bike_Test_0.geometry}
                material={materials.Test}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
})

export default HoverBike

useGLTF.preload("/models/hoverbike-transformed.glb")