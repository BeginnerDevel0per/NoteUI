import React, { ReactNode } from 'react'
import { styles } from './style';

interface ButtonProps {
  children?: ReactNode,
  width?: any,
  height?: any,
  fontSize?: string,
  type?: string,
}

function Button({ children, width, height, fontSize, type = "button" }: ButtonProps) {

  const classes = styles({ width, height, fontSize });
  return (
    <button typeof={type} className={classes.buttonStyle}>{children}</button>
  )
}

export default Button