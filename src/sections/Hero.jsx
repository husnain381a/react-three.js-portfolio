import React, {Suspense, use} from 'react'
import { Canvas } from '@react-three/fiber'
import {PerspectiveCamera, Ring } from '@react-three/drei'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/index.js'
import Target from '../components/Target.jsx'
import ReactLogo from '../components/ReactLogo.jsx'
import Cube from '../components/Cube.jsx'
import Rings from '../components/Ring.jsx'
import HeroCamera from '../components/HeroCamera.jsx'
import Button from '../components/Button.jsx'

function Hero() {
  // const controls = useControls('Hacker Room', {
  //   positionX: { value: 2.5, min: -10, max: 10 },
  //   positionY: { value: 2.5, min: -10, max: 10 },
  //   positionZ: { value: 2.5, min: -10, max: 10 },

  //   rotationX: { value: 2.5, min: -10, max: 10 },
  //   rotationY: { value: 2.5, min: -10, max: 10 },
  //   rotationZ: { value: 2.5, min: -10, max: 10 },

  //   scale: { value: 1, min: 0.1, max: 10 },
  // });

  const isMobile = useMediaQuery({maxWidth: 768}) //for responsive design
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})
  const isSmall = useMediaQuery({maxWidth: 440})

  const sizes = calculateSizes(isMobile, isTablet, isSmall);

  return (
   <section className='min-h-screen w-full flex-col relative' id='hero'>
    <div className='mx-auto flex flex-col w-full sm:mt-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-2xl font-medium font-generalsans text-center text-white'>Hi, I'm Husnain Mazhar<span className="waving-hand">👋</span></p>
        <p className='hero_tag text-gray_gradient'>A Front-End Developer</p>

        {/*Three Js */}
        <div className='w-full h-full absolute inset-0'>
        {/* <Leva/>  */}
          <Canvas className='w-full h-full'>
            <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera makeDefault  position={[0, 0, 30]}/>

            <HeroCamera isMobile={isMobile}>
            <HackerRoom 
            // position = {[controls.positionX, controls.positionY, controls.positionZ]}
            position = {sizes.deskPosition}
            // rotation = {[controls.rotationX, controls.rotationY, controls.rotationZ]}
            rotation = {[0.1, -Math.PI, 0]}
            // scale = {[controls.scale, controls.scale, controls.scale]}
            scale = {sizes.deskScale}
            />
            </HeroCamera>

            <group>
              <Target position = {sizes.targetPosition}/>
              <ReactLogo position = {sizes.reactLogoPosition}/>
              <Cube position = {sizes.cubePosition}/>
              <Rings position={sizes.ringPosition}/>
            </group>
           
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5}/>
            </Suspense>
          </Canvas>
        </div>
        <div className='absolute bottom-7 left-0 right-0 z-10 w-full c-space'>
          <a href="#about" className='w-fit'>
            <Button name = "Let's work together" isBeam containerClass ="sm:w-fit w-full sm:min-w-96"/>
          </a>
        </div>
    </div>
   </section>
  )
}

export default Hero
