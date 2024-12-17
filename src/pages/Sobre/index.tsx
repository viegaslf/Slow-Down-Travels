import { HeaderSolid } from "../../components/HeaderSolid";
import styles from "./styles.module.css";
import acropole from "../../assets/images/acropole-atenas.jpg";
import giliHoney from "../../assets/images/gili-honeymoon.jpeg";
import monkey from "../../assets/images/macacos-ubud.jpeg";
import milos from "../../assets/images/milos-grecia.jpeg";
import cliffs from "../../assets/images/cliffs-moher.jpeg";
import temple from "../../assets/images/dublin-temple-bar.jpeg";
import london from "../../assets/images/london.jpeg";
import milosBeach from "../../assets/images/milos-beach.jpeg";
import milosCocktail from "../../assets/images/milos-cocktail.jpeg";
import milosDoca from "../../assets/images/milos-doca.jpeg";
import view from "../../assets/images/milos-view.jpeg";
import water from "../../assets/images/milos-water.jpeg";
import nusa from "../../assets/images/nusa-penida.jpeg";
import snorkle from "../../assets/images/snorkle-gili.jpeg";
import turtle from "../../assets/images/tartarugas-gili.jpg";
import terceira from "../../assets/images/terceira.jpeg";
import tirta from "../../assets/images/tirta-empul.jpeg";
import hungaroring from "../../assets/images/hungaroring.jpeg";
import budapeste from "../../assets/images/budapeste.jpeg";
import { useEffect } from "react";
import { Footer } from "../../components/Footer";

export function Sobre() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0); // Reset scroll on page mount
  }, []);
  return (
    <>
      <HeaderSolid />
      <section className={styles.about}>
        <main>
          <div>
            <div className={styles.stickyContent}>
              <h3>Jéssica Viegas</h3>
              <h6>Olhão, Portugal</h6>
              <p>
                Viajar sempre fez parte de mim. Adoro planear itinerários,
                explorar lugares únicos e criar memórias que ficam para a vida.
                Foi este gosto por explorar o mundo e criar experiências que me
                levou a ajudar outras pessoas a descobrirem o mundo de forma
                autêntica e sem preocupações.
              </p>
              <p>
                Cada viagem que organizo é feita à medida, ajustada aos desejos
                e preferências de quem viaja. Para mim, uma viagem não é apenas
                conhecer novos destinos, é uma oportunidade de viver momentos
                únicos, conectar-se com culturas e criar histórias que nos
                transformam.
              </p>

              <p>
                Este projeto nasceu da vontade de criar algo especial: ajudar
                cada pessoa a ter uma experiência de viagem marcante, sem
                complicações e repleta de significado. Seja para uma grande
                aventura, uma escapadinha ou simplesmente uma pausa para
                recarregar energias, o meu objetivo é tornar cada detalhe
                memorável.
              </p>

              <p>
                Porque viajar é descobrir, crescer e guardar momentos que nos
                acompanham para sempre.
              </p>
            </div>
          </div>
          <aside>
            <div className={styles.photoContainer}>
              <img alt="Acrópole Atenas" src={acropole} />
              <p>Acrópole de Atenas, Grécia - 2024</p>
            </div>
            <div className={styles.photoContainer}>
              <img alt="Cliffs of Moher" src={cliffs} />
              <p>Cliffs of Moher, Dublin, Irlanda - 2020</p>
            </div>
            <div className={styles.photoContainer}>
              <img alt="Snorkel Gili" src={snorkle} />
              <p>Snorkel, Gili Trawangan, Lombok - 2023</p>
            </div>
            <div className={styles.photoContainer}>
              <img alt="Hungaroring" src={hungaroring} />
              <p>Formula 1 Hungaroring, Budapeste, Hungria - 2024</p>
            </div>
            <div className={styles.photoContainer}>
              <img alt="Ilha Terceira" src={terceira} />
              <p>Ilha Terceira, Açores, Portugal - 2024</p>
            </div>
            <div className={styles.photoContainer}>
              <img alt="Budapeste" src={budapeste} />
              <p>Budapeste, Hungria - 2024</p>
            </div>

            <div className={styles.photoContainer}>
              <img alt="Milos" src={milosDoca} />
              <p>Milos, Grécia - 2024</p>
            </div>
            <div className={styles.photoContainer}>
              <img alt="Macacos Ubud" src={monkey} />
              <p>Monkey Forest, Bali, Indonésia - 2023</p>
            </div>
            <div className={styles.photoContainer}>
              <img alt="Cocktail" src={milosCocktail} />
              <p>Milos, Grécia - 2024</p>
            </div>
            <div className={styles.photoContainer}>
              <img alt="Londres" src={london} />
              <p>Londres, Inglaterra - 2019</p>
            </div>
            <div className={styles.photoContainer}>
              <img alt="Milos" src={milosBeach} />
              <p>Milos, Grécia - 2024</p>
            </div>
            <div className={styles.photoContainer}>
              <img alt="The Temple Bar" src={temple} />
              <p>The Temple Bar, Dublin, Irlanda - 2020</p>
            </div>
            <div className={styles.photoContainer}>
              <img alt="Nusa Penida" src={nusa} />
              <p>Nusa Penida, Bali - 2023</p>
            </div>
            <div className={styles.photoContainer}>
              <img alt="Honeymoon" src={giliHoney} />
              <p>Gili Trawangan, Lombok, Indonésia - 2023</p>
            </div>
            <div className={styles.photoContainer}>
              <img alt="Milos" src={milos} />
              <p>Milos, Grécia - 2024</p>
            </div>
            <div className={styles.photoContainer}>
              <img alt="Tartarugas" src={turtle} />
              <p>Gili Meno, Lombok, Indonésia - 2023</p>
            </div>
            <div className={styles.photoContainer}>
              <img alt="Milos" src={view} />
              <p>Milos, Grécia - 2024</p>
            </div>
            <div className={styles.photoContainer}>
              <img alt="Tirta Empul" src={tirta} />
              <p>Tirta Empul, Bali, Indonésia - 2023</p>
            </div>
            <div className={styles.photoContainer}>
              <img alt="Milos" src={water} />
              <p>Milos, Grécia - 2024</p>
            </div>
          </aside>
        </main>
      </section>
      <Footer />
    </>
  );
}
