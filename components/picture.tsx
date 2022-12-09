import React from 'react'
import { Roll } from "react-awesome-reveal"
import Hero from '../components/hero'
import Menu from '../components/menu'
import s from "../styles/picture.module.scss";


const Picture = () => {


  return (
    <section  >
      <div className={s.picture}>
        <Roll duration={3000}  triggerOnce={true} className={s.image}>
          <img src="/hero1.jpg" alt="love_birds" width='100%' />
        </Roll>
        <Roll duration={3000} className={s.image} direction={'right'} triggerOnce={true} >
          <img src="/hero2.jpg" alt="love_birds" width='100%'  />
        </Roll>
        <Roll duration={3000}  className={s.image} triggerOnce={true} >
          <img src="/hero3.jpg" alt="love_birds" width='100%' />
        </Roll>
        <Roll duration={3000} className={s.image} direction={'right'} triggerOnce={true}>
          <img src="/hero4.jpg" alt="love_birds" width='100%' />
        </Roll>
        <Roll duration={3000}  className={s.image} triggerOnce={true} >
          <img src="/hero5.jpg" alt="love_birds" width='100%' />
        </Roll>
        <Roll duration={3000}  className={s.image} direction={'right'} triggerOnce={true}>
          <img src="/hero6.jpg" alt="love_birds" width='100%' />
        </Roll>
        <Hero />
      </div>
      <Menu />
    </section>
  );
};

export default Picture;
