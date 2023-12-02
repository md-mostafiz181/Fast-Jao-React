import React, { useContext, useEffect, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import "./Login.css"
import Container from '../Container/Container';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';


const Login = () => {



    const auth=getAuth(app)
    const provider =new GoogleAuthProvider();
    

    const {signIn}=useContext(AuthContext)
    const navigate=useNavigate()

    const handleLogin=event=>{
        event.preventDefault();

        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password)

        signIn(email,password)
        .then(result =>{
            const loggedUser=result.user;
            console.log(loggedUser)
            form.reset();
            navigate("/")

            Swal.fire({
                position: "center",
                icon: "success",
                title: "User login successfully",
                showConfirmButton: false,
                timer: 1500
              });


           
        })
        .catch(error=>{
            console.log(error)
        })
        
    }

    const handleGoogleSignIn = ()=>{
        signInWithPopup(auth,provider)
        .then(result =>{
            const user =result.user;
            console.log(user)
            navigate("/")
        })
        .catch(error=>{
            console.log("error", error.message)
        })

    }


    return (
        <div id='login-part'>
            <Container>
                <div >
                    <div  className="login-box">
                        <h1 className='lg:text-4xl md:text-2xl sm:text-2xl font-bold primaryFont primaryTextColor text-center pt-4'>Login</h1>
                        <form onSubmit={handleLogin}>
                            <input className='focus:outline-none' type="text" name="name" id="name" placeholder='Name...' />

                            <input  className='focus:outline-none' type="email" name="email" id="email" placeholder='Email...' />

                            <input  className='focus:outline-none' type="password" name="password" id="password" placeholder='Password' />

                           <input className='btn-login focus:outline-none' type="submit" value="Login" />

                           
                        </form>

                        <hr />

                        <button onClick={handleGoogleSignIn} className='btn-google'>
                            <div className='flex justify-center items-center'>
                               <FcGoogle className='icon' />
                            </div>
                        </button>

                        <h4 className='ps-3 mt-2 font-bold primaryFont primaryTextcolor'>Are you new in RedX?<Link to="/signUp" className='secondaryTextColor'> SignUp</Link> </h4>

                        
                    </div>
                    

                    
                </div>
            </Container>
            
        </div>
    );
};

export default Login;