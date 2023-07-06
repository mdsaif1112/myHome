import SocialLogin from '@/components/SocialLogin/SocialLogin';
import { Box, Button, Divider, MenuItem, Modal } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import loginBg from '@/assets/images/couple.jpg'
import { AuthContext } from '@/providers/AuthProvider';
import { LoginContext } from '@/providers/LoginProvider';
import Swal from 'sweetalert2';
import { Photo } from '@mui/icons-material';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';

const Register = () => {

    const { registerOpen, setRegisterOpen, setOpen } = useContext(LoginContext)

    const { signUpWithEmail, updateNameAndPhoto, refresh, setRefresh } = useContext(AuthContext)

    const handleClose = () => setRegisterOpen(false);

    const handleToggle = () => {
        setRegisterOpen(false)
        setOpen(true)
    }

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {
        const name = data.name
        const photo = data.photo
        const email = data.email
        const password = data.password
        const userType = data.userType

        signUpWithEmail(email, password)
            .then(res => {

                updateNameAndPhoto(res.user, name, photo)
                    .then(() => {
                        axios.post('api/users', { name,photo, email, userType })
                            .then(res => {
                                if (res?.data?.insertedId) {
                                    reset()
                                    setRegisterOpen(false)
                                    Swal.fire({
                                        title: 'YAY!',
                                        text: 'Registered Successfully.',
                                        icon: 'success',
                                        confirmButtonText: 'Cool'
                                    })
                                }
                            })
                    })
            })
            .catch(error => console.log(error))
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
                open={registerOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} borderRadius={2} className='w-[90%] xl:w-[750px]' boxSizing={'border-box'}>
                    <div className='flex justify-stretch items-stretch'>
                        <div className='flex-1 h-[650px] hidden xl:flex items-end bg-center rounded-s-md' style={{ backgroundImage: `url(${loginBg.src})` }}>
                            <h2 className='text-white text-3xl ml-10 mb-10'>Welcome to Your Real <br /> Estate Website</h2>
                        </div>
                        <div className='flex-1 relative flex flex-col justify-center h-[650px]'>
                            <FaTimes onClick={() => setRegisterOpen(false)} className='text-[30px] absolute top-5 right-5 xl:top-10 xl:right-10 cursor-pointer' />
                            <h4 className='text-2xl text-center'>Create an account</h4>
                            <div className='px-5 xl:px-10 mt-10'>
                                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-stretch justify-between'>
                                    <input placeholder='Username' className='mb-5 border focus:outline-none p-2' type="text" {...register('name', { required: true })} name="name" id="name-field" />
                                    <input placeholder='Photo URL' className='mb-5 border focus:outline-none p-2' type="text" {...register('photo', { required: true })} name="photo" id="photo-field" />
                                    <input placeholder='Your Email' className='mb-5 border focus:outline-none p-2' type="email" {...register('email', { required: true })} name="email" id="email-field" />
                                    <input placeholder='Your Password' className='mb-5 border focus:outline-none p-2' type="password" {...register('password', { required: true })} name="password" id="password-field" />

                                    <select className='mb-5 border focus:outline-none p-2' {...register("userType", { required: true })}>
                                        <option value="buyer">Buyer</option>
                                        <option value="agent">Agent</option>
                                    </select>

                                    <input type="submit" value="Register" className='mb-5 primary-btn cursor-pointer' style={{ width: '100%' }} />
                                </form>
                                <Divider>OR</Divider>
                                <SocialLogin className={'mt-5'} />
                                <div className='flex justify-between items-center mt-5'>
                                    <span onClick={handleToggle} className='cursor-pointer'>Back to login!</span>
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

export default Register;