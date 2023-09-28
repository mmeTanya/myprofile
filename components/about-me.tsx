import { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { Fade } from "react-awesome-reveal"
import Link from "next/link";
import Loader from '../components/loader'
import s from "../styles/about-me.module.scss";

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const divStyle = {
  whiteSpace: 'break-spaces'
};

const AboutMe = () => {
  const [info, setInfo] = useState([])
  const [status, setStatus] = useState(Status.IDLE);


  useEffect(() => {
    loadInfo()
  }, []);


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
          <div>
            {info && info.map(item => <Fade key={uuidv1()} cascade damping={1} duration={500} className={s.text} style={divStyle} triggerOnce={true}>
              {item.text && item.text.map(el => <p key={uuidv1()} className={s.about__text}>{el.p}</p>
              )}</Fade>)}
            <Fade delay={3000} cascade damping={1e-1} triggerOnce={true} duration={300} style={divStyle} className={s.about__text}>
              I do well-designed websites and web applications allow entrepreneurs to connect
              and engage with prospective customers. Websites and web applications are visually appealing,
              polished and professional. A responsive web design will automatically adjust for different screen sizes and viewports.
              Websites and web applications are connected with databases. Websites are having
              a user-friendly navigation.
            </Fade>
          </div>
          <p className={s.about__text_link}>For looking my portfolio click <Link legacyBehavior href='/portfolio'>
            <a id="link" className={s.about__link}>
              here
            </a>
          </Link></p>
        </div>)
      }
    </section>
  );
};

export default AboutMe;
