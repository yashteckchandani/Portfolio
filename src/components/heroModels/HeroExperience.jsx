import React, { use } from 'react';
import { Canvas} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room';
import HeroLights from './HeroLights';
import { Myavatar } from './Myavatar';
import Particles from './Particles';
import { EffectComposer, Bloom } from "@react-three/postprocessing";


const HeroExperience = () => {

    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });


    return (
        <Canvas camera={{position: [0, 0, 15], fov: 45}}>
            <OrbitControls enablePan={false} enableZoom={!isTablet} maxDistance={20} minDistance={5} minPolarAngle={Math.PI/5} maxPolarAngle={Math.PI/2} />
            <HeroLights />
            <Particles count={100} />
            <EffectComposer>
                <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} intensity={1.5} />
            </EffectComposer>
            <group scale = {isMobile ? 2.2 : 3} position={[0,0,0]} rotation={[0,-Math.PI/9,0]}>
            <Myavatar />
            </group>
            
        </Canvas>
    )
}

export default HeroExperience;