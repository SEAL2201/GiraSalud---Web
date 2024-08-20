import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillFacebook,
  AiFillInstagram,
  AiTwotonePhone,
  AiTwotoneMail,
  AiTwotoneEnvironment,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import styles from "./NavBar.module.css";
import { useScrollPosition } from "../Hooks/scrollPosition";
import logo from "../assets/logo1.jpeg";

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectDimension);
    return () => {
      window.removeEventListener("resize", detectDimension);
    };
  }, []);

  const links = [
    { id: 1, link: "Inicio" },
    { id: 2, link: "Servicios" },
    { id: 3, link: "Nosotros" },
    { id: 4, link: "Semillero" },
  ];

  const scrollPosition = useScrollPosition();

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.topBar}>
        <div className={styles.socialIcons}>
          <a
            href="https://www.facebook.com/profile.php?id=100066695102480"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialButton}
          >
            <AiFillFacebook size={30} />
          </a>
          <a
            href="https://www.instagram.com/girasalud_ec/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialButton}
          >
            <AiFillInstagram size={30} />
          </a>
          <a
            href="https://www.tiktok.com/@girasaludec"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialButton}
          >
            <FaTiktok size={30} />
          </a>
        </div>
        <div className={styles.contactInfo}>
          <AiTwotonePhone size={20} />
          <span>0960120939</span>
          <AiTwotoneMail size={20} />
          <span>GiraSalud@gmail.com</span>
          <AiTwotoneEnvironment size={20} />
          <span>C. Belisario Quevedo 4-43, Latacunga 050104</span>
        </div>
      </div>
      <div
        className={
          navBarOpen
            ? styles.navOpen
            : scrollPosition > 0
            ? styles.navOnScroll
            : styles.navBar
        }
      >
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        {!navBarOpen && windowDimension.width < 800 ? (
          <AiOutlineMenu
            color="#000"
            onClick={() => setNavBarOpen(!navBarOpen)}
            size={25}
          />
        ) : (
          windowDimension.width < 800 && (
            <AiOutlineClose
              onClick={() => setNavBarOpen(!navBarOpen)}
              color="#000"
              size={25}
            />
          )
        )}
        {navBarOpen && (
          <ul className={styles.linksContainer}>
            {links.map(({ id, link }) => (
              <div key={id}>
                <Link
                  onClick={() => setNavBarOpen(false)}
                  to={link}
                  smooth
                  duration={500}
                  className={styles.navLink}
                >
                  <button className={styles.navButton}>{link}</button>
                </Link>
                <div className={styles.border}></div>
              </div>
            ))}
          </ul>
        )}
        {windowDimension.width > 800 && (
          <>
            <ul className={styles.linksContainer}>
              {links.map(({ link, id }) => (
                <div key={id}>
                  <Link
                    onClick={() => setNavBarOpen(false)}
                    to={link}
                    smooth
                    duration={500}
                    className={styles.navLink}
                  >
                    <button className={styles.navButton}>{link}</button>
                  </Link>
                  <div className={styles.border}></div>
                </div>
              ))}
            </ul>
            <div className={styles.contactLinkContainer}>
              <Link
                onClick={() => setNavBarOpen(false)}
                to="Contact"
                smooth
                duration={500}
                className={styles.contactLink}
              >
                <button className={styles.contactButton}>Contáctanos</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
