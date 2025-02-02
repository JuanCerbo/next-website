import { ButtonProps } from '../../types'
import cn from 'classnames'
import Link from 'next/link'
import styles from './button.module.scss'
import { useEffect, useState } from 'react'

function Button(props: ButtonProps) {
    const { text = '', linkUrl = '/', themeStyles, btnType = 'normal' } = props
    const themeStylesNormal = {
        color: `${themeStyles['textColor']}`,
    }

    const themeStylesAccent = {
        color: `${themeStyles['textColorAccent']}`,
    }

    const themeStylesAlt = {
        backgroundColor: `${themeStyles['promoColor']}`,
        color: `${themeStyles['textColorAccent']}`,
    }

    const themeStylesAlt2 = {
        color: `${themeStyles['promoColor']}`,
        border: `2px solid ${themeStyles['promoColor']}`,
    }

    const themeStylesAlt3 = {
        color: `${themeStyles['textColorAccent']}`,
        border: `2px solid ${themeStyles['textColorAccent']}`,
    }

    const [hasMounted, setHasMounted] = useState(false)
    const [usedStyle, setStyle] = useState(themeStylesNormal)
    useEffect(() => {
        setHasMounted(true)
        if (btnType === 'normal') {
            setStyle(themeStylesNormal)
        } else if (btnType === 'accent') {
            setStyle(themeStylesAccent)
        } else if (btnType === 'alt') {
            setStyle(themeStylesAlt)
        } else if (btnType === 'alt2') {
            setStyle(themeStylesAlt2)
        } else if (btnType === 'accent2') {
            setStyle(themeStylesAlt3)
        }
    }, [btnType])
    if (!hasMounted) {
        return null
    }

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div
                    className={cn('btnAfter', styles.btn, {
                        [styles.accentBtn]: btnType === 'accent',
                        [styles.altBtn]: btnType === 'alt' || btnType === 'alt2' || btnType === 'accent2',
                    })}
                >
                    {/* {btnType === 'alt' && <style>{altHover}</style> */}
                    {themeStyles ? (
                        <Link href={linkUrl} style={usedStyle}>
                            {text}
                        </Link>
                    ) : (
                        <Link href={linkUrl}>{text}</Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Button
