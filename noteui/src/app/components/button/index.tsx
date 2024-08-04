import React, { MouseEventHandler, ReactNode } from 'react'
import { styles } from './style';

interface ButtonProps {
  children?: ReactNode,
  width?: any,
  height?: any,
  fontSize?: string,
  type?: "submit" | "reset" | "button" | undefined,
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

function Button({ children, width, height, fontSize, type = "button", onClick }: ButtonProps) {

  const customButton = { width, height, fontSize }


  const classes = styles(customButton);
  if (!classes.buttonStyle)
    return <div>loading...</div>


  return (
    <button onClick={onClick} type={type} className={classes.buttonStyle}>{children}</button>
  )
}

export default Button