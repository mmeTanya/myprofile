import Link from "next/link";
import s from "../styles/footer.module.scss";



const Footer = () => {

  return (
    <footer className={s.page_footer}>
      <div className="container">
        <div className={s.container_union}>
          <div className={s.contact_container}>
            <Link legacyBehavior href="/">
              <a id="link">
                <span ></span>
              </a>
            </Link>
            <address className={s.address}>
              <ul className={s.page_footer__contact_list}>
                <li className={s.page_footer__contact_item}> <a href="https://www.google.co.uk/maps/search/Kyiv,+Lesia+Ukrainka+Ave,+26/@50.440571,30.4690236,13z" className={s.page_footer__location}>Kyiv, 26 Lesia Ukrainka Ave</a> </li>
                <li className={s.page_footer__contact_item}><a href="mailto:info@devstudio.com" className={s.page_footer__contact_link}>info@devstudio.com</a></li>
                <li className={s.page_footer__contact_item}><a href="tel:+380961111111" className={s.page_footer__contact_link}>+38 096 111 11 11</a></li>
              </ul>
            </address>
          </div>
          <div className={s.join_us}>
            <h3 className={s.page_footer__title}>Join us</h3>
            <ul className={s.join_us__social_list}>
              <li className={s.join_us__social_item}>
                <a className={s.join_us__instagram} href="https://www.instagram.com/" />
              </li>
              <li className={s.join_us__social_item}>
                <a className={s.join_us__twitter} href="https://twitter.com/" />
              </li>
              <li className={s.join_us__social_item}>
                <a className={s.join_us__facebook} href="https://www.facebook.com/" />
              </li>
              <li className={s.join_us__social_item}>
                <a className={s.join_us__linkedin} href="https://www.linkedin.com/" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
