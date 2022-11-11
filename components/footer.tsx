import s from "../styles/footer.module.scss";



const Footer = () => {

  return (
    <footer className={s.page_footer}>
      <div className="container">
        <div className={s.container_union}>
          <div className={s.contact_container}>
            <h2 className={s.page_footer__title}>Tetiana Legois</h2>
              <ul className={s.page_footer__contact_list}>
                <li className={s.page_footer__contact_item}> <a href="https://goo.gl/maps/F8HtsvvBLD5XEcSb9" className={s.page_footer__contact_link}>Windsor, Berkshire, UK</a> </li>
                <li className={s.page_footer__contact_item}><a href="mme.tanyalegois@gmail.com" className={s.page_footer__contact_link}>mme.tanyalegois@gmail.com</a></li>
                <li className={s.page_footer__contact_item}><a href="+447493546287" className={s.page_footer__contact_link}>+44 7493 546 287</a></li>
              </ul>
          </div>
          <div className={s.join_us}>
            <h3 className={s.page_footer__title}>Join me</h3>
            <ul className={s.join_us__social_list}>
              <li className={s.join_us__social_item}>
                <a className={s.join_us__instagram} href="https://www.instagram.com/mme.tania/" />
              </li>
              <li className={s.join_us__social_item}>
                <a className={s.join_us__github} href="https://github.com/mmeTanya" />
              </li>
              <li className={s.join_us__social_item}>
                <a className={s.join_us__linkedin} href="https://www.linkedin.com/in/tetiana-legois-a17469203/" />
              </li>
              <li className={s.join_us__social_item}>
                <a className={s.join_us__facebook} href="https://www.facebook.com/tanyaivanovn" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
