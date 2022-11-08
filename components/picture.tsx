import Menu from '../components/menu'
import s from "../styles/picture.module.scss";


const Picture = () => {

  return (
    <section >
      <div className={s.picture}>
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
