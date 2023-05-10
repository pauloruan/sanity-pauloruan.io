import { defineField, defineType } from "sanity"

export default defineType({
  name: "category",
  title: "Categories",
  description: "Category of a post.",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "name",
      type: "string",
      description: "The name of the category."
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The slug of the category.",
      options: {
        source: "title",
        maxLength: 96
      }
    })
  ],
  preview: {
    select: {
      title: "name"
    }
  }
})
