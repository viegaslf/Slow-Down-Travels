import {
  CaretDown,
  ClipboardText,
  CreditCard,
  Envelope,
  Gift,
  MagnifyingGlass,
  Path,
  Users,
  X,
} from "@phosphor-icons/react";
import styles from "./styles.module.css";
import { Header } from "../../components/Header";
import { DestinoCard } from "../../components/Destino Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { client } from "../../contentful/client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";

export function Home() {
  const [loading, setLoading] = useState(true);
  const [viagens, setViagens] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const fetchData = async () => {
      try {
        const entries = await client.getEntries({ content_type: "viagem" });
        setViagens(entries.items);
        console.log(viagens);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [loading]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const filteredViagens = Array.isArray(viagens)
    ? viagens.filter((item) => {
        const searchTermLower = searchTerm.toLowerCase();
        const nameLower = item.fields.name.toLowerCase();
        const countryLower = item.fields.country.toLowerCase();

        return (
          nameLower.includes(searchTermLower) ||
          countryLower.includes(searchTermLower)
        );
      })
    : [];

  const displayedViagens = showAll
    ? filteredViagens
    : filteredViagens.slice(0, 8);

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <Header />
      <section className={styles.heroSection}>
        <img
          src="https://images.unsplash.com/photo-1558005530-a7958896ec60?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Bali Rice Terraces"
        />
        <div className={styles.imgOverlay}></div>

        <div className={styles.headingContainer}>
          <h1>Encontra o próximo destino para explorar a beleza do mundo</h1>
          <h3>Luas de mel e viagens personalizadas no Sudeste Asiático</h3>
          <div className={styles.verticalLine}></div>
          <a href="#destinos" className={styles.heroLink}>
            ver todos os destinos
          </a>
        </div>
        <a href="#destinos">
          <CaretDown weight="thin" />
        </a>
      </section>
      <section id="destinos" className={styles.destinosSection}>
        <main>
          <div className={styles.titleContainer}>
            <h2>Todos os destinos</h2>
            <div className={styles.inputContainer}>
              <MagnifyingGlass />
              <input
                type="text"
                placeholder="Procura o teu destino"
                value={searchTerm}
                onChange={handleInputChange}
              />
              <button className={styles.deleteText} onClick={handleClearSearch}>
                <X />
              </button>
            </div>
          </div>
          <div className={styles.cardsContainer}>
            {filteredViagens.length === 0 ? (
              <p className={styles.noResultsMessage}>
                Não encontrámos nenhum destino para{" "}
                <span className={styles.searchTermText}>{searchTerm}</span>.
              </p>
            ) : (
              displayedViagens.map((item, index) => {
                return (
                  <DestinoCard
                    key={index}
                    viagem={{
                      airport: item.fields.airport,
                      name: item.fields.name,
                      country: item.fields.country,
                      url: item.fields.url,
                      price: item.fields.price,
                      link: item.fields.link,
                    }}
                  />
                );
              })
            )}
          </div>
          <div className={styles.buttonContainer}>
            {!showAll && filteredViagens.length > 8 && (
              <button
                className={styles.showAllButton}
                onClick={() => setShowAll(true)}
              >
                Ver todos
              </button>
            )}
          </div>
        </main>
      </section>
      <section className={styles.viagensSection}>
        <main>
          <div className={styles.leftCol}>
            <h2>Viagens personalizadas</h2>
            <p>
              Viaje à sua medida com a Slow Down Travels. <br />
              Adaptamos cada detalhe conforme as suas necessidades, gostos e
              orçamento. Desde a escolha da melhor data aos destinos mais
              autênticos, oferecemos recomendações e dicas para que a sua
              experiência seja verdadeiramente memorável.
            </p>
            <div className={styles.categoriesContainer}>
              <div className={styles.categoryContainer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                >
                  <path d="M324.002,87.834L347,72.499c6.383-4.258,10.522-11.145,11.273-18.782c0.759-7.629-1.954-15.198-7.373-20.625l-25.6-25.6    C320.503,2.697,313.993,0,307.2,0H204.8c-6.792,0-13.303,2.697-18.099,7.501l-25.6,25.6c-5.427,5.427-8.132,12.996-7.373,20.625    c0.751,7.629,4.89,14.524,11.273,18.782l22.997,15.334C101.248,116.471,38.4,198.17,38.4,294.4C38.4,414.387,136.013,512,256,512    s217.6-97.613,217.6-217.6C473.6,198.17,410.752,116.471,324.002,87.834z M316.245,34.654L332.8,51.2l-42.795,28.527    c-5.521-0.87-11.093-1.596-16.725-2.108L316.245,34.654z M289.101,25.6L256,58.701L222.899,25.6H289.101z M179.2,51.2    l16.546-16.546l42.965,42.965c-5.632,0.512-11.204,1.237-16.725,2.108L179.2,51.2z M256,486.4c-106.035,0-192-85.965-192-192    s85.965-192,192-192s192,85.965,192,192S362.035,486.4,256,486.4z" />
                </svg>
                <h6>Luas de mel</h6>
              </div>
              <div className={styles.categoryContainer}>
                <Users weight="bold" />
                <h6>Escapadinhas a dois</h6>
              </div>
              <div className={styles.categoryContainer}>
                <Path weight="bold" />
                <h6>Circuitos</h6>
              </div>
              <div className={styles.categoryContainer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill-rule="nonzero"
                      d="M18.5 2a4.5 4.5 0 0 1 .883 8.913l.011.027a8 8 0 0 1-7.145 11.056L12 22a8 8 0 0 1-7.382-11.088A4.499 4.499 0 0 1 5.5 2a4.5 4.5 0 0 1 4.493 4.254l.073-.019A8.018 8.018 0 0 1 12 6l.25.004a8 8 0 0 1 1.756.25A4.5 4.5 0 0 1 18.5 2zM12 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM5.5 4a2.5 2.5 0 0 0 0 5l.164-.005.103-.01A8.044 8.044 0 0 1 7.594 7.32l.33-.206A2.5 2.5 0 0 0 5.5 4zm13 0a2.5 2.5 0 0 0-2.466 2.916l.043.2.028.016a8.04 8.04 0 0 1 2.128 1.852A2.5 2.5 0 1 0 18.5 4z"
                    />
                  </g>
                </svg>
                <h6>Disneyland</h6>
              </div>
              <div className={styles.categoryContainer}>
                <Gift weight="bold" />
                <h6>Mercados de natal</h6>
              </div>
            </div>
            <div>
              <Link to="/contacto" className={styles.buttonCTA}>
                Pedir orçamento
              </Link>
            </div>
          </div>
          <div className={styles.rightCol}>
            <img
              alt="Fotografia em Khlong Sok, Tailândia"
              src="https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </main>
      </section>
      <section className={styles.etapasSection}>
        <main>
          <div className={styles.titleContainer}>
            <h2>Como ter a viagem dos seus sonhos?</h2>
          </div>
          <div className={styles.etapasContainer}>
            <div className={styles.etapa}>
              <ClipboardText />
              <h4>Preencha o formulário</h4>
              <p>
                Partilhe as suas preferências de destinos, orçamento e datas
                disponíveis no nosso{" "}
                <a
                  href="https://forms.gle/GKQ25a7jKKkH6omT9"
                  target="_blank"
                  className={styles.formLink}
                >
                  formulário
                </a>{" "}
                de forma simples e rápida.
              </p>
            </div>
            <div className={styles.etapa}>
              <Envelope />
              <h4>Explore o plano ao detalhe</h4>
              <p>
                Receba uma proposta completa com opções de estadia, voos,
                transfers e atividades, tudo adaptado ao que procura.
              </p>
            </div>
            <div className={styles.etapa}>
              <CreditCard />
              <h4>Reserve de forma segura</h4>
              <p>
                Confirme a sua reserva através de plataforma segura e
                certificada, com a opção de pagamento faseado.
              </p>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
}
