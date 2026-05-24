import { postgresAdapter } from '@payloadcms/db-postgres'
import { mcpPlugin } from '@payloadcms/plugin-mcp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Media } from './collections/Media'
import { getPublicMediaUrl, s3Bucket, s3Config } from './lib/storage'
import { Products } from './collections/Products'
import { Users } from './collections/Users'
import { SiteStats } from './globals/SiteStats'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: ' · Orbitra Tech',
    },
  },
  collections: [Users, Media, Products],
  globals: [SiteStats],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
      max: process.env.NODE_ENV === 'production' ? 10 : 5,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 10_000,
    },
    push: process.env.NODE_ENV !== 'production',
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: {
          prefix: 'media',
          disablePayloadAccessControl: true,
          generateFileURL: ({ filename, prefix }) =>
            getPublicMediaUrl(filename, prefix),
        },
      },
      bucket: s3Bucket,
      config: s3Config,
    }),
    mcpPlugin({
      collections: {
        media: {
          enabled: {
            find: true,
            create: true,
            update: true,
          },
          description:
            'Uploaded images and files for the Orbitratech landing site, including alt text and file metadata.',
        },
        users: {
          enabled: { find: true },
          description:
            'Admin users for the Payload CMS. Read-only via MCP; auth credentials are redacted.',
          overrideResponse: (response) => {
            response.content = response.content.map((item) => ({
              ...item,
              text: item.text
                .replace(/"hash":\s*"[^"]*"/g, '"hash": "[redacted]"')
                .replace(/"salt":\s*"[^"]*"/g, '"salt": "[redacted]"'),
            }))

            return response
          },
        },
        products: {
          enabled: {
            find: true,
            create: true,
            update: true,
          },
          description:
            'Products displayed in the Work section of the Orbitra Tech landing page.',
        },
      },
    }),
  ],
})
