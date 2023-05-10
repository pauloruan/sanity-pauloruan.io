import { defineField, defineType } from "sanity"

export default defineType({
  name: "project",
  title: "Projects",
  description: "Content for a project.",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the project."
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The slug of the project.",
      options: {
        source: "title",
        maxLength: 96
      }
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      description: "The summary of the project."
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "The description of the project."
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "datetime",
      description: "The date of the project.",
      options: {
        dateFormat: "YYYY"
      }
    }),
    defineField({
      name: "repository",
      title: "Repository",
      type: "url",
      description: "The repository of the project."
    }),
    defineField({
      name: "website",
      title: "Website",
      type: "url",
      description: "The website of the project."
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      description: "The technologies used in the project.",
      type: "array",
      of: [{ type: "reference", to: { type: "technology" } }]
    }),
    defineField({
      name: "poster",
      title: "Poster",
      type: "image",
      description: "The poster of the project.",
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: "images",
      title: "Images",
      description: "The images of the project.",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }]
    }),
    defineField({
      name: "published",
      title: "Published",
      description: "The published of the project.",
      initialValue: false,
      type: "boolean"
    })
  ],
  preview: {
    select: {
      title: "title",
      media: "poster"
    }
  }
})
