"use client"

import Register from '@/app/(pages)/(register)/Register';
import { Login } from '@mui/icons-material';
import React, { createContext, useState } from 'react';

export const LoginContext = createContext(null)

const LoginProvider = ({ children }) => {

    const [open, setOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false)

    const loginValue = {
        open,
        setOpen,
        registerOpen,
        setRegisterOpen
    }

    return (
        <LoginContext.Provider value={loginValue}>
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;