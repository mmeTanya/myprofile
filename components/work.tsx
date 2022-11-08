import Image from 'next/image'
import s from "../styles/work.module.scss";

const works = [
  { id: 1, title: 'Desktop applications', picture: '/desktop.jpg', alt: 'desktop' },
  { id: 2, title: 'Mobile applications', picture: '/mobile.jpg', alt: 'mobile' },
  { id: 3, title: 'Design solutions', picture: '/design.jpg', alt: 'design' }
]

const Work = () => {

  return (
    <section className={s.work}>
      <div className="container">
        <h2 className={s.work__title}>What are we doing</h2>
        <ul className={s.work__list}>
          {works.map(work =>
          (
            <li className={s.work__item} key={work.id}>
              <Image src={work.picture} alt={work.alt}
                width={370} height={294} className={s.work__image} />
              <div className={s.work__overlay}>
                <p className={s.work__name}>{work.title}</p>
              </div>
            </li>
          )
          )}
        </ul>
      </div>
    </section>
  );
};

export default Work;
