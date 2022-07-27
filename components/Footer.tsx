import React from 'react'
import { Grid, Typography, TextField, Button } from '@mui/material'
import landing from '../styles/landing.module.scss'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={landing.footer_container}>
            <Typography className={landing.content_text_36px}>
                Want to chat about your brand or marketing challenge?
                Talk to Julie on +61 438 266 782 or via email.
            </Typography>
            <div className={landing.footer_contact}>
                <Grid container spacing={1} className={landing.footer_contact_container}>
                    <Grid item md={2} xs={12} className={landing.footer_contact_item}>
                        <Image src="/images/logo.png" alt="Picture of the author" width={100} height={100} layout="responsive" />
                    </Grid>
                    <Grid item md={6} xs={12} className={landing.footer_contact_item}>
                        <Typography>
                            Level 3, 162 Collins Street
                        </Typography>
                        <Typography>
                            Melbourne VIC 3000
                        </Typography>
                        <Typography>
                            <a href="tel:+61438266782">+61 438 266 782</a>
                        </Typography>
                        <Typography>
                            © Studio Hoopla 2022
                            <span>  </span>
                            Privacy Policy
                        </Typography>
                    </Grid>
                    <Grid item md={4} xs={12} className={landing.footer_contact_item}>
                        <TextField id="standard-basic" label="Stay in the Hoopla loop by entering your email" fullWidth variant="standard" color="success" />
                        <Button variant="contained">Submit</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer