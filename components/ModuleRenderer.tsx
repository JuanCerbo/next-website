'use client'
import Images from './practice/Images'
import Text from './practice/Text'
import Label from './practice/Label'
import List from './practice/List'
import Header from './practice/Header'
import Navigation from './practice/Navigation'
import Grid from './practice/Grid'
import Footer from './practice/Footer'
import Carousel from './practice/Carousel'
import Video from './practice/Video'
import BeaconArticle from './practice/BeaconArticle'
import CharlotteArticle from './practice/CharlotteArticle'
import Parallax from './Parallax'
import Article from './Article'
import Testimonials from './Testimonials'
import { PhotoGrid } from './PhotoGrid'
import { capitalize } from '../functions'
import { GlobalModule, ModuleProps, RendererProps } from 'types'
import Banner from './Banner'
import { Fragment } from 'react'
import Card from './Card'

const keysToComponentMap: any = {
    Text,
    Label,
    List,
    Images,
    Grid,
    Header,
    Footer,
    Carousel,
    Video,
    Navigation,
    BeaconArticle,
    CharlotteArticle,
    Article,
    PhotoGrid,
    Banner,
    Parallax,
    Testimonials,
    Card,
}

const mapPropsToConfig = (config: ModuleProps[]) => {
    const configWithProps: any = []

    config.forEach((item: any) => {
        if (item.componentType) {
            const { componentType, ...props } = item

            configWithProps.push({
                ...props,
                component: capitalize(componentType),
            })
        }
    })

    return configWithProps
}

export const ModuleRenderer = ({ config, themeStyles, cmsUrl = '' }: RendererProps) => {
    if (!config) {
        throw new Error('You are calling Renderer with no config.')
    }

    const configWithProps = mapPropsToConfig(config)

    return (
        <>
            {configWithProps.map((item: GlobalModule, index: number) => {
                const { component, ...props } = item
                const Comp = keysToComponentMap[component]

                if (Comp) {
                    return (
                        <Fragment key={index}>
                            {props.attributes.disabled != 'disabled' && <Comp {...props.attributes} themeStyles={themeStyles} cmsUrl={cmsUrl} />}
                        </Fragment>
                    )
                }
            })}
        </>
    )
}
