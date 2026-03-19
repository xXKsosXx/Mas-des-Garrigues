import { defineType, defineField } from "sanity";

export default defineType({
  name: "formule",
  title: "Formule",
  type: "document",
  fields: [
    defineField({ name: "nom", title: "Nom", type: "string" }),
    defineField({ name: "prix", title: "Prix", type: "number" }),
    defineField({
      name: "contenu",
      title: "Contenu",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "featured",
      title: "Mise en avant",
      type: "boolean",
      initialValue: false,
    }),
    defineField({ name: "ordre", title: "Ordre", type: "number" }),
  ],
});
