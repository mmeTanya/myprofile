import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import Menu from '../components/menu'
import s from "../styles/picture.module.scss";


const Picture = () => {
  const AnimFeTurbulence = animated('feTurbulence')
  const AnimFeDisplacementMap = animated('feDisplacementMap')

  const [open, toggle] = useState(true)
  const [{ freq, factor, scale, opacity }] = useSpring(
    () => ({
      reverse: open,
      from: { factor: 10, opacity: 0, scale: 0.9, freq: '0.0175, 0.0' },
      to: { factor: 150, opacity: 1, scale: 1, freq: '0.0, 0.0' },
      config: { duration: 3000 },
    }),
    [open]
  )

  return (
    <section >
      <div className={s.picture}
        style={{ scale, opacity }}
      >
        
            <AnimFeTurbulence type="fractalNoise" baseFrequency={freq} numOctaves="2" result="TURB" seed="8" />
            <AnimFeDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              in="SourceGraphic"
              in2="TURB"
              result="DISP"
              scale={factor}
            />
          <img src="/hero1.jpg" alt="love_birds" width='50%' className={s.image} />
          <img src="/hero2.jpg" alt="love_birds" width='50%' className={s.image} />
          <img src="/hero3.jpg" alt="love_birds" width='50%' className={s.image} />
          <img src="/hero4.jpg" alt="love_birds" width='50%' className={s.image} />
          <img src="/hero5.jpg" alt="love_birds" width='50%' className={s.image} />
          <img src="/hero6.jpg" alt="love_birds" width='50%' className={s.image} />
       
      </div>
      <Menu />
    </section>
  );
};

export default Picture;
