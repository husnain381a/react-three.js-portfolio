import React, { Suspense } from 'react'
import { myProjects } from '../constants/index.js'
import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader.jsx';
import DemoComputer from '../components/DemoComputer.jsx';
const projectCount = myProjects.length;

function Projects() {
  //for the project section, we will use a state to keep track of the current project being displayed
  
  const [index, setIndex] = React.useState(0)

  const currentProject = myProjects[index]; 

//and we will use a function to handle the navigation between projects
  const handleNavigation = (direction)=>{
    setIndex((prevIndex) => {
      if (direction === 'prevous'){
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
     })
  }
  return (
    <section className='c-space my-20' id='portfolio'>
      <p className='head-text'>My Portfolio</p>

      <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 mt-12 w-full'>
        <div className='flex flex-col relative sm:p-10 py-10 p-x 5 shadow-2xl shadow-black-200 '>
          <div className='absolute top-0 right-0'>
            <img src={currentProject.spotlight} alt="spotlight" className='h-96 object-cover w-full rounded-xl' />
          </div>
          
          <div className='flex flex-col gap-5 text-white my-5'>
            <p className='text-white text-2xl font-semibold animatedText'>{currentProject.title}</p>
            <p className='animateText'>{currentProject.desc}</p>
            <p className='animateText'>{currentProject.subdesc}</p>
          </div>
          <div className='flex items-center justify-between flex-wrap gap-5'>
            <div className='flex items-center gap-3'>
              
            </div>
            <a className='flex items-center gap-2 cursor-pointer text-white' href={currentProject.href} target="_blank" rel='noreferrer'>
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" className='w-3 h-3' alt="arrow" />
            </a>
          </div>

          <div className='flex items-center justify-between mt-7'>
            <button className='arrow-btn' onClick={() => handleNavigation('previous')}>
              <img src="/assets/left-arrow.png" alt="arrow" className='w-4 h-4' />
            </button>

            <button className='arrow-btn' onClick={() => handleNavigation('next')}>
              <img src="/assets/right-arrow.png" alt="left" className='w-4 h-4' />
            </button>
          </div>
        </div>

        <div className="border bg-border_300 bg-Mine rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>

      </div>
    </section>
  )
}

export default Projects
