import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import AboutMe from '../components/about-me'
import Skills from '../components/skills'
import Order from '../components/make-order'

import s from "../styles/home.module.scss";

const About: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Tetiana Legois</title>
        <meta name="description" content="Profile of Full Stack web developer Tetiana Legois Windsor United Kingdom London React Javascript Next.js Node.js, HTML, CSS . Web aplication Website" />
        <meta name="google-site-verification" content="sLgvG5I44yqfYMqCGAT3uDW7m3iseCwGCYQwqgEcShc" />
        <link rel="icon" href="/love_birds.png" />
      </Head>
      <Header />
      <main>
      <div className={s.overlay_2}>
          <img src="/leave.png" alt="leave" className={s.overlay_2__image} />
          <Skills />
        </div>
        <AboutMe />
        <Order />
        
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default About
