import React, { useContext } from 'react';
import { FaLocationArrow } from "react-icons/fa";
import "./Header.css"
import Container from '../../../components/Container/Container';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../components/providers/AuthProvider';

const Header = () => {

    const {user,logOut}=useContext(AuthContext)

    const handleLogout = ()=>{
        logOut()
        .then(result=>{})
        .catch(error => console.log(error))
    }
    return (
        <div id='header-part' className='primaryBg'>
            <Container>
                <div className="header-container flex justify-between flex-col md:flex-row">
                    <div className="header-left flex mt-3">
                        <div className='mt-1 mr-2 text-white'>
                           < FaLocationArrow /> 
                        </div>
                        
                        <h3 className='secondaryFont font-normal text-white flex'> info@fastjao.com</h3>
                    </div>

                            <div className="header-right ">
                            {
                                !user && (
                                <div>
                                    <Link to="/login">
                                    <button className='btn-login primaryFont font-bold rounded-lg text-[#FF4800] '>Login</button>
                                    </Link>
                                </div>
                                )
                            }

                            {
                                user && (
                                <button onClick={handleLogout} className='btn-login primaryFont font-bold rounded-lg text-[#FF4800] ms-2'>
                                    Logout
                                </button>
                                )
                            }
                            </div>


                </div>
            </Container>
            
            
        </div>
    );
};

export default Header;