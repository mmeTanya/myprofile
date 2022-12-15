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
        <meta name="description" content="Profile of Full Stack web developer Tetiana Legois Windsor United Kingdom London React Javascript Next.js Node.js, HTML, CSS . Web aplication Website" />
        <meta name="google-site-verification" content="sLgvG5I44yqfYMqCGAT3uDW7m3iseCwGCYQwqgEcShc" />
        <link rel="icon" href="/love_birds.png" />
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
