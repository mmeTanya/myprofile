import Link from "next/link";
import { JackInTheBox, Rotate } from "react-awesome-reveal"
import s from "../styles/hero.module.scss";


const Hero = () => {

  return (
    <section className={s.hero}>
      <Rotate delay={1500} className={s.hero__title_cover} triggerOnce={true}>
        <h1 className={s.hero__title} >WELCOME
        </h1>
      </Rotate>
      <Rotate delay={2000} className={s.hero__text_cover} triggerOnce={true}>
        <p className={s.hero__text} >to the website of Full Stack Developer Tetiana Legois</p>
      </Rotate>
      <JackInTheBox delay={2500} className={s.hero__title_small_cover} triggerOnce={true}>
        <h2 className={s.hero__title_small}>
          What am I doing ?
        </h2>
      </JackInTheBox>
      <ul className={s.hero__list}>
        <JackInTheBox delay={3000} className={s.hero__item_cover} triggerOnce={true}>
          <li className={s.hero__item}>
            <Link legacyBehavior href='/portfolio'>
              <a id="link" className={s.hero__link} > websites </a>
            </Link>
          </li>
        </JackInTheBox>
        <JackInTheBox delay={3500} className={s.hero__item_cover} triggerOnce={true}>
          <li className={s.hero__item}>
            <Link legacyBehavior href='/portfolio'>
              <a id="link" className={s.hero__link}> web applications </a>
            </Link>
          </li>
        </JackInTheBox>
      </ul>
    </section>
  );
};

export default Hero;
