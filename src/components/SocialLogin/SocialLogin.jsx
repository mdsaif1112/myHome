import { AuthContext } from '@/providers/AuthProvider';
import { LoginContext } from '@/providers/LoginProvider';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const SocialLogin = ({ className }) => {

    const { setOpen, setRegisterOpen } = useContext(LoginContext)
    const { googleLogin } = useContext(AuthContext)

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                setOpen(false)
                setRegisterOpen(false)

                Swal.fire({
                    title: 'YAY!',
                    text: 'Logged In Successfully.',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className={`${className}`}>
            <button onClick={handleGoogleLogin} className='bg-[#ed5565] hover:bg-black duration-300 text-base py-2 px-5 text-white capitalize font-semibold rounded-sm flex justify-center items-center gap-2' style={{ width: '100%' }}>
                Sign Up With Google
            </button>
        </div>
    );
};

export default SocialLogin;