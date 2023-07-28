import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import ButtonCircle from "../components/button-circle";
import s from "../styles/header.module.scss";



const NavLinks = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About me", path: "/about-me" },
  { id: 3, title: "Portfolio", path: "/portfolio" },
];

const MobileNav = () => {
  const [isClose, setIsClose] = useState(true);
  const router = useRouter();

  const MenuOpen = () => {
    setIsClose(!isClose);
  };

  return (
    <div className={s.container}>
      <div className={s.style}>
        <ButtonCircle theme={'menu'} type={'button'} onClick={MenuOpen} />
      </div>
      <div className={isClose ? s.isClose : s.menu_container}>
        <div className={s.mobile_menu}>
          <ButtonCircle theme={'close'} type={'button'} onClick={MenuOpen} />
          <ul className={s.mobile_menu__list}>
            {NavLinks.map((NavLink) => (
              <li className={s.mobile_menu__item} key={NavLink.id}>
                <Link legacyBehavior href={NavLink.path}>
                  <a id="link"
                    className={
                      router.pathname === NavLink.path
                        ? s.mobile_link_active
                        : s.mobile_menu__link
                    }
                  >
                    {NavLink.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
