import React from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

function About() {
    const [copy, setCopy] = React.useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText('husnainmazhar002@gmail.com')
        setCopy(true)
        setTimeout(() => {
            setCopy(false)
        }
            , 2000)
    }

    return (
        <section className='c-space my-20' id='about'>
            <div className='grid xl:grid-cols-3 xl:grid-row-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />

                        <div>
                            <p className='grid-headtext'>Hi, I'm Husnain</p>
                            <p className='grid-subtext'>With 3+ years of experience, I specialize in Full-Stack Development and the architecture of SaaS platforms. I build scalable, multi-tenant applications with a focus on high-performance infrastructure, bridging the gap between complex web ecosystems and AI-as-a-Service (AIaaS) to deliver intelligent, automated solutions through advanced model integration.</p>
                        </div>
                    </div>

                </div>

                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] object-contain h-fit" />
                        <div>
                            <p className='grid-headtext'>Tech Stack</p>
                            <p className=' grid-subtext'>I engineer responsive platforms by combining Next.js and the PERN Stack with ASP.NET Core APIs. My approach integrates strategic SEO and CMS optimization to scale digital footprints, while leveraging AI/ML to build smarter, future-ready functionality.</p>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 xl:row-span-4'>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor='rgba(0, 0, 0, 0)'
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            // labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I’m flexible and available to work remotely across any time zone or location</p>
                            <p className="grid-subtext">I’m highly adaptable to time zone differences and remote work setups, prioritizing clear communication and consistent collaboration for smooth interactions with clients and teams worldwide.</p>
                            <a href="#contact" className="w-full">
                                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='xl:col-span-2 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />
                        <div>
                            <p className="grid-headtext">Passion for Full-Stack Development, AI, and Innovation</p>
                            <p className="grid-subtext">
                                As a Software Engineering student and Full-Stack Developer, I am driven by the challenge of architecting intuitive, high-performance digital ecosystems. My focus extends beyond traditional development; I am dedicated to exploring the intersection of SaaS architecture and AI-as-a-Service, leveraging machine learning to redefine how users interact with the web. By continuously integrating modern frameworks and automated workflows, I aim to build future-ready solutions that solve complex problems with precision and scalability.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-1 xl:row-span-2'>
                    <div className='grid-container'>
                        <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />
                        <div className='space-y-2'>
                            <p className='grid-subtext text-center'>Contact Me</p>
                            <div className='copy-container' onClick={handleCopy}>
                                <img src={copy ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">info@husnainmazhar.com</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
