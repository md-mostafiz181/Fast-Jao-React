import React from 'react';
import "./Navbar.css"
import Container from '../../../components/Container/Container';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navOptions = <>
        <Link to="/"><li ><a>Home</a></li></Link>
        <Link to="/about"><li><a>About</a></li></Link>
        <Link to="/pages"><li><a>Pages</a></li></Link>
        <Link to="/service"><li><a>Services</a></li></Link>
        <li><a>Projects</a></li>
        <li><a>News</a></li>

    </>
    return (
        <div id='navbar-part'>

            <Container >
             <div className="navbar flex justify-between">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content bg-[#FF4800] z-10 px-4 rounded-lg  ">
                                {navOptions}
                        </ul>
                        </div>
                        <a className="lg:text-4xl md:text-3xl sm:text-2xl primaryTextColor  primaryFont font-bold">Red<span className='text-[#FF4800]'>X</span> </a>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                                {navOptions}
                        </ul>
                    </div>

             </div>
            </Container>


        </div>
    );
};

export default Navbar;