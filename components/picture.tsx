import React, { useState } from 'react'

import Fade from 'react-reveal/Fade';
import Menu from '../components/menu'
import s from "../styles/picture.module.scss";


const Picture = () => {


  return (
    <section >
      <div className={s.picture}>
      <Fade left duration={1000} delay={1000}>
          <img src="/hero1.jpg" alt="love_birds" width='50%' className={s.image} />
          </Fade>
          <Fade left duration={1000}>
          <img src="/hero2.jpg" alt="love_birds" width='50%' className={s.image} />
          </Fade>
          <Fade left duration={1000} delay={3000}>
          <img src="/hero3.jpg" alt="love_birds" width='50%' className={s.image} />
          </Fade>
          <Fade left duration={1000} delay={2000}>
          <img src="/hero4.jpg" alt="love_birds" width='50%' className={s.image} />
          </Fade>
          <Fade left duration={1000} delay={5000}>
          <img src="/hero5.jpg" alt="love_birds" width='50%' className={s.image} />
          </Fade>
          <Fade left duration={1000} delay={4000}>
          <img src="/hero6.jpg" alt="love_birds" width='50%' className={s.image} />
          </Fade>
      </div>
      <Menu />
    </section>
  );
};

export default Picture;
