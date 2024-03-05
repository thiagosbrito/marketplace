/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/pages/admin/[[...index]].tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import AdminNavbar from '@/components/admin/Navbar'
import { dashboardTool, projectInfoWidget, projectUsersWidget, sanityTutorialsWidget } from '@sanity/dashboard'

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    dashboardTool({ 
      widgets: [
        projectInfoWidget({ layout: { width: 'medium' } }),
        projectUsersWidget({ layout: { width: 'medium' } }),
        // sanityTutorialsWidget(),
      ]
    }),
    visionTool({defaultApiVersion: apiVersion}),
    structureTool(),
  ],
  // studio: {
  //   components: {
  //     navbar: AdminNavbar
  //   }
  // }
})
