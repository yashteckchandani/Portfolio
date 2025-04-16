import React from 'react';
import * as THREE from 'three';

const HeroLights = () => {
    return(
        <>
        <ambientLight intensity={1} color="#ffffff" />
        <spotLight 
        position={[4,2,6]}
        intensity={150}
        angle={0.5}
        penumbra={0.5}
        color="#9d4edd"
        /> 
       <spotLight 
        position={[-7,5,-2]}
        intensity={200}
        angle={0.5}
        penumbra={1}
        color="#05b7f9"
        /> 
        </>
    )
}

export default HeroLights;