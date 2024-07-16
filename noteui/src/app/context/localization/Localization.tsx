import React, { createContext, ReactNode, useContext, useState } from 'react'
import { en } from '../../resources/languages/en';
import { tr } from '../../resources/languages/tr';

interface LocalizationProps {
    children?: ReactNode
}


const LanguageContext = createContext({
    currentLanguage: "tr",
    language: tr,
    changeLanguage: (currentLanguage: string) => { }
});
const useLanguageContext = () => useContext(LanguageContext);




function Localization({ children }: LocalizationProps) {
    const [language, setLanguage] = useState(tr);//seçili olan dil dosyası
    const [currentLanguage, setCurrentLanguage] = useState("tr");



    const changeLanguage = (currentLanguage: string) => {
        //bu fonksiyonum string olarak gelen değişkene göre dil dosyasını değişiriyor ve seçili olan dili yazıyor.
        switch (currentLanguage) {
            case "tr":
                setLanguage(tr);
                setCurrentLanguage("tr");
                break;
            case "en":
                setLanguage(en);
                setCurrentLanguage("en");
                break;
            default:
                setLanguage(tr);
                setCurrentLanguage("tr");
                break;
        }
    }
    return (
        <LanguageContext.Provider value={{ currentLanguage, language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}
export { Localization, useLanguageContext }