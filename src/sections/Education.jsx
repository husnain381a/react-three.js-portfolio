import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { education } from '../constants'
import HusnainAvatar2 from '../components/HusnainAvatar2'
import CanvasLoader from '../components/CanvasLoader.jsx';

function Education() {
    return (
        <section className='c-space my-20'>
            <div className='w-full text-white'>
                <h3 className='head-text'> My Education</h3>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12'>
                    <div className='col-span-1 rounded-lg bg-black_200 border bg-border_300 flex justify-center items-center'>
                        <div className='w-full sm:h-[400px] h-[300px]'>
                            <Canvas className='w-full h-full'>
                                <ambientLight intensity={7} />
                                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                                <directionalLight position={[10, 10, 10]} intensity={1} />
                                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                                <Suspense fallback={<CanvasLoader />}>
                                    <HusnainAvatar2 position-y={-3} scale={3} />
                                </Suspense>
                            </Canvas>
                        </div>
                    </div>
                    <div className='bg-black_200 col-span-2 rounded-lg border bg-border_300'>
                        <div className='sm:py-10 py-5 sm:px-5 px-2.5'>
                            {education.map(({ id, name, pos, duration, title, animation, icon }) => (
                                <div key={id} className='grid grid-cols-[auto_1fr] items-start gap-5  transition-all ease-in-out duration-500 cursor-pointer hover:bg-black rounded-lg sm:px-5 px-2.5 group'>
                                    <div className='flex flex-col h-full justify-start items-center py-2'>
                                        <div className='rounded-3xl w-16 h-16 p-2 bg-logo_300'>
                                            <img src={icon} alt="logo" className='w-full h-full' />
                                        </div>
                                        <div className='col-span-2 rounded-lg bg-black_200 border bg-border_300' />
                                    </div>
                                    <div className='sm:p-5 px-2.5 py-5'>
                                        <p className='font-bold text-white'>{name}</p>
                                        <p className='text-sm mb-5 text-white_800'>{pos}{duration}</p>
                                        <p className='text-justify group-hover:text-white transition ease-in-out duration-500 text-white_800'>{title}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education
