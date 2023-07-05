import { Box, Button, Divider, Modal, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import loginBg from '@/assets/images/couple.jpg'
import { useForm } from 'react-hook-form';
import SocialLogin from '@/components/SocialLogin/SocialLogin';
import { LoginContext } from '@/providers/LoginProvider';
import { AuthContext } from '@/providers/AuthProvider';
import Swal from 'sweetalert2';
import { FaTimes } from 'react-icons/fa';

const Login = () => {

    const { loginWithEmail } = useContext(AuthContext)

    const { open, setOpen, setRegisterOpen } = useContext(LoginContext)

    const handleClose = () => setOpen(false);

    const handleToggle = () => {
        setOpen(false)
        setRegisterOpen(true)
    }

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        const email = data.email
        const password = data.password

        loginWithEmail(email, password)
            .then(res => {
                reset()
                setOpen(false)
                Swal.fire({
                    title: 'YAY!',
                    text: 'Logged in Successfully.',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: 650,
        bgcolor: 'background.paper',
        boxShadow: 24,
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='w-[90%] xl:w-[750px]' borderRadius={2} boxSizing={'border-box'}>
                    <div className='flex justify-stretch items-stretch'>
                        <div className='flex-1 h-[650px] hidden xl:flex items-end bg-center rounded-s-md' style={{ backgroundImage: `url(${loginBg.src})` }}>
                            <h2 className='text-white text-3xl ml-10 mb-10'>Welcome to Your Real <br /> Estate Website</h2>
                        </div>
                        <div className='flex-1 relative flex flex-col justify-center h-[550px] xl:h-[650px]'>
                            <FaTimes onClick={() => setOpen(false)} className='text-[30px] absolute top-5 right-5 xl:top-10 xl:right-10 cursor-pointer' />
                            <h4 className='text-2xl text-center'>Sign into your account</h4>
                            <div className='px-5 xl:px-10 xl:mt-20 mt-10'>
                                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-stretch justify-between'>
                                    <input placeholder='Your Email' className='mb-5 border focus:outline-none p-2' type="email" {...register('email', { required: true })} name="email" id="email-field" />
                                    <input placeholder='Your Password' className='mb-5 border focus:outline-none p-2' type="password" {...register('password', { required: true })} name="password" id="password-field" />
                                    <input type="submit" value="Login" className='mb-5 primary-btn' style={{ width: '100%' }} />
                                </form>
                                <Divider>OR</Divider>
                                <SocialLogin className={'mt-5'} />
                                <div className='flex justify-between items-center mt-5'>
                                    <span onClick={handleToggle} className='cursor-pointer'>Register here!</span>
                                    <span className='cursor-pointer'>Forgot Password?</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default Login;