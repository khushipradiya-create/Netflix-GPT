import React, { useState } from 'react'
import Header from './Header'


const Login = () => {

    const [isSignIn, setSignIn] = useState(true)

    const toggleSinUpIn = () => {
        setSignIn(!isSignIn)
    }


    return (

        <div className='relative h-screen'>
            <Header />
            <div className='absolute'>
                <img className=" brightness-50  " src="https://assets.nflxext.com/ffe/siteui/vlv3/5efeb1fd-55d2-4799-8d38-e59e15858b9c/web/IN-en-20260427-TRIFECTA-perspective_0933b420-0cb6-4e67-8e9d-3224dc64b517_large.jpg"
                    alt='backgoundimg' />
            </div>
            <div className='relative  flex items-center justify-center h-full '>
                <form className="bg-black/70 text-white  w-1/4 p-9 rounded-md">
                    <h1 className='text-2xl my-2 font-medium mb-5'>
                        {
                            isSignIn ? "Sign In" : "Sign Up"
                        }
                    </h1>

                    {
                        !isSignIn &&
                        <input type="text" className='w-full rounded-sm mb-3 bg-slate-800 p-2 text-sm' placeholder='Full Name' />
                    }

                    <input type="text" className='w-full rounded-sm mb-3 bg-slate-800 p-2 text-sm' placeholder='Email' />
                    <input type="password" className='w-full rounded-sm mb-3  bg-slate-800 p-2 text-sm' placeholder='Password' />

                    <button className='w-full p-2 rounded-md text-sm bg-red-700 my-6 hover:bg-red-800 ' >{
                        isSignIn ? "Sign In" : "Sign Up"    
    
                    }</button>

                    <div className='flex justify-between'>
                        <p className='text-gray-400 text-sm'>Remember me <input type="checkbox" /> </p>
                        <a className='text-gray-400 text-sm'>Need help?</a>
                    </div>

                    <p className='text-gray-400 text-sm my-4 cursor-pointer hover:text-white' onClick={toggleSinUpIn}>
                        {
                            isSignIn ? "New to Netflix-Gpt? Sign Up" : "Already Registered? Sign In "
                        } </p>
                </form>
            </div>
        </div>
    )
}

export default Login