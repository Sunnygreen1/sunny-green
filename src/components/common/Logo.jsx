import React from 'react'
import { Link } from "react-router-dom";

const Logo = ({ dark }) => {
    return (
        <Link to='/'>
            <img src='/logo.png' className='h-14 object-contain md:h-16' alt='logo' />
        </Link>
    )
}

export default Logo
