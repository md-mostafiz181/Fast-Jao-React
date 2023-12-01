import React from 'react';
import { FcGoogle } from "react-icons/fc";
import "./Login.css"
import Container from '../Container/Container';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div id='login-part'>
            <Container>
                <div >
                    <div className="login-box">
                        <h1 className='lg:text-4xl md:text-2xl sm:text-2xl font-bold primaryFont primaryTextColor text-center pt-4'>Please Login</h1>
                        <form action="">
                            <input className='focus:outline-none' type="text" name="name" id="name" placeholder='Name...' />

                            <input  className='focus:outline-none' type="email" name="email" id="email" placeholder='Email...' />

                            <input  className='focus:outline-none' type="password" name="password" id="password" placeholder='Password' />

                            <button className='btn-login'>Login</button>
                        </form>

                        <hr />

                        <button className='btn-google'>
                            <div className='flex justify-center items-center'>
                               <FcGoogle className='icon' />
                            </div>
                        </button>

                        <h4 className='ps-3 mt-2 font-bold primaryFont primaryTextcolor'>Are you new in RedX?<Link className='secondaryTextColor'> SignIn</Link> </h4>

                        
                    </div>
                    

                    
                </div>
            </Container>
            
        </div>
    );
};

export default Login;