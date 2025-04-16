
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Myavatar(props) {
  const { nodes, materials } = useGLTF('/models/myavatar.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
    </group>
  )
}

useGLTF.preload('/models/myavatar.glb')
