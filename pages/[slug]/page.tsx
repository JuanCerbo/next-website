import { PageListProps } from '../../types'
import { getDomain, getPageData, generateLayout } from '../../functions'
import { use } from 'react'
import { Container } from 'components/Container'

export async function generateStaticParams() {
    const res = await fetch(getDomain(true) + '/pages/page-list.json')
    const data = await res.json()

    return data.pages.map((page: PageListProps) => ({
        slug: page.slug.toString(),
    }))
}

const Page = ({ params }: { params: { slug: string } }) => {
    const { CMSLayout } = use(generateLayout())
    const { page } = use(getPageData(params))

    return (
        <>
            <Container page={page} siteData={CMSLayout} />
        </>
    )
}

export default Page
