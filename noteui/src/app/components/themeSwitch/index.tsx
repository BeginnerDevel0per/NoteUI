
import { useEffect, useState } from 'react';
import { styles } from './style';
import { useThemeContext } from '../../context/theme/Theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function ThemeSwitch() {
    const classes = styles();
    const [switchChecked, setSwitchChecked] = useState(true);
    const [focused, setFocused] = useState(false);
    const { theme, changeTheme } = useThemeContext();


    useEffect(() => {
        switchChecked ? changeTheme("dark") : changeTheme("light");
    }, [switchChecked])
    return (
        <div className={classes.box}>
            <FontAwesomeIcon icon={faSun} />
            <label className={classes.switch}>
                <input
                    type="checkbox"
                    className={classes.switchInput}
                    checked={switchChecked}
                    onChange={() => setSwitchChecked(!switchChecked)}

                />
                <span
                    className={`
                  ${classes.slider}
                  ${switchChecked ? classes.sliderChecked : ''}
                  ${focused ? classes.sliderFocus : ''}
                  ${classes.sliderRound}
                                              `}
                ></span>
            </label>
            <FontAwesomeIcon icon={faMoon} />
        </div>

    )
}

export default ThemeSwitch