import "../styles/home.scss";
import drone from "../assets/drone.svg";
import backgroundVideo from "../assets/Background.mp4";
import about_1 from "../assets/illustration-etudiants.jpg";
import about_2 from "../assets/illustration-controle-qualite.jpg";
import LargeButtonAnchor from "../components/LargeButtonAnchor";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    let desc = "Bienvenue sur Dronius ! Prenez votre envol avec qualité.";
    document.title = "Dronius - Accueil";
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", desc);
  }, []);
  return (
    <div className="app-home">
      <div className="app-home-main">
        <h1>Prenez votre envol avec qualité grâce a Dronius</h1>

        <div className="video-container">
            <video playsInline autoPlay loop muted className="background-video">
                <source src={backgroundVideo} type="video/mp4"></source>
            </video>
        </div>

        <LargeButtonAnchor link="#articles" text="Découvrir la marque" />
        <img src={drone}></img>
      </div>
      <div className="app-home-about">
        <div className="app-home-about-section">
          <img src={about_1} alt="Illustration étudiants"></img>
          <div className="app-home-about-text">
            <h2>Qui sommes-nous ?</h2>
            <p>
              C'est l'histoire d'une rencontre de 3 jeunes étudiants passionnés.
              Durant leurs études en électroniques, ils ont fabriqué des drones
              pour s'amuser. C'est ainsi qu'est né Dronius !
            </p>
          </div>
        </div>
        <div className="app-home-about-section reverse">
          <img src={about_2} alt="Illustration controle qualité"></img>
          <div className="app-home-about-text">
            <h2>Pourquoi Dronius ?</h2>
            <p>
              En achetant nos produits, vous avez la garantie d'obtenir des
              drones hauts de gamme autant de par leur qualité de finition que
              par leurs performances dans le temps. De plus, vous obtenez une
              garantie complète de 5 ans sans conditions et tous les éventuels
              frais de réparation sont pris en charges.
            </p>
          </div>
        </div>
      </div>
      <div className="app-home-articles">
        <a id="articles"></a>
      </div>
    </div>
  );
};
export default Home;
