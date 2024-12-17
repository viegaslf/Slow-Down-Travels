import { PopupButton } from "react-calendly";
import { Header } from "../../components/Header";
import styles from "./styles.module.css";
import turtles from "../../assets/images/tartarugas-gili.jpg";
import {
  ChartLineUp,
  Clock,
  FolderOpen,
  GraduationCap,
  Handshake,
  MapPin,
  SealCheck,
  Wallet,
} from "@phosphor-icons/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { Youtube } from "../../components/Youtube";
import { Accordion } from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { Faq } from "../../components/Faq";
import { useEffect } from "react";
import { Footer } from "../../components/Footer";

export function Consultor() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0); // Reset scroll on page mount
  }, []);

  function SampleNextArrow(props) {
    const { onClick, style } = props;
    return (
      <div style={{ ...style }} onClick={onClick}>
        <CaretRight />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick, style } = props;
    return (
      <div style={{ ...style }} onClick={onClick}>
        <CaretLeft />
      </div>
    );
  }

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <Header />
      <section className={styles.heroSection}>
        <main>
          <img
            alt="Barcos na Tailândia"
            src="https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className={styles.imgOverlay}></div>
          <div className={styles.infoContainer}>
            <h1>Ganha dinheiro com as tuas viagens!</h1>
            <div className={styles.secInfoContainer}>
              <h6>Adoras viajar e queres mais liberdade? </h6>
              <h6>
                Descobre como rentabilizar a tua paixão e gerar
                <br />
                um rendimento extra sem abdicar do teu tempo.
              </h6>
            </div>
          </div>
          <div className={styles.buttonsContainer}>
            <PopupButton
              url="https://calendly.com/slowdown-viagens/torna-te-um-consultor-de-viagens"
              /*
               * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
               * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
               */
              rootElement={document.getElementById("root")}
              text="Assiste a um webinar"
            />
            <a
              href="https://web.whatsapp.com/send/?phone=%2B351916576923&app=facebook&entry_point=page_cta&fbclid=IwY2xjawF-aNZleHRuA2FlbQIxMAABHdaqB0pUCdBNZdHDNVet2rEXl8DKE0ABOy-mbQQYkKjyKIztCaPNMHbINA_aem_3y5ODy-IOGroQ4gECHt3bg"
              target="_blank"
            >
              Torna-te consultor
            </a>
          </div>
        </main>
      </section>
      <section className={styles.secondSection}>
        <main>
          <div className={styles.leftCol}>
            <p>
              Alguma vez sentiste que por mais que te esforces, o teu desempenho
              não é reconhecido e o teu salário nunca muda?
            </p>

            <p>
              Dia após dia parece que o trabalho ocupa todo o teu tempo e que
              precisas de mais horas no teu dia?
            </p>
            <p>
              Tens uma paixão que não consegues seguir e os teus sonhos parecem
              distantes, pois sentes que te faltam as ferramentas ou a
              orientação para os concretizar?
            </p>
            <div>
              <a
                href="https://web.whatsapp.com/send/?phone=%2B351916576923&app=facebook&entry_point=page_cta&fbclid=IwY2xjawF-aNZleHRuA2FlbQIxMAABHdaqB0pUCdBNZdHDNVet2rEXl8DKE0ABOy-mbQQYkKjyKIztCaPNMHbINA_aem_3y5ODy-IOGroQ4gECHt3bg"
                target="_blank"
              >
                Fala comigo
              </a>
            </div>
          </div>
          <div className={styles.rightCol}>
            <div className={styles.imgContainer}>
              <img alt="Jéssica Viegas" src={turtles} />
              <div className={styles.imgOverlay}></div>
              <h4>
                Já estive no teu lugar, e sei como tudo isso pode mudar com o
                acompanhamento certo!
              </h4>
              <p>
                <span className={styles.bold}>Nadar com tartarugas</span>
                <br />
                Gili Trawangan, Indonésia, 2023
              </p>
            </div>
          </div>
        </main>
      </section>
      <section className={styles.beneficiosSection}>
        <main>
          <div className={styles.titleContainer}>
            <h2>Que benefícios vais ter?</h2>
          </div>
          <div className={styles.gridContainer}>
            <div className={styles.beneficioContainer}>
              <div className={styles.iconContainer}>
                <Clock />
              </div>

              <div className={styles.contentContainer}>
                <h6>Mais tempo para ti</h6>
                <p>À medida da tua disponibilidade, em part ou full time</p>
              </div>
            </div>

            <div className={styles.beneficioContainer}>
              <div className={styles.iconContainer}>
                <MapPin />
              </div>

              <div className={styles.contentContainer}>
                <h6>Trabalha onde quiseres</h6>
                <p>Em qualquer parte do mundo com acesso à internet</p>
              </div>
            </div>
            <div className={styles.beneficioContainer}>
              <div className={styles.iconContainer}>
                <Handshake />
              </div>

              <div className={styles.contentContainer}>
                <h6>Parceiros exclusivos</h6>
                <p>
                  Acede a parceiros turísticos reservados a agências de viagens
                </p>
              </div>
            </div>
            <div className={styles.beneficioContainer}>
              <div className={styles.iconContainer}>
                <Wallet />
              </div>

              <div className={styles.contentContainer}>
                <h6>Sem despesas fixas</h6>
                <p>
                  Apenas investimento inicial para compra de licença vitalícia
                </p>
              </div>
            </div>
            <div className={styles.beneficioContainer}>
              <div className={styles.iconContainer}>
                <ChartLineUp />
              </div>

              <div className={styles.contentContainer}>
                <h6>Valor que mereces</h6>
                <p className={styles.p16}>
                  Ganha dinheiro em função da tua performance
                </p>
              </div>
            </div>
            <div className={styles.beneficioContainer}>
              <div className={styles.iconContainer}>
                <SealCheck />
              </div>

              <div className={styles.contentContainer}>
                <h6>Licença comercial</h6>
                <p className={styles.p16}>
                  Vende todos os serviços turísticos de forma legal
                </p>
              </div>
            </div>
            <div className={styles.beneficioContainer}>
              <div className={styles.iconContainer}>
                <GraduationCap />
              </div>

              <div className={styles.contentContainer}>
                <h6>Formações exclusivas</h6>
                <p>Suporte da comunidade e escola digital com ferramentas</p>
              </div>
            </div>
            <div className={styles.beneficioContainer}>
              <div className={styles.iconContainer}>
                <FolderOpen />
              </div>

              <div className={styles.contentContainer}>
                <h6>Back-office avançado</h6>
                <p>Gere as tuas reservas, comissões e clientes na plataforma</p>
              </div>
            </div>
          </div>
          <div className={styles.buttonsContainer}>
            <PopupButton
              url="https://calendly.com/slowdown-viagens/torna-te-um-consultor-de-viagens"
              /*
               * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
               * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
               */
              rootElement={document.getElementById("root")}
              text="Assiste a um webinar"
            />
            <a
              href="https://web.whatsapp.com/send/?phone=%2B351916576923&app=facebook&entry_point=page_cta&fbclid=IwY2xjawF-aNZleHRuA2FlbQIxMAABHdaqB0pUCdBNZdHDNVet2rEXl8DKE0ABOy-mbQQYkKjyKIztCaPNMHbINA_aem_3y5ODy-IOGroQ4gECHt3bg"
              target="_blank"
            >
              Torna-te consultor
            </a>
          </div>
        </main>
      </section>
      <section className={styles.videosSection}>
        <main>
          <div className={styles.titleContainer}>
            <h2>
              O que eles conquistaram{" "}
              <span className={styles.highlight}>
                tu também podes alcançar!
              </span>
            </h2>
          </div>
          <div className={styles.cardsContainer}>
            <Slider {...settings}>
              <Youtube embedId={"C0UDTg7mzqE?si=Iwvb8MlZ8mG5F3wm"} />
              <Youtube embedId={"rEljW3oXebI?si=oKTylOpIdNGD1zoC"} />
              <Youtube embedId={"SuJ0Sly0zh4?si=5BfpJi-Fm0y2F5kB"} />
              <Youtube embedId={"tMOIDaQ8hXM?si=MSon1XWJJmBmnER5"} />
              <Youtube embedId={"uRSH_efB4FA?si=LunN3bntvS9kzhob"} />
              <Youtube embedId={"F4D41AYOcdY?si=LkXp37MMzxDqAaYR"} />
              <Youtube embedId={"Qms1bvDn9xg?si=0LN-rS9EdlKPBMLb"} />
            </Slider>
          </div>
        </main>
      </section>
      <section className={styles.faqSection}>
        <main>
          <div className={styles.leftCol}>
            <h2>Perguntas mais frequentes</h2>
            <Accordion allowZeroExpanded preExpanded={["a"]}>
              <Faq
                uuid="a"
                title={"Qual o investimento para ser agente?"}
                text={
                  "Para teres todos os benefícios terás de fazer um investimento inicial de apenas 349,00€, de forma a adquirir a tua licença comercial."
                }
              />
              <Faq
                title={"Quanto tempo dura a licença comercial?"}
                text={
                  "A licença comercial é vitalícia, ficando para sempre na tua posse, sem nenhum pagamento ou renovação adicional."
                }
                uuid="b"
              />
              <Faq
                title={"Não sou da área do turismo, existe alguma formação?"}
                text={
                  "Não precisas de ter conhecimentos ou experiência na área do turismo. Receberás formação inicial de aprendizagem da plataforma e formações variadas semanalmente."
                }
                uuid="c"
              />
              <Faq
                title={"Qual o valor das formações?"}
                text={
                  "Todas as formações são gratuitas, o único investimento é a licença comercial para vender produtos turísticos legalmente."
                }
                uuid="d"
              />
              <Faq
                title={"Ganho alguma comissão caso não venda nenhum produto?"}
                text={
                  "Não. Apenas recebes comissões ao vender os produtos turísticos."
                }
                uuid="e"
              />
              <Faq
                title={"Que comissões posso ganhar?"}
                text={
                  "A empresa partilhará sempre com os seus consultores entre 30-50% da sua margem de lucro. Ganharás sempre 30% mesmo no início da tua carreira. Os restantes 20% ganharás dependendo do teu patamar no plano de carreira."
                }
                uuid="f"
              />
              <Faq
                title={"O que é o plano de carreira?"}
                text={
                  "O plano de carreira permite-te crescer e ganhar mais. A empresa partilha até 50% do que ganha contigo e à medida que progrides no plano ganhas uma maior percentagem. O plano é baseado no mérito, pelo que quanto melhor for o teu desempenho, maior a tua faturação e mais rápido chegarás a patamares superiores."
                }
                uuid="g"
              />
              <Faq
                title={"Posso comprar viagens para mim?"}
                text={
                  "Podes e deves! Ao comprares viagens para ti estarás também a ganhar comissões e a poupar com as tuas viagens!"
                }
                uuid="h"
              />
            </Accordion>
          </div>
          <div className={styles.rightCol}>
            <h2>Ficaste com dúvidas?</h2>
            <p>
              Se não encontraste a resposta que procuravas, estou aqui para
              ajudar! Entra em contacto e terei todo o prazer em esclarecer
              qualquer questão.
            </p>
            <div>
              <a
                href="https://web.whatsapp.com/send/?phone=%2B351916576923&app=facebook&entry_point=page_cta&fbclid=IwY2xjawF-aNZleHRuA2FlbQIxMAABHdaqB0pUCdBNZdHDNVet2rEXl8DKE0ABOy-mbQQYkKjyKIztCaPNMHbINA_aem_3y5ODy-IOGroQ4gECHt3bg"
                target="_blank"
              >
                Fala comigo
              </a>
              <PopupButton
                url="https://calendly.com/slowdown-viagens/torna-te-um-consultor-de-viagens"
                /*
                 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                 */
                rootElement={document.getElementById("root")}
                text="Assiste a um webinar"
              />
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
}
