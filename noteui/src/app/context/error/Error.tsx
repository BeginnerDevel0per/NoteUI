import React, { createContext, ReactNode, useContext, useState } from 'react'
import light from '../../resources/themes/light';
import dark from '../../resources/themes/dark';
interface ThemeProps {
    children?: ReactNode;
}
const errorContext = createContext({
    theme: dark,
    changeTheme: (theme: string) => { }
});
const useErrorContext = () => useContext(errorContext);


function Error({ children }: ThemeProps) {
    const [theme, setTheme] = useState(dark);

    const changeTheme = (theme: string) => {
        theme === "light" ? setTheme(light) : setTheme(dark);
    }

    return (
        <errorContext.Provider value={{ theme, changeTheme }}>
            {children}
        </errorContext.Provider>
    )
}

export { }