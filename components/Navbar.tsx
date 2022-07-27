import React from 'react'
import { Link, Toolbar, Typography } from '@mui/material'
import landing from '../styles/landing.module.scss'
import NextLink from 'next/link'

const Navbar = () => {
    return (
        <div className={landing.appBar}>
            <Toolbar className={landing.toolbar}>
                <NextLink href='/about' passHref>
                    <Link>
                        <Typography>About</Typography>
                    </Link>
                </NextLink>
                <NextLink href='/work' passHref>
                    <Link>
                        <Typography>Work</Typography>
                    </Link>
                </NextLink>
                <NextLink href='/contact' passHref>
                    <Link>
                        <Typography>Contact</Typography>
                    </Link>
                </NextLink>
                <div className={landing.grow}></div>
                <NextLink href='/contact' passHref>
                    <Link>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="white" />
                        </svg>
                    </Link>
                </NextLink>
            </Toolbar>
        </div>
    )
}

export default Navbar