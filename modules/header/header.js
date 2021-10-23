import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import LogoImg from "../../assets/logo.png";

const Header = () => {
  return (
    <header className={styles.main}>
      <main>
        <div>Logo</div>
        <Image src={LogoImg} alt="logo" />
        <nav className={styles.navigation}>
          <li>Home</li>
          <li>About Us</li>
          <li>Showcase</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Sign In</li>
        </nav>
      </main>
    </header>
  );
};

export default Header;
