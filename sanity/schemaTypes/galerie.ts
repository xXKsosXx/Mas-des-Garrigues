import { defineType, defineField } from "sanity";

export default defineType({
  name: "galerie",
  title: "Galerie",
  type: "document",
  fields: [
    defineField({ name: "titre", title: "Titre", type: "string" }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "ordre", title: "Ordre", type: "number" }),
    defineField({
      name: "visible",
      title: "Visible",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
