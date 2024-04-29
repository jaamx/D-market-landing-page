import {mongooseAdapter} from '@payloadcms/db.mongodb'
import {webpackBundler} from '@payloadcms/bundler-webpack'
import {slateEditor} from '@payloadcms/richtext-slate'
export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '' ,
    collections:[],
    routes: {
        admin: '/sell'
    },
    admin: {
        bundler:webpackBundler(),
        meta: {
            titleSuffix: '- DigitalHippo',
            favicon: '/favicon.ico',
            ogImage: '/thumbnail.jpg',
          },
    },
    editor: slateEditor({}),
    db: mongooseAdapter({
        url: Process.env.MONGODB_URL!,
    }),

})