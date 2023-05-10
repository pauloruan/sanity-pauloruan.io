import { defineField, defineType } from "sanity"

export default defineType({
  name: "post",
  title: "Posts",
  description: "Content for a blog post.",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the post."
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "The subtitle of the post."
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The slug of the post.",
      options: {
        source: "title",
        maxLength: 96
      }
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "datetime",
      description: "The date of the post.",
      options: {
        dateFormat: "YYYY-MM-DD"
      }
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      description: "The author of the post.",
      to: { type: "author" }
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      description: "The categories of the post.",
      of: [{ type: "reference", to: { type: "category" } }]
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      description: "The body of the post."
    }),
    defineField({
      name: "published",
      title: "Published",
      description: "Whether the post is published.",
      initialValue: false,
      type: "boolean"
    })
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "author.image"
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    }
  }
})
