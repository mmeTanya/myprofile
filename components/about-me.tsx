import { useState, useEffect } from 'react';
import Link from "next/link";
import Gallery from '../components/gallery'
import s from "../styles/about-me.module.scss";



const AboutMe = () => {
  const [slides, setSlides] = useState([])
  const [info, setInfo] = useState([])


  useEffect(() => {
    loadSlides()
    loadInfo()
  }, []);

  const loadSlides = async () => {
    const response = await fetch('/api/gallery')
    const result = await response.json()
    console.log(result)
    setSlides(result.gallery)
    console.log(slides)
  }
  const loadInfo = async () => {
    const response = await fetch('/api/info')
    const result = await response.json()
    console.log(result)
    setInfo(result.info)
    console.log(info)
  }
  return (

    <section className={s.about}>
      <div className='container'>
        <Gallery slides={slides} />
        <div>
          {info.map(el => (<p key={el._id} className={s.about__text}>{el.info}</p>))}
        </div>
        <p className={s.about__text_link}>For looking my portfolio click <Link legacyBehavior href='/portfolio'>
          <a id="link"
            className={s.about__link}
          >
            here
          </a>
        </Link> </p>
      </div>
    </section>
  );
};

export default AboutMe;
