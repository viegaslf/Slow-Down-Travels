import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Viagem } from "../../@types/Viagem";
import { AirplaneTilt, Info } from "@phosphor-icons/react";

type CardProps = {
  viagem: Viagem;
};

export function DestinoCard(props: CardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.topWrapper}>
        <img src={props.viagem.url} />
        <span className={styles.airport}>
          <AirplaneTilt size={12} weight="fill" /> {props.viagem.airport}
        </span>
      </div>
      <div className={styles.midWrapper}>
        <h4>{props.viagem.name}</h4>
        <span className={styles.country}>{props.viagem.country}</span>
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.priceContainer}>
          <h4>{props.viagem.price}€</h4>
          <span className={styles.porPessoa}>por pessoa</span>
        </div>
        <Link
          target="_blank"
          to={props.viagem.link}
          className={styles.infoButton}
        >
          <Info />
          <span className={styles.maisInfo}>mais info</span>
        </Link>
      </div>
    </div>
  );
}
