import styles from "./styles.module.css";
import logoWhite from "../../assets/logo/white.svg";
import logoBlue from "../../assets/logo/blue.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [logo, setLogo] = useState(logoWhite);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
      setLogo(logoBlue);
    } else {
      setScrolling(false);
      setLogo(logoWhite);
    }
  };

  return (
    <header>
      <nav className={scrolling ? styles.navbarScrolled : styles.navbar}>
        <div className={styles.navbarContainer}>
          <Link to="/">
            <img src={logo} alt="Logótipo Branco - Slow Down Travels" />
          </Link>

          <ul className={styles.navbarItems}>
            <li>
              <Link to="/sobre-mim">Sobre mim</Link>
            </li>
            <li>
              <Link to="/torna-te-consultor">Torna-te consultor</Link>
            </li>
          </ul>
          <Link
            to="https://web.whatsapp.com/send/?phone=%2B351916576923&app=facebook&entry_point=page_cta&fbclid=IwY2xjawF-aNZleHRuA2FlbQIxMAABHdaqB0pUCdBNZdHDNVet2rEXl8DKE0ABOy-mbQQYkKjyKIztCaPNMHbINA_aem_3y5ODy-IOGroQ4gECHt3bg"
            target="_blank"
            className={styles.navbarCTA}
          >
            Pedir orçamento
          </Link>
        </div>
      </nav>
    </header>
  );
}
