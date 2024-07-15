import React, { useState } from 'react'
import { styles } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { useLanguageContext } from '../../context/localization/Localization';



function Select() {
    const [menu, setMenu] = useState(false);
    const classes = styles();

    const classnames = classNames({
        [classes.optionsActive]: menu,
        [classes.optionsDisable]: !menu,
    });
    const changeState = () => {
        setMenu(!menu);
    }
    const { language, currentLanguage, changeLanguage } = useLanguageContext();

    return (
        <div className={classes.selectMenu}>
            <div className={classes.select}>
                <button onClick={changeState}>{language.languageSettings} <FontAwesomeIcon icon={faChevronDown} /></button>
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