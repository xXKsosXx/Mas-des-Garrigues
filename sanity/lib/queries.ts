import { groq } from "next-sanity";

export const RESTAURANT_QUERY = groq`
  *[_type == "restaurant"][0] {
    nom, tagline, description, histoire_courte,
    telephone, email, adresse, horaires,
    image_hero, image_facade, proprietaires,
    annee_creation, nb_couverts, nb_producteurs,
    note_google, nb_avis, producteurs
  }
`;

export const MENU_QUERY = groq`
  *[_type == "menuItem" && disponible == true]
  | order(categorie asc, ordre asc) {
    _id, nom, description, prix, categorie, badge, image
  }
`;

export const FORMULES_QUERY = groq`
  *[_type == "formule"] | order(ordre asc) {
    _id, nom, prix, contenu, featured
  }
`;

export const AVIS_QUERY = groq`
  *[_type == "avis" && visible == true]
  | order(_createdAt desc) [0...6] {
    _id, auteur, initiales, note, texte,
    plateforme, date_affichage
  }
`;

export const GALERIE_QUERY = groq`
  *[_type == "galerie" && visible == true]
  | order(ordre asc) {
    _id, titre, image, ordre
  }
`;
