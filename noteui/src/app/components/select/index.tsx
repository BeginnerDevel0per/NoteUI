import React, { useState } from 'react'
import { styles } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { useLanguageContext } from '../../context/localization/Localization';
import { useThemeContext } from '../../context/theme/Theme';



function Select() {
    const [menu, setMenu] = useState(false);
    const { theme } = useThemeContext();
    const classes = styles(theme);

    const classnames = classNames({
        [classes.optionsActive]: menu,
        [classes.optionsDisable]: !menu,
    });
    const changeState = () => {
        setMenu(!menu);
    }
    const { language, changeLanguage } = useLanguageContext();
    return (
        <div className={classes.selectMenu}>
            <div className={classes.select}>
                <button onClick={changeState}><span>{language.languageSettings}</span><FontAwesomeIcon icon={faChevronDown} /></button>
            </div>
            <div className={classnames}>
                <div>
                    <button onClick={() => { changeLanguage("tr") }}>Türkçe</button>
                    <button onClick={() => { changeLanguage("en") }}>English</button>
                </div>
            </div>
        </div>
    )
}

export default Select