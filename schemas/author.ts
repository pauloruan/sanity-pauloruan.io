import { defineField, defineType } from "sanity"

export default defineType({
  name: "author",
  title: "Authors",
  description: "Author of a post.",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "The name of the author."
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "string",
      description: "The bio of the author."
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "The image of the author.",
      options: {
        hotspot: true
      }
    })
  ],
  preview: {
    select: {
      title: "name",
      media: "image"
    }
  }
})
