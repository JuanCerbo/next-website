import '../styles/globals.scss'
import cn from 'classnames'
//import { getHomePage, generateLayout } from '../functions'
//import { use, useEffect, useState } from 'react'
//import { Inter, Lora, Abril_Fatface, Lato } from 'next/font/google'

const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || 'clttestsiteforjoshedwards'

const s3ColorStyles = process.env.BUCKET_URL + '/' + cmsUrl + '/' + 'global.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href={s3ColorStyles} type="text/css"></link>
            </head>
            <body>
                <div>{children}</div>
            </body>
        </html>
    )
}
