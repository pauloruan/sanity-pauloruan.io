import { defineField, defineType } from "sanity"

export default defineType({
  name: "about",
  title: "About",
  description: "Content for the about page.",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the page."
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      description: "The content of the page.",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: []
        }
      ]
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "The image of the page.",
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: "attribution",
      title: "Attribution",
      type: "string",
      description: "The attribution of the image."
    }),
    defineField({
      name: "occupation",
      title: "Occupation",
      type: "string",
      description: "The occupation of the author."
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "The location of the author."
    }),
    defineField({
      name: "interests",
      title: "Interests",
      type: "string",
      description: "The interests of the author."
    }),
    defineField({
      name: "pronouns",
      title: "Pronouns",
      type: "string",
      description: "The pronouns of the author."
    })
  ],
  preview: {
    select: {
      title: "title",
      media: "image"
    }
  }
})
