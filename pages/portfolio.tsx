import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Projects from '../components/projects'

const Portfolio: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Tetiana Legois</title>
        <meta name="description" content="Profile of Full Stack developer" />
        <link rel="icon" href="/love_birds.png" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Playfair+Display:ital,wght@0,400;1,400;1,700&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/1.1.0/modern-normalize.min.css" />
      </Head>
      <Header />
      <main>
        <Projects />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Portfolio
