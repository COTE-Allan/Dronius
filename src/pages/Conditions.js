import { useEffect } from "react";
import "../styles/legals.scss";

const Conditions = () => {
  useEffect(() => {
    let desc =
      "Nous avons toujours été transparent avec vous, voici nos conditions d'utilisation.";
    document.title = "Dronius - CGV & CGU";
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", desc);
  }, []);
  return (
    <div className="app-legals">
      <h1 className="app-legals-title">
        Conditions générales d'utilisation - En vigueur au 20/20/2021
      </h1>
      <p className="app-legals-text">
        Les présentes conditions générales d'utilisation (dites « CGU ») ont
        pour objet l'encadrement juridique des modalités de mise à disposition
        du site et des services par Dronius et de définir les conditions d’accès
        et d’utilisation des services par « l'Utilisateur ». Les présentes CGU
        sont accessibles sur le site à la rubrique «CGU».
      </p>
      <h2 className="app-legals-chapter">Article 1 : Les mentions légales</h2>
      <p className="app-legals-text">
        L'édition du site Dronius est assurée par la Société Boite Dronius au
        capital de Beaucoup d'argent euros, immatriculée au RCS de Le havre sous
        le numéro _______________, dont le siège social est situé au
        _______________ Numéro de téléphone _______________ Adresse e-mail :
        _______________. Le Directeur de la publication est : _______________
        L'hébergeur du site Dronius est la société OVH, dont le siège social est
        situé au Paris, avec le numéro de téléphone : 061212121212.
      </p>
      <h2 className="app-legals-chapter">ARTICLE 2 : Accès au site</h2>
      <p className="app-legals-text">
        Le site Dronius permet à l'Utilisateur un accès gratuit aux services
        suivants : Le site internet propose les services suivants : Vendre des
        drones Le site est accessible gratuitement en tout lieu à tout
        Utilisateur ayant un accès à Internet. Tous les frais supportés par
        l'Utilisateur pour accéder au service (matériel informatique, logiciels,
        connexion Internet, etc.) sont à sa charge.
      </p>
      <h2 className="app-legals-chapter">ARTICLE 3 : Collecte des données</h2>
      <p className="app-legals-text">
        Le site assure à l'Utilisateur une collecte et un traitement
        d'informations personnelles dans le respect de la vie privée
        conformément à la loi n°78-17 du 6 janvier 1978 relative à
        l'informatique, aux fichiers et aux libertés. Le site est déclaré à la
        CNIL sous le numéro Deux. En vertu de la loi Informatique et Libertés,
        en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de
        rectification, de suppression et d'opposition de ses données
        personnelles. L'Utilisateur exerce ce droit :
      </p>
      <h2 className="app-legals-chapter">
        ARTICLE 4 : Propriété intellectuelle
      </h2>
      <p className="app-legals-text">
        Les marques, logos, signes ainsi que tous les contenus du site (textes,
        images, son…) font l'objet d'une protection par le Code de la propriété
        intellectuelle et plus particulièrement par le droit d'auteur. La marque
        Dronius est une marque déposée par _______________.Toute représentation
        et/ou reproduction et/ou exploitation partielle ou totale de cette
        marque, de quelque nature que ce soit, est totalement prohibée.
        L'Utilisateur doit solliciter l'autorisation préalable du site pour
        toute reproduction, publication, copie des différents contenus. Il
        s'engage à une utilisation des contenus du site dans un cadre
        strictement privé, toute utilisation à des fins commerciales et
        publicitaires est strictement interdite. Toute représentation totale ou
        partielle de ce site par quelque procédé que ce soit, sans
        l’autorisation expresse de l’exploitant du site Internet constituerait
        une contrefaçon sanctionnée par l’article L 335-2 et suivants du Code de
        la propriété intellectuelle. Il est rappelé conformément à l’article
        L122-5 du Code de propriété intellectuelle que l’Utilisateur qui
        reproduit, copie ou publie le contenu protégé doit citer l’auteur et sa
        source.
      </p>
      <h2 className="app-legals-chapter">ARTICLE 5 : Responsabilité</h2>
      <p className="app-legals-text">
        Les sources des informations diffusées sur le site Dronius sont réputées
        fiables mais le site ne garantit pas qu’il soit exempt de défauts,
        d’erreurs ou d’omissions. Les informations communiquées sont présentées
        à titre indicatif et général sans valeur contractuelle. Malgré des mises
        à jour régulières, le site Dronius ne peut être tenu responsable de la
        modification des dispositions administratives et juridiques survenant
        après la publication. De même, le site ne peut être tenue responsable de
        l’utilisation et de l’interprétation de l’information contenue dans ce
        site. Le site Dronius ne peut être tenu pour responsable d’éventuels
        virus qui pourraient infecter l’ordinateur ou tout matériel informatique
        de l’Internaute, suite à une utilisation, à l’accès, ou au
        téléchargement provenant de ce site. La responsabilité du site ne peut
        être engagée en cas de force majeure ou du fait imprévisible et
        insurmontable d'un tiers.
      </p>
      <h2 className="app-legals-chapter">ARTICLE 6 : Liens hypertextes</h2>
      <p className="app-legals-text">
        Des liens hypertextes peuvent être présents sur le site. L’Utilisateur
        est informé qu’en cliquant sur ces liens, il sortira du site Dronius. Ce
        dernier n’a pas de contrôle sur les pages web sur lesquelles aboutissent
        ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
      </p>
      <h2 className="app-legals-chapter">ARTICLE 7 : Cookies</h2>
      <p className="app-legals-text">
        L’Utilisateur est informé que lors de ses visites sur le site, un cookie
        peut s’installer automatiquement sur son logiciel de navigation. Les
        cookies sont de petits fichiers stockés temporairement sur le disque dur
        de l’ordinateur de l’Utilisateur par votre navigateur et qui sont
        nécessaires à l’utilisation du site Dronius. Les cookies ne contiennent
        pas d’information personnelle et ne peuvent pas être utilisés pour
        identifier quelqu’un. Un cookie contient un identifiant unique, généré
        aléatoirement et donc anonyme. Certains cookies expirent à la fin de la
        visite de l’Utilisateur, d’autres restent. L’information contenue dans
        les cookies est utilisée pour améliorer le site Dronius. En naviguant
        sur le site, L’Utilisateur les accepte. L’Utilisateur doit toutefois
        donner son consentement quant à l’utilisation de certains cookies. A
        défaut d’acceptation, l’Utilisateur est informé que certaines
        fonctionnalités ou pages risquent de lui être refusées. L’Utilisateur
        pourra désactiver ces cookies par l’intermédiaire des paramètres
        figurant au sein de son logiciel de navigation.
      </p>
      <h2 className="app-legals-chapter">
        ARTICLE 8 : Droit applicable et juridiction compétente
      </h2>
      <p className="app-legals-text">
        La législation française s'applique au présent contrat. En cas d'absence
        de résolution amiable d'un litige né entre les parties, les tribunaux
        français seront seuls compétents pour en connaître. Pour toute question
        relative à l’application des présentes CGU, vous pouvez joindre
        l’éditeur aux coordonnées inscrites à l’ARTICLE 1. CGU réalisées sur
        <a href=" http://legalplace.fr"> LegalPlace.fr</a>
      </p>
    </div>
  );
};

export default Conditions;
