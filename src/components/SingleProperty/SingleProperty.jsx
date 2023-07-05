import theme from '@/app/theme';
import { AuthContext } from '@/providers/AuthProvider';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Typography } from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { FaBath, FaBed, FaExpand, FaHeart, FaMapMarkerAlt, FaRegHeart } from 'react-icons/fa';
import Swal from 'sweetalert2';

const SingleProperty = ({ property }) => {

    const { _id, photos, title, price, description, bedrooms, bathrooms, property_size, featured, listed_in, status, address } = property

    const { user } = useContext(AuthContext)

    const [favorite, setFavorite] = useState(false)

    useEffect(() => {
        if (user) {
            const query = {
                propertyId: _id,
                buyerEmail: user?.email
            }

            axios('https://my-home-khaki-two.vercel.app/api/favorites', {
                params: query
            })
                .then(res => {
                    if (res?.data?.propertyId === _id) {
                        setFavorite(true)
                    }
                })
        }

    }, [user, _id])


    // TODO: Need to make it dynamic
    const img = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'


    // TODO: Need to make it dynamic
    const agent = 'Jubayer'

    const cardStyle = {
        boxShadow: '0 10px 31px 0 rgba(7, 152, 255, 0.09)'
    }

    const addToFavorites = async (id) => {

        if (!user?.email) {
            return
        }

        const favoriteProperty = {
            propertyId: id,
            buyerEmail: user?.email
        }

        const res = await axios.post('https://my-home-khaki-two.vercel.app/api/favorites', favoriteProperty)
        const data = await res.data

        if (data.insertedId) {
            Swal.fire({
                title: 'YAY!',
                text: 'Added Successfully.',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
                .then(() => {
                    setFavorite(true)
                })
        }


    }

    const DeleteFromFavorites = async (id) => {
        const favoriteProperty = {
            propertyId: id,
            buyerEmail: user?.email
        }

        const res = await axios.delete('https://my-home-khaki-two.vercel.app/api/favorites', {
            params: favoriteProperty
        })
        
        const data = await res.data

        if (data.deletedCount) {
            Swal.fire({
                title: 'Done!',
                text: 'Removed From favorites Successfully.',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
                .then(() => {
                    setFavorite(false)
                    console.log('false');
                })
        }
    }

    return (
        <Card className='single-property relative' style={cardStyle}>
            {
                featured && <Typography fontSize={14} component={'span'} className='absolute top-2 left-2 bg-[#69c17dd9] text-white px-[6px] rounded-sm'>
                    Featured
                </Typography>
            }

            <Box className={'flex justify-end items-center gap-2 absolute top-2 right-2'}>
                {
                    listed_in && <Typography fontSize={14} component={'span'} className='bg-[#0073e1d9] text-white px-[6px] rounded-sm'>
                        {listed_in}
                    </Typography>
                }
                {
                    status && <Typography fontSize={14} component={'span'} className='bg-[#0073e1d9] text-white px-[6px] rounded-sm'>
                        {status}
                    </Typography>
                }
            </Box>
            <Link href={'#'}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={photos[0]}
                />
            </Link>
            <CardContent className='px-4 pb-0'>
                {/* TODO: Make link dynamic */}
                <Link href={'#'}>
                    <Typography gutterBottom component={'span'} className='flex justify-start items-center gap-1' variant='body2'>
                        {address.address}, {address.city}
                    </Typography>
                </Link>
                <Link href={'#'}>
                    <Typography gutterBottom variant="h5" component="div" fontSize={20} fontWeight={500}>
                        {title}
                    </Typography>
                </Link>
                <Typography gutterBottom variant="h6" component="div" fontSize={16} fontWeight={500} color={theme.palette.primary.main}>
                    $ {price.toLocaleString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description.split(' ').slice(0, 15).join(' ')}...
                </Typography>
                <Box display={'flex'} justifyContent={'space-between'} component={'div'} className='mt-2'>
                    <Typography variant='body1' fontSize={15} component={'span'}>
                        Bedrooms: {bedrooms}
                    </Typography>
                    <Typography variant='body1' fontSize={15} component={'span'}>
                        Bathrooms: {bathrooms}
                    </Typography>
                    <Typography variant='body1' fontSize={15} component={'span'}>
                        Area: {property_size} ft<sup>2</sup>
                    </Typography>
                </Box>
                <Divider className='pt-4' />
            </CardContent>
            <CardActions style={{ padding: '0px', display: 'block' }}>
                {/* TODO: MAKE agent pic dynamic */}
                <Box component={'div'} padding={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Link href={'#'}>
                        <Box component={'div'} className='flex justify-start items-center gap-2'>
                            <Image src={img} alt='agent' width={30} height={30} className='rounded-full' />
                            <Typography variant='body2' component={'span'}>
                                {agent}
                            </Typography>
                        </Box>
                    </Link>
                    {
                        favorite ?
                            <button onClick={() => DeleteFromFavorites(_id)} className='rounded-sm text-2xl text-[#0073e1]'>
                                <FaHeart />
                            </button>
                            :
                            <button onClick={() => addToFavorites(_id)} className='rounded-sm text-[#c4c4c4] text-2xl hover:text-[#0073e1]'>
                                <FaRegHeart />
                            </button>
                    }
                </Box>
            </CardActions>
        </Card>
    );
};

export default SingleProperty;