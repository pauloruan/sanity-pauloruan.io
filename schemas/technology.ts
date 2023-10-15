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
        source: "name",
        maxLength: 96
      }
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      description: "The URL of the technology."
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Name of icon from React Icons library."
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "The order of the technology."
    }),
    defineField({
      name: "recentlyUsed",
      title: "Recently Used",
      type: "boolean",
      initialValue: false,
      options: {
        layout: "switch"
      },
      description: "Is this technology recently used?"
    })
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "order"

    }
  }
})
