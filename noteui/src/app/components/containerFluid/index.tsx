import React, { ReactNode } from 'react'
import { styles } from './style';
import classnames from 'classnames';
interface MainLayoutProps {
    children?: ReactNode;
    JustifyContent?: string;
    AlignItems?: string;
}



function container({ children, JustifyContent, AlignItems }: MainLayoutProps) {
    const classes = styles();
    const containerClasses = classnames(classes.container, {
        [classes.JustifyContent]: JustifyContent === "center",
        [classes.AlignItems]: AlignItems === "center",
    });
    return (
        <div className={containerClasses}>
            {children}
        </div>
    )
}

export default container