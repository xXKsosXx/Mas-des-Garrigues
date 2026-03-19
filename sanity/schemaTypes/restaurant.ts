import { defineType, defineField } from "sanity";

export default defineType({
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    defineField({ name: "nom", title: "Nom", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "histoire_courte", title: "Histoire courte", type: "text" }),
    defineField({ name: "telephone", title: "Téléphone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "adresse", title: "Adresse", type: "text" }),
    defineField({
      name: "horaires",
      title: "Horaires",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "jour", title: "Jour", type: "string" },
            { name: "horaire", title: "Horaire", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "image_hero",
      title: "Image Hero",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    }),
    defineField({
      name: "image_facade",
      title: "Image Facade",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    }),
    defineField({ name: "proprietaires", title: "Propriétaires", type: "string" }),
    defineField({ name: "annee_creation", title: "Année de création", type: "number" }),
    defineField({ name: "nb_couverts", title: "Nombre de couverts", type: "number" }),
    defineField({ name: "nb_producteurs", title: "Nombre de producteurs", type: "number" }),
    defineField({ name: "note_google", title: "Note Google", type: "number" }),
    defineField({ name: "nb_avis", title: "Nombre d'avis", type: "number" }),
    defineField({
      name: "producteurs",
      title: "Producteurs",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
