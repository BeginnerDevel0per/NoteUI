import React, { ReactNode } from 'react'
import { styles } from './style'

interface EmptyLayoutProps {
  children?: ReactNode;
}
function EmptyLayout({ children }: EmptyLayoutProps) {
  const classes = styles();
  return (
    <div className={classes.backgroundColor}>
      {children}
    </div>
  )
}

export default EmptyLayout