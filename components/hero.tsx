import Link from "next/link";
import Roll from 'react-reveal/Roll';
import LightSpeed from 'react-reveal/LightSpeed';
import s from "../styles/hero.module.scss";


const Hero = () => {

  return (
    <section className={s.hero}>
      <Roll left delay={6000}>
      <h1 className={s.hero__title} >WELCOME
      </h1>
      </Roll>
      <Roll left delay={7000}>
      <p className={s.hero__text}>to the website of Full Stack Developer Tetiana Legois</p>
      </Roll>
      <LightSpeed left delay={8000}>
      <h2 className={s.hero__title_small}>
        What am I doing ?
      </h2>
      </LightSpeed>
      <ul className={s.hero__list}>
      <LightSpeed left delay={9000}>
        <li className={s.hero__item}>
          <Link legacyBehavior href='/portfolio'>
            <a id="link" className={s.hero__link}> websites </a>
          </Link>
        </li>
        </LightSpeed>
        <LightSpeed left delay={10000}>
        <li>
          <Link legacyBehavior href='/portfolio'>
            <a id="link" className={s.hero__link}> web applications </a>
          </Link>
        </li>
        </LightSpeed>
      </ul>
    </section>
  );
};

export default Hero;
