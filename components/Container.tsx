'use client'
import styles from './container.module.scss'
import { ContainerProps, ModuleData } from '../types'
import ContainerLayout from './ContainerLayout'
import { ModuleRenderer } from './ModuleRenderer'
import { defineContainerVars } from '../functions'
import cn from 'classnames'
import { Fragment } from 'react'
import PageHead from './PageHead'

export const Container = (props: ContainerProps) => {
    const { page, siteData } = props
    //const router = useRouter()
    const { cmsUrl, themeStyles, columnStyles } = defineContainerVars(page, siteData)
    /* 
    if (router.isFallback) {
        return <div>Loading...</div>
    } */

    return (
        <>
            <PageHead page={page} siteData={siteData} />
            <ContainerLayout siteData={siteData} themeStyles={themeStyles}>
                {page.data && (
                    <div className={cn(styles.root, 'content-background')}>
                        <div className={styles.featured}>
                            <ModuleRenderer config={page.data.modules[0]} themeStyles={themeStyles} cmsUrl={cmsUrl} />
                        </div>
                        <div className={styles['column-blocks']}>
                            <div className={cn(styles.columns, styles[`${columnStyles}`])}>
                                {page.data.modules.map((data: ModuleData, idx: number) => (
                                    <Fragment key={idx}>
                                        {data && idx != 0 ? (
                                            <div className={cn(styles['column' + (idx + 1)], styles.column)}>
                                                <ModuleRenderer config={data} themeStyles={themeStyles} cmsUrl={cmsUrl} />
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </ContainerLayout>
        </>
    )
}