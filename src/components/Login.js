import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidate } from '../utils/validate'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from 'firebase/auth';
// auth is the authentication instance for used to access authentication system
import { auth } from '../utils/firebase'
import { bgLoginImage } from '../utils/constants';



const Login = () => {

   

    const [isSignIn, setSignIn] = useState(true)
    const [error, setError] = useState(null)

    const toggleSinUpIn = () => {
        setSignIn(!isSignIn)
    }

    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)


    const handleValidation = async () => {
        let message = null

        message = checkValidate(email.current.value, password.current.value)
        // check passord, email for sign in or sign up.
        // if (!isSignIn) {
        //     message = checkValidate(email.current.value, password.current.value, name.current.name)
        //     console.log(name.current.name)
        // }
        // else {
        //     message = checkValidate(email.current.value, password.current.value)
        // }
        setError(message)


        // Sign Up and sign In logic

        // check for error (if its string error then return)
        if (message) return

        // sign up (Add New User)logic
        if (!isSignIn) {
            try {
                const userCredential =
                    // internally sends request to firebase server
                    await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);

            } catch (error) {
                setError(error.message)
            }
        }
        else {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email.current.value, password.current.value)

            }
            catch (error) {
                setError(error.message)
            }
        }

    }




    return (

        <div className='relative h-screen'>
            <Header />
            <div className='absolute'>
                <img className='brightness-50' src={bgLoginImage}
                    alt='backgoundimg' />
            </div>
            <div className='relative  flex items-center justify-center h-full '>


                {/* Form for signin/signUp  */}
                <form onSubmit={(e) => { e.preventDefault() }} className="bg-black/80 text-white  w-1/4  p-9 rounded-md">
                    <h1 className='text-2xl my-2 font-medium mb-5'>
                        {
                            isSignIn ? "Sign In" : "Sign Up"
                        }
                    </h1>

                    {
                        !isSignIn &&
                        <input ref={name} type="text" className='w-full rounded-sm mb-3 bg-slate-800 p-2 text-sm' placeholder='Full Name' />
                    }


                    <input ref={email} type="text" className='w-full rounded-sm mb-3 bg-slate-800 p-2 text-sm' placeholder='Email' />
                    <input ref={password} type="password" className='w-full rounded-sm mb-3  bg-slate-800 p-2 text-sm' placeholder='Password' />
                    <p className='text-red-500 text-sm' >{error}</p>

                    <button className='w-full p-2 rounded-md text-sm bg-red-700 my-4 hover:bg-red-800  ' onClick={handleValidation} >
                        {
                            isSignIn ? "Sign In" : "Sign Up"

                        }</button>

                    <div className='flex justify-between'>
                        <p className='text-gray-400 text-sm'>Remember me <input type="checkbox" /> </p>
                        <a className='text-gray-400 text-sm'>Need help?</a>
                    </div>

                    <p className='text-gray-400 text-sm my-2 cursor-pointer hover:text-white' onClick={toggleSinUpIn}>
                        {
                            isSignIn ? "New to Netflix-Gpt? Sign Up" : "Already Registered? Sign In "
                        }

                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login