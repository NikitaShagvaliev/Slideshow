import React from 'react'
import classNames from 'classnames'
import * as style from './Row.module.scss'

class Row extends React.PureComponent {
    render() {
        const {
            children,
            // center,
            // noGutters,
            className,
            ref,
        } = this.props

        const classes = classNames({
            [style.row]: true,
            // [style['justify-content-center']]: center,
            // [gridStyle['no-gutters']]: noGutters,
            [className]: className !== undefined,
        })

        return (
            <div
                className={classes}
                ref={ref}
            >
                {children}
            </div>
        )
    }
}

export default Row
