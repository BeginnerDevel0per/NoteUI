import React from 'react'
import { styles } from './style'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { useLanguageContext } from '../../context/localization/Localization';
import ThemeSwitch from '../themeSwitch';

type PropMenu = {
    MenuState: boolean;
}

function MobileMenu({ MenuState }: PropMenu) {
    const { language } = useLanguageContext();
    const classes = styles();
    const classnames = classNames(classes.mobileMenu, {
        [classes.open]: MenuState,
        [classes.close]: !MenuState,
    });
    return (
        <div className={classnames}>
            <div className={classes.navItem}>
                <div className={classes.themeSwitch}>
                    <ThemeSwitch></ThemeSwitch>
                </div>
            </div>
            <div className={classes.navItem}>
                <Link className={classes.navLink} to="/Account/ProfileUpdate"><FontAwesomeIcon className={classes.navLinkIcon} icon={faUser} /><span>{language.myAccount}</span> </Link>
            </div>
            <div className={classes.navItem}>
                <Link className={classes.navLink} to="/"><FontAwesomeIcon className={classes.navLinkIcon} icon={faRightFromBracket} />{language.signOut}</Link>
            </div>
        </div>
    )
}
export default MobileMenu