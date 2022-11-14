import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import AboutMe from '../components/about-me'

const About: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Tetiana Legois</title>
        <meta name="description" content="Profile of Full Stack web developer Tetiana Legois Windsor United Kingdom London React Javascript Next.js Node.js, HTML, CSS . Web aplication Website" />
        <link rel="icon" href="/love_birds.png" />
      </Head>
      <Header />
      <main>
        <AboutMe />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default About
