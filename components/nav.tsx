import Link from "next/link";
import { useRouter } from "next/router";
import s from "../styles/header.module.scss";

const NavLinks = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About me", path: "/about-me" },
  { id: 3, title: "Portfolio", path: "/portfolio" },
];

const Nav = () => {
  const router = useRouter();

  return (
    <div className={s.container}>
      <nav className={s.nav}>
        <ul className={s.nav__list}>
          {NavLinks.map((NavLink) => (
            <li className={s.nav__item} key={NavLink.id}>
              <Link legacyBehavior href={NavLink.path}>
                <a id="link"
                  className={
                    router.pathname === NavLink.path
                      ? s.nav_active_link
                      : s.nav__link
                  }
                >
                  {NavLink.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

    </div>
  );
};

export default Nav;
