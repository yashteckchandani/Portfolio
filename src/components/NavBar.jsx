import React, { useEffect } from 'react';
import { navLinks } from '../constants/index.js';
import { useState } from 'react';

const NavBar = () => {
    const [scrolled,setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])
    return(
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className='inner'>
                <a className='logo' href="#hero">
                    Yash Teckchandani
                </a>
                <nav className='desktop'>
                    <ul>
                        {navLinks.map(({link,name}) => (
                            <li key={name} className='group'>
                                <a href={link}>
                                    <span className='m-2'>{name}</span>
                                    <span className='underline' />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="#contact" className='contact-btn group'>
                    <div className='inner'>
                        <span>Contact me</span>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default NavBar;