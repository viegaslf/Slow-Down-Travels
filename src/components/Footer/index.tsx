import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

export function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <main>
        <p>Copyrights © {currentYear} Slow Down Travels</p>
        <div className={styles.socialButtons}>
          <Link
            to="https://www.instagram.com/slowdown.travels/"
            target="_blank"
          >
            <InstagramLogo />
          </Link>
          <Link
            to="https://www.facebook.com/profile.php?id=61561567433241"
            target="_blank"
          >
            <FacebookLogo />
          </Link>
          <Link
            to="https://web.whatsapp.com/send/?phone=%2B351916576923&app=facebook&entry_point=page_cta&fbclid=IwY2xjawF-aNZleHRuA2FlbQIxMAABHdaqB0pUCdBNZdHDNVet2rEXl8DKE0ABOy-mbQQYkKjyKIztCaPNMHbINA_aem_3y5ODy-IOGroQ4gECHt3bg"
            target="_blank"
          >
            <WhatsappLogo />
          </Link>
        </div>
      </main>
    </footer>
  );
}
