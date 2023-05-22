import React from 'react'
import classNames from 'classnames'
import * as style from './Container.module.scss'

const Container = ({
    flex,
    spaceBetween,
    className,
    isFluid,
    type,
    children,
    hasMargin,
    hasMarginTop,
    extraLarge,
}) => {
    const classes = classNames({
        [style.container]: isFluid === undefined || isFluid === false,
        [style['container-fluid']]: isFluid !== undefined && isFluid !== false,
        [style.subpage]: type === 'subpage',
        [style.subpageBottom]: type === 'subpage-bottom',
        [style.subpageTop]: type === 'subpage-top',
        [style.flex]: flex,
        [style.spaceBetween]: spaceBetween,
        [className]: className !== undefined,
        [style.hasMargin]: hasMargin !== undefined,
        [style.hasMarginTop]: hasMarginTop !== undefined,
        [style.extraLarge]: extraLarge !== undefined,
    })

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default React.memo(Container)
