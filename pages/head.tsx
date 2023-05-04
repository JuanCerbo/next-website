import PageHead from 'components/PageHead'
import { generateLayout, getHomePage } from 'functions'

//import * as fonts from 'next/font/google'

//import dynamic from 'next/dynamic'

export default async function Head() {
    const { CMSLayout } = await generateLayout()
    const { page } = await getHomePage()

    const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || 'clttestsiteforjoshedwards'
    const s3ColorStyles = process.env.BUCKET_URL + '/' + cmsUrl + '/' + 'global.css'

    return (
        <>
            <PageHead page={page} siteData={CMSLayout} pageType={'slug'} />
        </>
    )
}
