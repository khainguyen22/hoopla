import type { NextPage } from 'next'
import Layout from '../components/Layout'
import NextLink from 'next/link'
import Image from "next/image"
import { Container, Grid, Link, Typography, ListItemText, List, Button } from '@mui/material'
import landing from '../styles/landing.module.scss'

const Home: NextPage = () => {
    return (
        <Layout title="Landing - Order">
            <div className={landing.head_content}>
                <Typography className={landing.content_text_36px}>
                    We get it. You`re done with explaining the nuances
                    of your industry to design agencies. That`s why
                    you`ll love working with us. We`re a financial services
                    creative agency that partners with super funds, banks,
                    investment firms, financial consultancies and more.
                </Typography>
                <NextLink href='/' passHref>
                    <Link>
                        <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0661 12.6331L10.3336 18.3669V0.566895H7.66613V18.3669L1.93365 12.6331L0.0661621 14.5006L8.99992 23.4331L17.9337 14.5006L16.0661 12.6331Z" fill="white" />
                        </svg>
                    </Link>
                </NextLink>
            </div>
            <Grid container spacing={1} className={landing.banner_container_wrap_images}>
                <Grid item md={4} xs={12} className={landing.banner_image_items}>
                    <Image src="/images/Rectangle-11.png" alt="Picture of the author" width={480} height={688} layout="responsive" />
                </Grid>
                <Grid item md={4} xs={12} className={landing.banner_image_items}>
                    <Grid container spacing={1} className={landing.banner_container_images}>
                        <Grid item md={12} xs={6} className={landing.banner_image_item}>
                            <Image src="/images/Rectangle-10.png" alt="Picture of the author" width={480} height={340} layout="responsive" />
                        </Grid>
                        <Grid item md={12} xs={6} className={landing.banner_image_item}>
                            <Image src="/images/Rectangle-9.png" alt="Picture of the author" width={480} height={340} layout="responsive" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={4} xs={12} className={landing.banner_image_items}>
                    <Grid container spacing={1} className={landing.banner_container_images}>
                        <Grid item md={12} xs={6} className={landing.banner_image_item}>
                            <Image src="/images/Rectangle-6.png" alt="Picture of the author" width={480} height={340} layout="responsive" />

                        </Grid>
                        <Grid item md={12} xs={6} className={landing.banner_image_item}>
                            <Image src="/images/Rectangle-7.png" alt="Picture of the author" width={480} height={340} layout="responsive" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <div className={landing.secssion_3}>
                <Container className={landing.secssion_3_container}>
                    <Typography className={landing.content_text_36px}>
                        We`ll be invested in your brand beyond the brief. We`ll listen.
                        Understand your audience and add value. You can bank on it.
                    </Typography>
                    <Grid container spacing={1} className={landing.grid_container}>
                        <Grid item md={3} xs={12} className={landing.grid_item}>
                            <Image src="/images/Studio-Hoopla-expert-1.png" alt="Picture of the author" width={124} height={104} layout="responsive" />
                            <h4 className={landing.content_text_18px}>Execution expertly handled</h4>
                            <Typography>
                                Creative responses that rigorously answer your brief, and are meticulously executed across all touchpoints — print, digital, campaign and motion.
                            </Typography> </Grid>
                        <Grid item md={3} xs={12} className={landing.grid_item}>
                            <Image src="/images/Studio-Hoopla-expert-2.png" alt="Picture of the author" width={96} height={98} layout="responsive" />
                            <h4 className={landing.content_text_18px}>Beautifully on-brand</h4>
                            <Typography>
                                We breathe new life into brands by innovating elements that are working, creating anything that`s missing, and saying goodbye to what`s holding it back.
                            </Typography></Grid>
                        <Grid item md={3} xs={12} className={landing.grid_item} >
                            <Image src="/images/Studio-Hoopla-expert-3.png" alt="Pictu re of the author" width={116} height={98} layout="responsive" />
                            <h4 className={landing.content_text_18px}>Bang for your budget</h4>
                            <Typography>
                                n experienced, all-senior team, our streamlined approach means we can offer a lean rate card. Enjoy the big agency quality, without the big agency rates.
                            </Typography></Grid>
                        <Grid item md={3} xs={12} className={landing.grid_item} >
                            <Image src="/images/Studio-Hoopla-expert-4.png" alt="Picture of the author" width={94} height={94} layout="responsive" />
                            <h4 className={landing.content_text_18px}>Part of the team</h4>
                            <Typography>
                                Collaborate with the same creative team day-in day-out. A dedicated account manager will drive your projects, leaving you with more time to focus on the big picture.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className={landing.secssion_4} >
            </div>
            <div className={landing.secssion_5}>
                <Container className={landing.secssion_5_container}>
                    <Typography className={landing.content_text_36px}>
                        “In the first workshop, we quickly set the direction for our values,
                        creative style, and language.This set a strong foundation for the
                        work, and we`re thrilled with our new identity.”
                    </Typography>
                    <div>
                        <Typography>
                            Justin McCamish & John McKeever
                        </Typography>
                        <Typography>
                            Co-Founders & Directors at Data Migrators
                        </Typography>
                    </div>
                    <Button variant="contained">See the case study</Button>
                </Container>
            </div>
            <div className={landing.secssion_6}>
                <Container className={landing.secssion_6_container}>
                    <Container className={landing.secssion_6_container_top}>
                        <Typography className={landing.content_text_36px}>
                            “In the first wsorkshop, we quickly set the direction for our values,
                            creative style, and language.This set a strong foundation for the
                            work, and we`re thrilled with our new identity.”
                        </Typography>
                        <div className={landing.secssion_6_wrap_img}>
                            <div className={landing.secssion_6_img}>
                                <Image src="/images/Screen-1.png" alt="Picture of the author" width={500} height={500} />
                            </div>
                            <div className={landing.secssion_6_img}>
                                <Image src="/images/Screen-2.png" alt="Picture of the author" width={500} height={500} />
                            </div>
                            <div className={landing.secssion_6_img}>
                                <Image src="/images/Screen-5.png" alt="Picture of the author" width={500} height={500} />
                            </div>
                            <div className={landing.secssion_6_img}>
                                <Image src="/images/Screen-6.png" alt="Picture of the author" width={500} height={500} />
                            </div>
                            <div className={landing.secssion_6_img}>
                                <Image src="/images/Screen-9.png" alt="Picture of the author" width={500} height={500} />
                            </div>
                            <div className={landing.secssion_6_img}>
                                <Image src="/images/Screen-10.png" alt="Picture of the author" width={500} height={500} />
                            </div>
                            <div className={landing.secssion_6_img}>
                                <Image src="/images/Screen-8.png" alt="Picture of the author" width={500} height={500} />
                            </div>
                            <div className={landing.secssion_6_img}>
                                <Image src="/images/Screen-4.png" alt="Picture of the author" width={500} height={500} />
                            </div>
                            <div className={landing.secssion_6_img}>
                                <Image src="/images/Screen-7.png" alt="Picture of the author" width={500} height={500} />
                            </div>
                            <div className={landing.secssion_6_img}>
                                <Image src="/images/Screen-3.png" alt="Picture of the author" width={500} height={500} />
                            </div>
                        </div>
                    </Container>
                    <Container className={landing.secssion_6_container_bottom}>
                        <Typography className={landing.content_text_36px}>
                            We`re a full service design agency whose currency is building brands.
                        </Typography>
                        <Grid container spacing={1} className={landing.grid_container}>
                            <Grid item md={6} xs={12} className={landing.grid_item}>
                                <List className={landing.grid_list}>
                                    <ListItemText className={landing.list_item}>
                                        Brand Identity & Development
                                    </ListItemText>
                                    <ListItemText className={landing.list_item}>
                                        Campaign & Copywriting
                                    </ListItemText>
                                    <ListItemText className={landing.list_item}>
                                        Internal Communications
                                    </ListItemText>
                                    <ListItemText className={landing.list_item}>
                                        Illustration & Infographic
                                    </ListItemText>
                                    <ListItemText className={landing.list_item}>
                                        Collateral
                                    </ListItemText>
                                </List>
                            </Grid>
                            <Grid item md={6} xs={12} className={landing.grid_item}>

                                <List className={landing.grid_list}>
                                    <ListItemText className={landing.list_item}>
                                        Publication & Print Production
                                    </ListItemText>
                                    <ListItemText className={landing.list_item}>
                                        Website & Digital Assets
                                    </ListItemText>
                                    <ListItemText className={landing.list_item}>
                                        Photography
                                    </ListItemText>
                                    <ListItemText className={landing.list_item}>
                                        Event & Environmental
                                    </ListItemText>
                                    <ListItemText className={landing.list_item}>
                                        Motion
                                    </ListItemText>
                                </List>
                            </Grid>
                        </Grid>
                    </Container>
                </Container>
            </div>
        </Layout>
    )
}

export default Home
