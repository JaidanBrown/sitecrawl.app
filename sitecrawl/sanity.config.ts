import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'sitecrawl',

  projectId: 'w4ipj9kf',
  dataset: 'production',
  appId: 'ofxqa0ou3c3odfwofn5hprfr',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
