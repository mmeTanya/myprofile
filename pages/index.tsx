import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import Skills from '../components/skills'
import Hero from '../components/hero'
import Picture from '../components/picture'
import s from "../styles/home.module.scss";

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Tetiana Legois</title>
        <meta name="description" content="Profile of Full Stack developer" />
        <link rel="icon" href="/love_birds.png" />
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Playfair+Display:ital,wght@0,400;1,400;1,700&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/1.1.0/modern-normalize.min.css" />
          </Head>
          <div className={s.overlay}>
            <div className={s.cover_box_1} >
            </div>
            <div className={s.cover_box_2}>
              <Picture />
            </div>
          </div>
          <main>
              <Hero />
              <Skills />
              </main>
          <footer>
            <Footer />
          </footer>
        </div>
        )
}

        export default Home
