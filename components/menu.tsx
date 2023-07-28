import Link from "next/link";
import { useRouter } from "next/router";
import s from "../styles/menu.module.scss";

const NavLinks = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About me", path: "/about-me" },
  { id: 3, title: "Portfolio", path: "/portfolio" },
];

const Menu = () => {
  const router = useRouter();

  return (

    <ul className={s.menu}>
      {NavLinks.map((NavLink) => (
        <li className={s.menu__item} key={NavLink.id}>
          <Link legacyBehavior href={NavLink.path}>
            <a id="link"
              className={
                router.pathname === NavLink.path
                  ? s.menu__link_active
                  : s.menu__link
              }
            >
              {NavLink.title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
