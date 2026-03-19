import { defineType, defineField } from "sanity";

export default defineType({
  name: "avis",
  title: "Avis",
  type: "document",
  fields: [
    defineField({ name: "auteur", title: "Auteur", type: "string" }),
    defineField({ name: "initiales", title: "Initiales", type: "string" }),
    defineField({ name: "note", title: "Note", type: "number" }),
    defineField({ name: "texte", title: "Texte", type: "text" }),
    defineField({
      name: "plateforme",
      title: "Plateforme",
      type: "string",
      options: {
        list: [
          { title: "Google", value: "Google" },
          { title: "TripAdvisor", value: "TripAdvisor" },
          { title: "Yelp", value: "Yelp" },
          { title: "TheFork", value: "TheFork" },
        ],
      },
    }),
    defineField({ name: "date_affichage", title: "Date d'affichage", type: "string" }),
    defineField({
      name: "visible",
      title: "Visible",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
