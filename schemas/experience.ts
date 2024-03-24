import { defineField, defineType } from "sanity"

export default defineType({
  name: "experience",
  title: "Experiences",
  description: "Work experiences.",
  type: "document",
  fields: [
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      description: "The name of the company."
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The slug of the experience.",
      options: {
        source: "company",
        maxLength: 96
      }
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
      description: "The position of the experience."
    }),
    defineField({
      name: "linkedInURL",
      title: "LinkedIn URL",
      type: "url",
      description: "The URL of LinkedIn company."
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: []
        }
      ],
      description: "The description of the experience."
    }),
    defineField({
      name: "stack",
      title: "Stack",
      type: "array",
      of: [{ type: "reference", to: { type: "technology" } }],
      description: "The stack of the experience."
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM"
      },
      description: "The start date of the experience."
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM"
      },
      description: "The end date of the experience."
    }),
    defineField({
      name: "current",
      title: "Current",
      type: "boolean",
      description: "Is this experience current?",
      initialValue: false,
      options: {
        layout: "switch"
      }
    })
  ],
  preview: {
    select: {
      title: "company",
      subtitle: "position"
    }
  }
})
