import React from 'react'
import classNames from 'classnames'

import * as style from './Button.module.scss'
import { navigate } from 'gatsby'


const Button = ({
    children,
    className,
    disabled,
    title,
    fill,
    floatLeft,
    primary,
    secondary,
    forHeader,
    forHero,
    effect,
    small,
    medium,
    noColor,
    lightFont,
    // isLink,
    isNormalLink,
    type,
    target,
    ref,
    notResponsive,
    isUnderlineLink,
    to,
    // redirect,
    onClick,
    spanEffect,
}) => {
    const clickHandler = () => {
        if (to !== undefined) {
            navigate(to)
            // window.scrollTo(0, 0);
        }

        if (onClick !== undefined) {
            onClick()
        }
    }
    const classes = classNames({
        [style.btn]: true,
        [className]: className !== undefined,
        [style.fill]: fill !== undefined && fill === true,
        [style.primary]: primary !== undefined,
        [style.secondary]: secondary !== undefined,
        [style.forHeader]: forHeader !== undefined,
        [style.forHero]: forHero !== undefined,
        [style.effect]: effect !== undefined,
        [style.small]: small !== undefined,
        [style.medium]: medium !== undefined,
        [style.noColor]: noColor !== undefined,
        [style.lightFont]: lightFont !== undefined,
        [style.notResponsive]: notResponsive !== undefined,
        [style.isUnderlineLink]: isUnderlineLink !== undefined,
        [style.floatLeft]: floatLeft !== undefined,
        [style.spanEffect]: spanEffect !== undefined,
    })

    if (isNormalLink) {
        return (
            <a
                className={classes}
                href={to}
                title={title}
                onClick={to === undefined ? clickHandler : null}
                ref={ref}
                target={target}
            >
                {children}
            </a>
        )
    }

    return (
        <button
            className={classes}
            onClick={clickHandler}
            title={title}
            disabled={disabled}
            type={type || 'button'}
        >
            {children}
        </button>
    )
}

export default React.memo(Button)
