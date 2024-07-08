import React, { ReactNode } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { styles } from './styles';
interface MainLayoutProps {
  children?: ReactNode;
}


function MainLayout({ children }: MainLayoutProps) {
  const classes = styles();
  return (
    <div className={classes.Background}>
      <header className={classes.Header}>
        <Navbar></Navbar>
      </header>
      <div className={classes.Body}>
        {children}
      </div>
    </div>
  )
}

export default MainLayout