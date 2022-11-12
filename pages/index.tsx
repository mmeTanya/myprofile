import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import Skills from '../components/skills'
import Order from '../components/make-order'
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
          </Head>
          <div className={s.overlay}>
            <div className={s.cover_box_1} >
            </div>
            <div className={s.cover_box_2}>
              <Picture />
              <Hero />
            </div>
          </div>
          <main>
            <div className={s.overlay_2}>
               <img src="/leave.png" alt="leave" className={s.overlay_2__image}/>
              <Skills />
              <Order />
              </div>
              </main>
          <footer>
            <Footer />
          </footer>
        </div>
        )
}

        export default Home
