import React, { ReactNode } from "react";
import NextLink from 'next/link'
import Head from "next/head";
import { AppBar, Link, Toolbar, Typography } from '@mui/material'
import landing from '../styles/landing.module.scss'
import Navbar from './Navbar'
import Footer from "./Footer";
interface Props {
    children?: ReactNode
    title?: ReactNode
}
export default function Layout({ children, title }: Props) {
    return (
        <div>
            <Head>
                <link rel="icon" href="./images/iconTab.ico" />

                <title>{title ? `Landing / ${title}` : 'Landing'}</title>
            </Head>
            <AppBar className={landing.head_appBar}>
                <Navbar />
            </AppBar>
            <main className={landing.main}>
                {children}
            </main>
            <footer className={landing.footer}>
                <Footer />
            </footer>
        </div >
    )
}

