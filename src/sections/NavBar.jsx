import React from 'react'
import { useState } from 'react'
import { navLinks } from '../constants/index.js'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen) //will do true
    }

    const NavItems =()=>{
        return(
            <ul className='nav-ul'>
               {navLinks.map((item)=>(
                <li key ={item.id} className='nav-li'>
                    <a href={item.href} className='nav-li_a'>
                        {item.name}
                    </a>
                </li>
               ))}
            </ul>
        )
    }
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
        <div className='max-w-7xl mx-auto'>

            {/* Main Logo */}
            <div className='flex items-center justify-between py-5 px-auto c-space'>
                <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
                Husnain
                </a>

                {/* For Mobile Hamburger*/}
                <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex arial-label="Toggle menu">'>
                    <img src={ isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className='w-6 h-6' />
                </button>

                {/*For Laptops and Desktops */}
                <nav className='sm:flex hidden'>
                    <NavItems/>
                </nav>
            </div>
        </div>

        {/* For Mobile Bar*/}
        <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <nav className='p-5'>
            <NavItems/>
            </nav>
        </div>
    </header>
  )
}

export default NavBar
