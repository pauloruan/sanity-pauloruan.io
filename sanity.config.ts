import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { dataset, projectId } from "./environment"
import { schemaTypes } from "./schemas"

export default defineConfig({
  name: "default",
  title: "pauloruan.io",

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes
  }
})
