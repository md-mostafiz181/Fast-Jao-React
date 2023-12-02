import React, { useContext, useState } from 'react';
import Container from '../Container/Container';
import "./SignUp.css"
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const SignUp = () => {

    const [error,setError]=useState("")
    const {createUser}=useContext(AuthContext)

    const navigate=useNavigate()


    const handleSignUp = event =>{
        event.preventDefault();
        const form =event.target;
        const name =form.name.value;
        const email =form.email.value;
        const password=form.password.value;
        const confirm =form.confirm.value
        const photo =form.photo.value;

        console.log(name,email,password,photo,confirm)

        setError("")

        if(password !==confirm){
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Your password didn't match",
                
              });
            
        }
        else if(password.length < 6){
            
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must be 6 characters",
                
              });
        }

        createUser(email,password)
        .then(result =>{
            const loggedUser=result.user;
            console.log(loggedUser)
            form.reset();
            Swal.fire({
                position: "center",
                icon: "success",
                title: "User signUp successfully",
                showConfirmButton: false,
                timer: 1500
              });
            navigate("/login");

        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
        })
    }

    const auth=getAuth(app)
    const provider =new GoogleAuthProvider();



    const handleGoogleSignUp = ()=>{

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
        <div id='signUp-part'>
            <Container>

                <div>
                <div className="signUp-box">
                        <h1 className='lg:text-4xl md:text-2xl sm:text-2xl font-bold primaryFont primaryTextColor text-center pt-4'> Sign Up</h1>
                        <form onSubmit={handleSignUp}>
                            <input className='focus:outline-none' type="text" name="name" id="name" placeholder='Name...' />

                            <input  className='focus:outline-none' type="email" name="email" id="email" placeholder='Email...' />

                            <input  className='focus:outline-none' type="password" name="password" id="password" placeholder='Password' />

                            <input  className='focus:outline-none' type="password" name="confirm" id="confirm" placeholder='Confirm Password' />

                            <input className='focus:outline-none' type="text" name="photo" id="photo" placeholder='Photo' />

                            <input className='btn-signUp border-none' type="submit" value="Sign Up" />



                            {/* <button >Sign Up</button> */}
                        </form>

                        <hr />

                        <button onClick={handleGoogleSignUp} className='btn-google'>
                            <div className='flex justify-center items-center'>
                               <FcGoogle className='icon' />
                            </div>
                        </button>

                        <h4 className='ps-3 mt-2 font-bold primaryFont primaryTextcolor'>Do you have already an account?<Link to="/login" className='secondaryTextColor'> Login</Link> </h4>

                        {/* <p className='text-error'>{error}</p> */}

                        
                    </div>
                </div>

            </Container>
            
        </div>
    );
};

export default SignUp;