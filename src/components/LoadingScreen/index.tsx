import styles from "./styles.module.css";
import LoadingIcons from "react-loading-icons";

export function LoadingScreen() {
  return (
    <div className={styles.loadingBackground}>
      <LoadingIcons.Oval strokeWidth={4} />
      <h4>A encontrar destinos incríveis...</h4>
    </div>
  );
}
