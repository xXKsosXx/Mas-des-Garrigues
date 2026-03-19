import { defineType, defineField } from "sanity";

export default defineType({
  name: "menuItem",
  title: "Plat du menu",
  type: "document",
  fields: [
    defineField({
      name: "nom",
      title: "Nom",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "prix",
      title: "Prix",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categorie",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Entrée", value: "entree" },
          { title: "Plat", value: "plat" },
          { title: "Dessert", value: "dessert" },
          { title: "Fromage", value: "fromage" },
        ],
      },
    }),
    defineField({
      name: "badge",
      title: "Badge",
      type: "string",
      options: {
        list: [
          { title: "Produit local", value: "Produit local" },
          { title: "Végétarien", value: "Végétarien" },
          { title: "Pêche locale", value: "Pêche locale" },
          { title: "Élevage local", value: "Élevage local" },
        ],
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    }),
    defineField({
      name: "disponible",
      title: "Disponible",
      type: "boolean",
      initialValue: true,
    }),
    defineField({ name: "ordre", title: "Ordre", type: "number" }),
  ],
  orderings: [
    {
      name: "byOrdre",
      title: "Par ordre",
      by: [{ field: "ordre", direction: "asc" }],
    },
  ],
});
