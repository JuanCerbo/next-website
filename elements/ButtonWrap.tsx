'use client'
import styles from './buttonwrap.module.scss'
import { BtnProps } from '../types'
import cn from 'classnames'
import { Fragment } from 'react'
import { Button } from './Button'

export const ButtonWrap = (props: BtnProps) => {
    const { actionlbl, themeStyles, well, actionlbl2, type, buttonList, modId, align, promoColor, itemCount, modColor1, twoButtons, btnStyles } = props

    return (
        <div
            className={cn(styles['btn-mod'], styles[`${type}`], styles[`${align}`], 'txt-font', {
                [styles.well]: well == '1' && (type.includes('article') || type.includes('card')),
                [styles['article-all']]: type.includes('article'),
                [styles['card']]: type.includes('card'),
                [styles['two-btns']]: twoButtons,
            })}
        >
            {type != 'cta_banner' && <style>{btnStyles}</style>}

            <div
                className={cn(styles.wrapper, {
                    [styles['btn-wrap']]: (actionlbl2 && actionlbl) || type === 'cta' || type === 'cta_banner',
                    [styles['one-btn-w']]: well === '1' && !(actionlbl2 && actionlbl),
                })}
            >
                {buttonList.map((bt, index) => (
                    <Fragment key={index}>{bt.active && <Button btn={bt} well={well} index={index} type={type} />}</Fragment>
                ))}
            </div>
        </div>
    )
}
