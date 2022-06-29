import React from "react";
import Image from "next/image";
import Logo from "../../assets/Logo.png";
import styless from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styless["header"]}>
      <div>
        <Image src={Logo} className={styless["logo"]} width={264} height={55} />
      </div>
      <nav className={styless["navigation"]}>
        <a>Join us</a>
        <a>FAQ</a>
        <a>About us</a>
      </nav>
    </div>
  );
};

export default Header;
