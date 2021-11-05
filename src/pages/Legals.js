import { useEffect } from "react";
import "../styles/legals.scss";

const Legals = () => {
  useEffect(() => {
    let desc =
      "Nous avons toujours été transparent avec vous, voici nos mentions légales.";
    document.title = "Dronius - Mentions Légales";
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", desc);
  }, []);
  return (
    <div className="app-legals">
      <h1 className="app-legals-title">
        Mentions légales - En vigeur au 20/21/2021
      </h1>
      <p className="app-legals-text">
        Conformément aux dispositions des Articles 6-III et 19 de la Loi
        n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique,
        dite L.C.E.N., il est porté à la connaissance des utilisateurs et
        visiteurs, ci-après l'Utilisateur, du site Dronius.fr , ci-après le
        Site, les présentes mentions légales. La connexion et la navigation sur
        le Site par l’Utilisateur implique acceptation intégrale et sans réserve
        des présentes mentions légales. Ces dernières sont accessibles sur le
        Site à la rubrique « Mentions légales ».
      </p>
      <h2 className="app-legals-chapter">ARTICLE 1 - L'EDITEUR</h2>
      <p className="app-legals-text">
        L'édition du Site est assurée par Dronius SARL au capital de 40203
        euros, immatriculée au Registre du Commerce et des Sociétés de Le Havre
        sous le numéro 999999999 dont le siège social est situé au 766620,
        Numéro de téléphone 061212121212, Adresse e-mail : john.doe@gmail.com.
        N° de TVA intracommunautaire : 121 Le Directeur de la publication est
        John Doe ci-après l'Editeur.
      </p>
      <h2 className="app-legals-chapter">ARTICLE 2 - L'HEBERGEUR</h2>
      <p className="app-legals-text">
        L'hébergeur du Site est la société OVH, dont le siège social est situé
        au Paris , avec le numéro de téléphone : 061212121212 + adresse mail de
        contact
      </p>
      <h2 className="app-legals-chapter">ARTICLE 3 - ACCES AU SITE</h2>
      <p className="app-legals-text">
        Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force
        majeure, interruption programmée ou non et pouvant découlant d’une
        nécessité de maintenance. En cas de modification, interruption ou
        suspension du Site, l'Editeur ne saurait être tenu responsable.
      </p>
      <h2 className="app-legals-chapter">ARTICLE 4 - COLLECTE DES DONNEES</h2>
      <p className="app-legals-text">
        Le Site assure à l'Utilisateur une collecte et un traitement
        d'informations personnelles dans le respect de la vie privée
        conformément à la loi n°78-17 du 6 janvier 1978 relative à
        l'informatique, aux fichiers et aux libertés.
      </p>
      <p className="app-legals-text">
        En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978,
        l'Utilisateur dispose d'un droit d'accès, de rectification, de
        suppression et d'opposition de ses données personnelles. L'Utilisateur
        exerce ce droit : par mail à l'adresse email dronius.contact@gmail.com,
        via un formulaire de contact. Toute utilisation, reproduction,
        diffusion, commercialisation, modification de toute ou partie du Site,
        sans autorisation de l’Editeur est prohibée et pourra entraînée des
        actions et poursuites judiciaires telles que notamment prévues par le
        Code de la propriété intellectuelle et le Code civil. Pour plus
        d’informations, se reporter aux CGU du site Dronius.fr accessible à la
        rubrique "CGU" Pour plus d’informations, se reporter aux CGV du site
        Dronius.fr accessible à la rubrique "CGV" Rédigé sur
        <a href=" http://legalplace.fr"> LegalPlace.fr</a>
      </p>
    </div>
  );
};

export default Legals;
