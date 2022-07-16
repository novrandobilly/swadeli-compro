import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../assets/Logo.png";
import Flag from "../../assets/flag.png";
import AppStore from "../../assets/app-store.png";
import GooglePlay from "../../assets/google-play.png";
import styles from "./Header.module.scss";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={`${styles.header}`}>
      <Link href="/">
        <Image
          src={Logo}
          width={140}
          height={33}
          className={styles["logo"]}
          alt="logo"
        />
      </Link>
      <nav className={`${styles["navigation"]} ${active ? styles.temp : ""}`}>
        <Link href="/joinus">
          <a>Join us</a>
        </Link>
        <Link href="/faq">
          <a>FAQ</a>
        </Link>
        <Link href="/about">
          <a>About us</a>
        </Link>
        <div className={styles.flag}>
          <span>Language</span>
          <Image src={Flag} width={53} height={51} alt="Flag" />
        </div>
        <div className={styles.download}>
          <Image src={GooglePlay} width={175} height={59} alt="Google Play" />
          <Image src={AppStore} width={175} height={59} alt="AppStore" />
        </div>
      </nav>
      {active ? (
        <CgClose
          className={styles["menu"]}
          onClick={() => setActive(!active)}
        />
      ) : (
        <GiHamburgerMenu
          className={styles["menu"]}
          onClick={() => setActive(!active)}
        />
      )}
    </div>
  );
};

export default Header;
