import "../styles/legals.scss";
import { useEffect } from "react";

import React from "react";

const RGPD = () => {
  useEffect(() => {
    let desc = "Nous avons toujours été transparent avec vous, voici nos RGPD.";
    document.title = "Dronius - RGPD";
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", desc);
  }, []);
  return (
    <div className="app-legals">
      <h1 className="app-legals-title">RGPD</h1>

      <h2 className="app-legals-chapter"> 1 - Édition du site</h2>
      <p className="app-legals-text">
        En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la
        confiance dans l'économie numérique, il est précisé aux utilisateurs du
        site internet https://twitter.com/home l'identité des différents
        intervenants dans le cadre de sa réalisation et de son suivi:
        Propriétaire du site : Nino - Contact : twitter@gmail.com 09 09 09 09 09
        - Adresse : 76600. Identification de l'entreprise : SAS Nino au capital
        social de 1€ - SIREN : 2 - RCS ou RM : - Adresse postale : 76600.
        https://twitter.com/home Directeur de la publication : - Contact : .
        Hébergeur : OVH SAS - 2 rue Kellermann - BP 80157 - 59053 Roubaix Cedex
        1 - Téléphone : 1007 Délégué à la protection des données : azert -
        azerty@gmail.com Autres contributeurs :
      </p>
      <h2 className="app-legals-chapter">
        {" "}
        2 - Propriété intellectuelle et contrefaçons.
      </h2>
      <p className="app-legals-text">
        Nino est propriétaire des droits de propriété intellectuelle et détient
        les droits d’usage sur tous les éléments accessibles sur le site
        internet, notamment les textes, images, graphismes, logos, vidéos,
        architecture, icônes et sons. Toute reproduction, représentation,
        modification, publication, adaptation de tout ou partie des éléments du
        site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf
        autorisation écrite préalable de Nino . Toute exploitation non autorisée
        du site ou de l’un quelconque des éléments qu’il contient sera
        considérée comme constitutive d’une contrefaçon et poursuivie
        conformément aux dispositions des articles L.335-2 et suivants du Code
        de Propriété Intellectuelle.
      </p>
      <h2 className="app-legals-chapter">
        {" "}
        3 - Limitations de responsabilité.
      </h2>
      <p className="app-legals-text">
        {" "}
        Nino ne pourra être tenu pour responsable des dommages directs et
        indirects causés au matériel de l’utilisateur, lors de l’accès au site
        https://twitter.com/home. Nino décline toute responsabilité quant à
        l’utilisation qui pourrait être faite des informations et contenus
        présents sur https://twitter.com/home. Nino s’engage à sécuriser au
        mieux le site https://twitter.com/home, cependant sa responsabilité ne
        pourra être mise en cause si des données indésirables sont importées et
        installées sur son site à son insu. Des espaces interactifs (espace
        contact ou commentaires) sont à la disposition des utilisateurs. Nino se
        réserve le droit de supprimer, sans mise en demeure préalable, tout
        contenu déposé dans cet espace qui contreviendrait à la législation
        applicable en France, en particulier aux dispositions relatives à la
        protection des données. Le cas échéant, Nino se réserve également la
        possibilité de mettre en cause la responsabilité civile et/ou pénale de
        l’utilisateur, notamment en cas de message à caractère raciste,
        injurieux, diffamant, ou pornographique, quel que soit le support
        utilisé (texte, photographie …).
      </p>
      <h2 className="app-legals-chapter">
        {" "}
        4 - CNIL et gestion des données personnelles.
      </h2>
      <p className="app-legals-text">
        Conformément aux dispositions de la loi 78-17 du 6 janvier 1978
        modifiée, l’utilisateur du site https://twitter.com/home dispose d’un
        droit d’accès, de modification et de suppression des informations
        collectées. Pour exercer ce droit, envoyez un message à notre Délégué à
        la Protection des Données : azert - azerty@gmail.com. Pour plus
        d'informations sur la façon dont nous traitons vos données (type de
        données, finalité, destinataire...), lisez notre Politique de
        Confidentialité. Il est également possible de déposer une réclamation
        auprès de la CNIL.
      </p>
      <h2 className="app-legals-chapter">5 - Liens hypertextes et cookies</h2>
      <p className="app-legals-text">
        Le site https://twitter.com/home contient des liens hypertextes vers
        d’autres sites et dégage toute responsabilité à propos de ces liens
        externes ou des liens créés par d’autres sites vers
        https://twitter.com/home. La navigation sur le site
        https://twitter.com/home est susceptible de provoquer l’installation de
        cookie(s) sur l’ordinateur de l’utilisateur. Un "cookie" est un fichier
        de petite taille qui enregistre des informations relatives à la
        navigation d’un utilisateur sur un site. Les données ainsi obtenues
        permettent d'obtenir des mesures de fréquentation, par exemple. Vous
        avez la possibilité d’accepter ou de refuser les cookies en modifiant
        les paramètres de votre navigateur. Aucun cookie ne sera déposé sans
        votre consentement. Les cookies sont enregistrés pour une durée maximale
        de 12 mois. Pour plus d'informations sur la façon dont nous faisons
        usage des cookies, lisez notre Politique de Confidentialité.
      </p>
      <h2 className="app-legals-chapter">
        6 - Droit applicable et attribution de juridiction.
      </h2>
      <p className="app-legals-text">
        Tout litige en relation avec l’utilisation du site
        https://twitter.com/home est soumis au droit français. En dehors des cas
        où la loi ne le permet pas, il est fait attribution exclusive de
        juridiction aux tribunaux compétents de azerty.
      </p>
    </div>
  );
};

export default RGPD;
