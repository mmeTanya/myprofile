import Link from "next/link";
import s from "../styles/hero.module.scss";


const Hero = () => {

  return (
    <section className={s.hero}>
      <h1 className={s.hero__title}>
        WELCOME
      </h1>
      <p className={s.hero__text}>to the website of Full Stack Developer Tetiana Legois</p>
      <h2 className={s.hero__title_small}>
        What am I doing ?
      </h2>
      <ul className={s.hero__list}>
        <li className={s.hero__item}>
          <Link legacyBehavior href='/portfolio'>
            <a id="link" className={s.hero__link}> websites </a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href='/portfolio'>
            <a id="link" className={s.hero__link}> web applications </a>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Hero;
