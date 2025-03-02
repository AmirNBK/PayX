import React from 'react';
import wallet from '../assets/wallet.svg'
import Input from "../components/common/input.jsx";

const Login = () => {
    return (
        <div className='flex flex-col items-center w-full bg-[#DAD9D9] h-screen justify-between'>
            <div className='flex flex-col w-full'>
                <div className='bg-[#3F63F6] flex flex-col items-start w-full p-6'>
                    <div className='bg-white rounded-xl flex flex-col items-center justify-center p-2'>
                        <img src={wallet} alt='wallet'/>
                    </div>

                    <div className='mt-6 flex flex-col gap-2'>
                                    <span className='text-white text-2xl'>
                    Welcome Back!
                </span>

                        <p className={'text-white text-base'}>
                            Don’t have an account? <span className='text-[#99E86C]'>
                        Create Account
                    </span>
                        </p>
                    </div>
                </div>


                <div className='flex flex-col gap-6 mt-6 w-full px-6'>
                    <Input placeholder={'Enter your email address'} type='email'/>
                    <Input placeholder={'Password'} type='password'/>
                </div>
            </div>


            <div className='flex flex-col'>
                <span className='text-[#3F63F6] text-base'>
                    Forgot Password?
                </span>
            </div>
        </div>
    );
};

export default Login;