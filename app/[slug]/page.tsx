import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import { HomeProps, PageListProps } from '../../types'
import Layout from '../../components/Layout'
import { Renderer } from '../../components/Renderer'
/* import { useRouter } from 'next/dist/client/router' */
import { getDomain, decideColumns, setColors, domainImage, getPageData, getLayout } from '../../functions'
/* import getData from '../../functions' */
import cn from 'classnames'
import { Fragment, use } from 'react'

export async function generateStaticParams() {
    const res = await fetch(getDomain(true) + '/pages/page-list.json')
    const data = await res.json()

    return data.pages.map((page: PageListProps) => ({
        slug: page.slug.toString(),
    }))
}

const Slug = ({ params }: any) => {
    const { CMSLayout } = use(getLayout())
    const { page } = use(getPageData(params))

    const cmsTheme = CMSLayout.theme

    const themeStyles = setColors(CMSLayout.cmsColors, cmsTheme)

    const columnStyles = page ? decideColumns(page.data) : 'wide-column'

    //setting color classes
    const textColors = `.accent-txt{color:${themeStyles['textColorAccent']}} .txt-color{color:${themeStyles['textColor']}} .txt-color-heading{color:${themeStyles['headingColor']}} .navLink:hover{color: ${themeStyles['navHover']}} .navLink{color:${themeStyles['NavText']}} .socialIcon:hover{background-color: ${themeStyles['navHover']}} .socialIcon{color:${themeStyles['NavText']}}`

    const btnStyles = `.btn_1{color: ${themeStyles['textColorAccent']}; background-color: ${themeStyles['mainColor']}} .btn_1:hover{color: ${themeStyles['mainColor']}; background-color: ${themeStyles['textColorAccent']}} .btn_2{color: ${themeStyles['altColor']}; border-color: ${themeStyles['altColor']}} .btn_2:hover{color: ${themeStyles['textColorAccent']}; background-color: ${themeStyles['altColor']}}`

    const colorStyles = textColors + btnStyles

    const cmsUrl = CMSLayout.cmsUrl

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    /*   if (router.isFallback) {
        return <div>Loading...</div>
    } */

    return (
        <>
            <Layout CMSLayout={CMSLayout} themeStyles={themeStyles} page={page}>
                <style>{colorStyles}</style>
                {page.data && (
                    <div className={styles.root} style={{ backgroundColor: themeStyles.bckdContent }}>
                        <div className={styles.featured}>
                            <Renderer
                                config={page.data.modules[0]}
                                themeStyles={themeStyles}
                                width={page.data.sections[0] ? page.data.sections[0].wide : ''}
                                cmsUrl={cmsUrl}
                            />
                        </div>

                        <div
                            className={cn(styles.columns, {
                                [styles['wide-column']]: columnStyles === 'wide-column',
                                [styles['half-columns']]: columnStyles === 'half-columns',
                                [styles['third-columns']]: columnStyles === 'third-columns',
                                [styles['fourth-columns']]: columnStyles === 'fourth-columns',
                                [styles['two-third_one-third']]: columnStyles === 'two-third_one-third',
                                [styles['one-third_two-third']]: columnStyles === 'one-third_two-third',
                                [styles['one-fourth_three-fourth']]: columnStyles === 'one-fourth_three-fourth',
                                [styles['three-fourth_one-fourth']]: columnStyles === 'three-fourth_one-fourth',
                                [styles['half_one-fourth_one-fourth']]: columnStyles === 'half_one-fourth_one-fourth',
                                [styles['one-fourth_one-fourth_half']]: columnStyles === 'one-fourth_one-fourth_half',
                                [styles['one-fourth_half_one-fourth']]: columnStyles === 'one-fourth_half_one-fourth',
                            })}
                        >
                            {page.data.modules.map((data: any, idx: number) => (
                                <Fragment key={idx}>
                                    {data && idx != 0 ? (
                                        <div
                                            className={cn(styles['column' + (idx + 1)], {
                                                [styles[`column ${idx + 1}`]]: idx != 0,
                                                [styles.thirdColumn]: page.data.sections[idx] && page.data.sections[idx].wide == '316',
                                                [styles.halfColumn]: page.data.sections[idx] && page.data.sections[idx].wide == '484',
                                                [styles.twoThirdColumn]: page.data.sections[idx] && page.data.sections[idx].wide == '652',
                                                [styles.threeFourthColumn]: page.data.sections[idx] && page.data.sections[idx].wide == '736',
                                                [styles.oneFourthColumn]: page.data.sections[idx] && page.data.sections[idx].wide == '232',
                                            })}
                                        >
                                            <Renderer
                                                config={data}
                                                themeStyles={themeStyles}
                                                width={page.data.sections[idx] ? page.data.sections[idx].wide : ''}
                                                cmsUrl={cmsUrl}
                                            />
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                </Fragment>
                            ))}
                        </div>
                    </div>
                )}
            </Layout>
        </>
    )
}

export default Slug