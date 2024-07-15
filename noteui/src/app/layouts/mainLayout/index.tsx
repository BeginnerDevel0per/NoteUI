import React, { ReactNode, useState } from 'react'
import Navbar from '../../components/navbar'
import { styles } from './style';
import classNames from 'classnames';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface MainLayoutProps {
  children?: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const classes = styles();
  const [navbarState, setNavbarState] = useState(true);

  const navbarClasses = classNames({
    [classes.headerForNavActive]: navbarState,//navbarstate true ise bunu koyacak classa
    [classes.headerForNavDisable]: !navbarState,
  });
  const bodyClasses = classNames({
    [classes.BodyForNavActive]: navbarState,//navbarstate true ise bunu koyacak classa
    [classes.BodyForNavDisable]: !navbarState,
  });
  const navButtonClasses = classNames({
    [classes.navButtonActive]: navbarState,//navbarstate true ise bunu koyacak classa
    [classes.navButtonDisable]: !navbarState,
  });
  const toggleNavbar = () => {
    setNavbarState(!navbarState);
  }
  return (
    <div className={classes.Background}>
      <button onClick={toggleNavbar} className={navButtonClasses}><FontAwesomeIcon icon={faBars} /></button>
      <header className={navbarClasses}>
        <Navbar navbarState={navbarState} setNavbarState={setNavbarState} />
      </header>
      <div className={bodyClasses}>
        {children}
      </div>
    </div>
  )
}

export default MainLayout