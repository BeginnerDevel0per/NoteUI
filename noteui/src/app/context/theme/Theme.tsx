import React, { createContext, ReactNode, useContext, useState } from 'react'
import light from '../../resources/themes/light';
import dark from '../../resources/themes/dark';
interface ThemeProps {
    children?: ReactNode;
}
const themeContext = createContext({
    theme: dark,
    changeTheme: (theme: string) => { }
});
const useThemeContext = () => useContext(themeContext);


function Theme({ children }: ThemeProps) {
    const [theme, setTheme] = useState(dark);

    const changeTheme = (theme: string) => {
        theme === "light" ? setTheme(light) : setTheme(dark);
    }

    return (
        <themeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </themeContext.Provider>
    )
}

export { Theme, useThemeContext }