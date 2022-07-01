import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../assets/Logo.png";
import styles from "./Header.module.scss";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const hamburger = () => {
  active ? (
    <CgClose className={styles["menu"]} onClick={() => setActive(!active)} />
  ) : (
    <GiHamburgerMenu
      className={styles["menu"]}
      onClick={() => setActive(!active)}
    />
  );
};
const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={`${styles.header}`}>
      <Image src={Logo} width={140} height={33} className={styles["logo"]} />
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
