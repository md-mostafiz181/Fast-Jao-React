import React from 'react';
import { FaLocationArrow } from "react-icons/fa";
import "./Header.css"
import Container from '../../../components/Container/Container';

const Header = () => {
    return (
        <div id='header-part' className='primaryBg'>
            <Container>
                <div className="header-container flex justify-between">
                    <div className="header-left flex mt-3">
                        <div className='mt-1 mr-2 text-white'>
                           < FaLocationArrow /> 
                        </div>
                        
                        <h3 className='secondaryFont font-normal text-white flex'> info@fastjao.com</h3>
                    </div>
                    <div className="header-right">
                        <button className='btn-login primaryFont font-normal rounded-lg text-[#FF4800]'>Login</button>
                    </div>
                </div>
            </Container>
            
            
        </div>
    );
};

export default Header;