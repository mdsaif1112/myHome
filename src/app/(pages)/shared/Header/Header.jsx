'use client'

import theme from '@/app/theme';
import { Button, ButtonGroup, Drawer, Stack, SwipeableDrawer, ThemeProvider } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { FaBars, FaFacebookF, FaFoursquare, FaHeart, FaInstagram, FaLinkedinIn, FaPinterestP, FaRegEnvelope, FaTimes, FaTwitter, FaUserCircle, FaVimeoV, FaWhatsapp, FaYoutube } from "react-icons/fa";
import logoWhite from '@/assets/images/logo-40-white.png'
import logo from '@/assets/images/logo-agent-40.png'
import ActiveLink from '@/components/ActiveLink/ActiveLink';
import Login from '../../(login)/Login';
import Register from '../../(register)/Register';
import { LoginContext } from '@/providers/LoginProvider';
import { AuthContext } from '@/providers/AuthProvider';
import { usePathname, useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const { setOpen } = useContext(LoginContext)

    const [leftDrawer, setLeftDrawer] = useState(false)
    const [rightDrawer, setRightDrawer] = useState(false)

    const [scrolled, setScrolled] = useState(0)

    const pathname = usePathname()

    const otherPage = pathname !== '/'

    const router = useRouter()

    useEffect(() => {

        let scrolledY = window.scrollY
        setScrolled(scrolledY)

        window.addEventListener('scroll', () => {
            scrolledY = window.scrollY
            setScrolled(scrolledY)
        })
    }, [])

    const toggleLeftDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setLeftDrawer(open);
    };

    const toggleRightDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setRightDrawer(open);
    };


    const menu = (
        <>
            <li>
                <ActiveLink className='header-li' href={'/'}>
                    Home
                </ActiveLink>
            </li>
            <li>
                <ActiveLink className='header-li' href={'/properties'}>
                    Properties
                </ActiveLink>
            </li>
            <li>
                <ActiveLink className='header-li' href={'/about'}>
                    About Us
                </ActiveLink>
            </li>
            <li>
                <ActiveLink className='header-li' href={'/contact'}>
                    Contact Us
                </ActiveLink>
            </li>

            {/* TODO: Should be dynamic */}
            <li>
                <ActiveLink className='header-li' href={'/dashboard'}>
                    Dashboard
                </ActiveLink>
            </li>
        </>
    )


    const closeLeftDrawer = (e) => {
        if (e.target.classList[0] === 'header-li') {
            setLeftDrawer(false)
        }
    }

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'YAY!',
                    text: 'Logged out Successfully.',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <Login />
            <header className={`${scrolled ? 'xl:top-[-42px]' : ''} w-full duration-200 header sticky xl:-mb-[126px] top-0 left-0 bg-[#001a33] xl:bg-transparent z-50 `}>
                <div className="header-container">
                    <div className={`border-b border-[#ffffff34]`}>
                        <div className={`${otherPage ? 'bg-[#001A33] px-10' : 'my-container'} header-top hidden xl:flex justify-between items-center `}>
                            <div>
                                <ButtonGroup variant="text" aria-label="text button group" className='header-btn-grp rounded-none'>
                                    <Button color='white'>
                                        <Link href={'#'}><FaFacebookF /></Link>
                                    </Button>
                                    <Button color='white'>
                                        <Link href={'#'}><FaTwitter /></Link>
                                    </Button>
                                    <Button color='white'>
                                        <Link href={'#'}><FaLinkedinIn /></Link>
                                    </Button>
                                    <Button color='white'>
                                        <Link href={'#'}><FaPinterestP /></Link>
                                    </Button>
                                    <Button color='white'>
                                        <Link href={'#'}><FaYoutube /></Link>
                                    </Button>
                                    <Button color='white'>
                                        <Link href={'#'}><FaVimeoV /></Link>
                                    </Button>
                                    <Button color='white'>
                                        <Link href={'#'}><FaInstagram /></Link>
                                    </Button>
                                    <Button color='white'>
                                        <Link href={'#'}><FaFoursquare /></Link>
                                    </Button>
                                </ButtonGroup>
                            </div>
                            <div>
                                <ButtonGroup variant="text" aria-label="text button group" className='header-btn-grp rounded-none'>
                                    <Button onClick={() => router.push('/favorites')} className='flex gap-2 justify-between items-center' color='white'>
                                        <FaHeart /> <span className='capitalize'>Favorites</span>
                                    </Button>
                                    <Button className='flex gap-2 justify-between items-center' color='white'>
                                        <FaRegEnvelope /> <span className='lowercase'>contact@gmail.com</span>
                                    </Button>
                                    <Button className='flex gap-2 justify-between items-center' color='white'>
                                        <FaWhatsapp /> <span className='lowercase'>+1 408 167 1234</span>
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                    <div className={`${((scrolled > 100) || otherPage) ? 'header-scrolled' : ''}`}>
                        <div className={`${otherPage ? 'px-10' : 'my-container'} header-bottom py-5 grid grid-cols-12 justify-between items-center`}>
                            <div className='col-span-3'>
                                <Link href={'/'} className='hidden xl:block'>
                                    <Image src={((scrolled > 100) || otherPage) ? logo.src : logoWhite.src} alt='' loading='lazy' width={120} height={0} />
                                </Link>
                                <FaBars onClick={toggleLeftDrawer(true)} className={`${scrolled > 100 ? 'text-black' : 'text-white'} text-[30px] cursor-pointer xl:hidden`} />
                            </div>
                            <div className='col-span-6'>
                                <Link href={'/'} className='xl:hidden flex justify-center items-center'>
                                    <Image src={scrolled > 100 ? logo.src : logoWhite.src} alt='' loading='lazy' width={120} height={0} />
                                </Link>
                                <ul className='header-ul hidden xl:flex justify-center items-center gap-2 text-white'>
                                    {menu}
                                </ul>
                            </div>
                            <div className='col-span-3 flex justify-end items-center gap-0'>

                                <Stack spacing={2} direction="row" alignItems='center'>
                                    {
                                        user?.photoURL ?
                                            <>
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img onClick={handleLogout} src={user.photoURL} alt='profile pic' className={`rounded-full hidden xl:block cursor-pointer w-[40px] h-[40px]`} />

                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img onClick={handleLogout} src={user.photoURL} alt='profile pic' className={`w-[30px] h-[30px] xl:hidden  cursor-pointer rounded-full `} />
                                            </>
                                            :
                                            <>
                                                <FaUserCircle onClick={() => setOpen(true)} className={`text-[30px] hidden xl:block xl:text-[40px] cursor-pointer ${scrolled > 100 ? 'text-[#0073e1]' : 'text-white'}`} />

                                                <FaUserCircle onClick={() => setOpen(true)} className={`text-[30px] xl:hidden xl:text-[40px] cursor-pointer ${scrolled > 100 ? 'text-[#0073e1]' : 'text-white'}`} />
                                            </>
                                    }
                                    <button className='primary-btn hidden xl:block'>Add Property</button>
                                </Stack>
                            </div>
                        </div>
                    </div>
                </div>

            </header>

            {/* Left Drawer */}
            <Drawer
                anchor={'left'}
                open={leftDrawer}
                onClose={toggleLeftDrawer(false)}
            >
                <div className='menu-drawer h-full w-screen bg-black p-5 '>
                    <div className='w-full flex justify-end mb-5'>
                        <FaTimes onClick={toggleLeftDrawer(false)} className='text-white text-[20px]' />
                    </div>
                    <button className='primary-btn mb-5 w-full'>Add Property</button>
                    <ul onClick={closeLeftDrawer} className='text-white flex justify-start items-stretch flex-col w-full gap-8'>
                        {menu}
                    </ul>
                </div>
            </Drawer>


            {/* Right Drawer */}
            <Drawer
                anchor={'right'}
                open={rightDrawer}
                onClose={toggleRightDrawer(false)}
            >
                <div className='bg-black w-full p-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure modi aut repellendus ipsum ipsa voluptatibus consectetur perspiciatis, labore illum sequi corrupti, quod minus, placeat ad obcaecati! Laborum dolorum, obcaecati nam nihil amet in recusandae esse quaerat facilis maxime. Doloribus, facilis?
                    <button onClick={toggleRightDrawer(false)} className='text-white'>Close</button>
                </div>
            </Drawer>
        </>
    );
};

export default Header;