import { defineField, defineType } from "sanity"

export default defineType({
  name: "technology",
  title: "Technologies",
  description: "Technology used in a project.",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "The name of the technology."
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The slug of the technology.",
      options: {
        source: "title",
        maxLength: 96
      }
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "The logo of the technology.",
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "The order of the technology."
    })
  ],
  preview: {
    select: {
      title: "name",
      media: "logo"
    }
  }
})
