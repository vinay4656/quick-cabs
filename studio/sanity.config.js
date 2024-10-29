import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes/index.js'
import { userSchema } from './schemaTypes/userSchema.js'
import { ridesSchema } from './schemaTypes/ridesSchema.js'
import { tripSchema } from './schemaTypes/tripSchema.js'

export default defineConfig({
  name: 'default',
  title: 'QuickCabs',

  projectId: 'q105yz7o',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes.concat([userSchema, ridesSchema, tripSchema]),
  },
})
