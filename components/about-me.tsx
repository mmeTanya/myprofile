import { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import Link from "next/link";
import Gallery from '../components/gallery'
import Loader from '../components/loader'
import s from "../styles/about-me.module.scss";

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const AboutMe = () => {
  const [slides, setSlides] = useState([])
  const [info, setInfo] = useState([])
  const [status, setStatus] = useState(Status.IDLE);


  useEffect(() => {
    loadSlides()
    loadInfo()
  }, []);

  const loadSlides = async () => {
    const response = await fetch('/api/gallery')
    setStatus(Status.PENDING)
    const result = await response.json()
    setSlides(result.gallery)
    setStatus(Status.RESOLVED)
  }
  const loadInfo = async () => {
    const response = await fetch('/api/info')
    setStatus(Status.PENDING)
    const result = await response.json()
    setInfo(result.info)
    setStatus(Status.RESOLVED)
  }

  return (
    <section className={s.about}>
      {status === Status.PENDING && <Loader />}
      {status === Status.RESOLVED &&
        (<div className='container'>
          <Gallery slides={slides} />
          <div>
          {info && info.map(item => <div key={uuidv1()}>
            {item.text && item.text.map(el => <p key={uuidv1()} className={s.about__text}>{el.p}</p>
            )}</div>)}
          </div>
          <p className={s.about__text_link}>For looking my portfolio click <Link legacyBehavior href='/portfolio'>
            <a id="link" className={s.about__link}>
              here
            </a>
          </Link></p>
        </div>)}
    </section>
  );
};

export default AboutMe;
