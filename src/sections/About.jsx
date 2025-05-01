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
                    <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain'/>

                    <div>
                        <p className='grid-headtext'>Hi, I'm Husnain</p>
                        <p className='text-justify grid-subtext'>With 2+ years of experience, specializing in front-end development. I'm passionate about creating interactive, high-performance web applications with a strong focus on design and usability. Currently expanding into full-stack development through real-time projects and advanced training, I bring proactive problem-solving and solid project management skills to every challenge.</p>
                    </div>
                </div>

            </div>

            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] object-contain h-fit" />
                    <div>
                        <p className='grid-headtext'>Tech Stack</p>
                        <p className=' text-justify grid-subtext'>I work with a modern and flexible set of tools that help me build fast, responsive, and user-friendly web applications. My skills cover both front-end and back-end development, allowing me to create seamless user experiences and powerful functionality. I’m always exploring new technologies to stay updated with industry trends and continually improve the quality of my work.</p>
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
                    <p className="text-justify grid-subtext">No matter where you're located, I'm highly adaptable with time zone differences and remote work setups. I prioritize clear communication and consistent collaboration, making it easy to work with clients and teams worldwide.</p>
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
              <p className="grid-headtext">Passion for Web Development, AI, and Innovation</p>
              <p className="text-justify grid-subtext">
              As a web developer and software engineering student, I’m deeply passionate about creating intuitive and engaging user experiences. My enthusiasm for technology extends beyond just coding; I’m fascinated by the potential of AI and how it can shape the future of web development. I’m constantly exploring new tools and techniques to enhance my skills and stay at the cutting edge of the industry
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
                        <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">husnainmazhar002@gmail.com</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
