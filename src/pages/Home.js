import "../styles/home.scss";
import drone from "../assets/drone.svg";
import about_1 from "../assets/illustration-etudiants.jpg";
import about_2 from "../assets/illustration-controle-qualite.jpg";

const Home = () => {
  return (
    <div className="app-home">
      <div className="app-home-main">
        <h1>Prenez votre envol avec qualité grâce a Dronius</h1>
        <img src={drone}></img>
      </div>
      <div className="app-home-about">
        <div className="app-home-about-section">
          <img src={about_1}></img>
          <h2>Qui sommes-nous ?</h2>
          <p>
            C'est l'histoire d'une rencontre de 3 jeunes étudiants passionnés.
            Durant leurs études en électroniques, ils ont fabriqué des drones
            pour s'amuser. C'est ainsi qu'est né Dronius !
          </p>
        </div>
        <div className="app-home-about-section">
          <img src={about_2}></img>
          <h2>Pourquoi Dronius</h2>
          <p>
            En achetant nos produits, vous avez la garantie d'obtenir des drones
            hauts de gamme autant de par leur qualité de finition que par leurs
            performances dans le temps. De plus, vous obtenez une garantie
            complète de 5 ans sans conditions et tous les éventuels frais de
            réparation sont pris en charges.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
