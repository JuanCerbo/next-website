import { ComponentStory, ComponentMeta } from '@storybook/react'
import Testimonials from '../components/Testimonials'
import { ArticleItems } from '../types'
import { themeStyles, buttonList1, buttonList2, buttonListJust2, createStoryStyles, imageSizes } from 'storydefaults'

export default {
    title: 'new/Testimonials',
    component: Testimonials,
    argTypes: {
        imgsize: {
            options: [
                'landscape_4_3',
                'landscape_3_2',
                'portrait_3_4',
                'portrait_2_3',
                'square_1_1',
                'widescreen_16_9',
                'widescreen_2_4_1',
                'widescreen_3_1',
                'round_1_1',
            ],
            control: { type: 'radio' },
        },
        well: {
            options: ['', '1'],
            control: { type: 'radio' },
        },
        columns: {
            options: [1, 2, 3, 4],
            control: { type: 'radio' },
        },
        type: {
            options: ['article_1', 'article_2', 'article_3', 'article'],
            control: { type: 'radio' },
        },
        items: {
            align: {
                options: ['left', 'right', 'center'],
                control: { type: 'radio' },
            },
        },
    },
} as ComponentMeta<typeof Testimonials>

const Template: ComponentStory<typeof Testimonials> = (args) => (
    <>
        {colorStyles && <style>{colorStyles}</style>}
        <Testimonials {...args} />
    </>
)

const Default = Template.bind({})
const item1: ArticleItems = {
    id: 'e1224268_4fd5_4fb5_ca4f_db4d42e6c889',
    nextImageSizes: imageSizes.normal,
    headline: 'Review 1',
    subheader: '3/27',
    actionlbl: '3',
    image: '',
    // captionOn: '',
    icon: '',
    icon2: '',
    icon3: '',
    bkgrd_color: '',
    btnType: '',
    btnType2: '',
    btnSize: '',
    btnSize2: '',
    desc: 'Here is my review',
    pagelink: '',
    weblink: '',
    newwindow: '',
    pagelink2: '',
    weblink2: '',
    actionlbl2: '',
    newwindow2: '',
    align: 'center',
    isFeatured: '',
    isPlugin: '',
    headerTag: '',
    plugin: '',
    disabled: '',
    buttonList: [
        {
            name: 'btn1',
            link: '',
            window: '',
            label: '',
            active: false,
            btnType: 'btn_1',
            btnSize: 'btn_md',
            linkType: 'ext',
            blockBtn: false,
        },
        {
            name: 'btn2',
            link: '',
            window: '',
            label: '',
            active: false,
            btnType: 'btn_2',
            btnSize: 'btn_md',
            linkType: 'ext',
            blockBtn: false,
        },
    ],
    linkNoBtn: false,
    twoButtons: false,
    isWrapLink: false,
    visibleButton: false,
    isBeaconHero: false,
    imagePriority: false,
    itemCount: 1,
}

const item2 = item1
const item3 = item1

Default.args = {
    modId: '1',
    type: 'testimonials_1',
    well: '',
    align: 'left',
    imgsize: 'square_1_1',
    title: '',
    export: 1,
    columns: 1,
    lightbox: '',
    blockSwitch1: 1,
    scale_to_fit: '',
    items: [item1],
    themeStyles: themeStyles,
}

let colorStyles: string
if (Default.args?.themeStyles) {
    colorStyles = createStoryStyles(Default.args.themeStyles)
}

export const Plain = Template.bind({})
Plain.args = {
    ...Default.args,
    items: [
        {
            ...item1,
        },
    ],
}

export const Image = Template.bind({})
Image.args = {
    ...Plain.args,
    items: [
        {
            ...item1,
            image: '/files/2022/08/AngelTop2.jpg',
        },
    ],
}

export const OnlySub = Template.bind({})
OnlySub.args = {
    ...Plain.args,
    items: [
        {
            ...item1,
            subheader: 'Only Subheadline',
            headline: '',
            desc: '',
            image: '',
            align: '',
        },
    ],
}
export const OnlyHeadline = Template.bind({})
OnlyHeadline.args = {
    ...Plain.args,
    items: [
        {
            ...item1,
            subheader: '',
            headline: 'Only Headline',
            desc: '',
            image: '',
            align: '',
        },
    ],
}
export const OnlyDesc = Template.bind({})
OnlyDesc.args = {
    ...Plain.args,
    items: [
        {
            ...item1,
            subheader: '',
            headline: '',
            desc: 'Only Desc',
            image: '',
            align: '',
        },
    ],
}

export const ModuleTitle = Template.bind({})
ModuleTitle.args = {
    ...Plain.args,
    title: 'Module Title',
}

export const ImageRound = Template.bind({})
ImageRound.args = {
    ...Image.args,
    imgsize: 'round_1_1',
}

export const TwoColumns = Template.bind({})
TwoColumns.args = {
    ...Plain.args,
    columns: 2,
    items: [{ ...item1 }, { ...item2 }, { ...item3 }],
}

export const ThreeColumns = Template.bind({})
ThreeColumns.args = {
    ...Plain.args,
    columns: 3,
    items: [{ ...item1 }, { ...item2, image: '/files/2022/08/AngelTop2.jpg' }, { ...item3 }],
}

export const FourColumns = Template.bind({})
FourColumns.args = {
    ...Plain.args,
    columns: 4,
    items: [{ ...item1 }, { ...item2 }, { ...item3 }, { ...item1 }],
}

export const Border = Template.bind({})
Border.args = {
    ...Plain.args,
    well: '1',
}

export const Featured = Template.bind({})
Featured.args = {
    ...Plain.args,
    items: [{ ...item1, isFeatured: 'active', align: 'left' }],
}

export const MultiFeatured = Template.bind({})
MultiFeatured.args = {
    ...Plain.args,
    columns: 3,
    items: [{ ...item1 }, { ...item1, isFeatured: 'active' }, { ...item1 }],
}

export const MultipleBorder = Template.bind({})
MultipleBorder.args = {
    ...ThreeColumns.args,
    well: '1',
}

export const TextSizes = Template.bind({})
TextSizes.args = {
    ...Plain.args,
    columns: 3,
    items: [
        { ...item1, headSize: 'font_xs', descSize: 'font_sm' },
        { ...item1, headSize: 'font_md', descSize: 'font_md' },
        { ...item1, headSize: 'font_xl', descSize: 'font_xl' },
    ],
}

export const StarColors = Template.bind({})
StarColors.args = {
    ...Default.args,
    items: [
        {
            ...item1,
            desc: 'Change color of stars using modColor1 to pass in a hex value',
            modColor1: 'gold',
        },
    ],
}

export const UseAccentColor = Template.bind({})
UseAccentColor.args = {
    ...MultipleBorder.args,
    items: [
        {
            ...item1,
            useAccentColor: true,
        },
    ],
}

export const RoundedBorder = Template.bind({})
RoundedBorder.args = {
    ...MultipleBorder.args,
    columns: 3,
    items: [
        {
            ...item1,
            useAccentColor: true,
            borderType: 'round',
        },
    ],
}
