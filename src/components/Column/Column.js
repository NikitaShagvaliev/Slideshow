import React from 'react'
import classNames from 'classnames'
import * as style from './Column.module.scss'

const Column = ({
    children,
    xs,
    sm,
    md,
    lg,
    xl,
    className,
    // innerRef,
}) => {
    const classes = classNames({
        [style.column]: true,
        [style[`col${xs}`]]: xs !== undefined,
        [style[`colSm${sm}`]]: sm !== undefined,
        [style[`colMd${md}`]]: md !== undefined,
        [style[`colLg${lg}`]]: lg !== undefined,
        [style[`colXl${xl}`]]: xl !== undefined,
        [className]: className !== undefined,
    })

    return (
        <div
            className={classes}
            // ref={innerRef}
        >
            {children}
        </div>
    )
}

export default React.memo(Column)
