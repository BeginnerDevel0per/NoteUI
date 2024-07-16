import React from 'react'
import { styles } from './style';
import { Link, Outlet } from 'react-router-dom';
import ContainerFluid from '../../components/containerFluid';
import icon from '../../assets/icon-crops.png';
import { Button, Select } from '../../components/index';
import { useLanguageContext } from '../../context/localization/Localization';
import { useThemeContext } from '../../context/theme/Theme';
function Account() {
  const { theme } = useThemeContext();
  const classes = styles(theme);
  const { language } = useLanguageContext();
  return (
    <ContainerFluid JustifyContent="center" AlignItems="center">
      <div className={classes.box}>
        <div className={classes.settingMenu}>
          <div className={classes.settingMenuItem}>
            <Link className={classes.settingMenuLink} to="ProfileUpdate">{language.changeProfileInformation}</Link>
          </div>
          <div className={classes.settingMenuItem}>
            <Link className={classes.settingMenuLink} to="PasswordUpdate">{language.changePassword}</Link>
          </div>
          <div className={classes.languageMenu}>
            <Select></Select>
          </div>
        </div>
        <div className={classes.settingMenuBody}>
          <div className={classes.information}>
            <div className={classes.userImage}>
              <img src={icon} width={90} alt='...' />
            </div>
            <div className={classes.userInformation}>
              <span>beginner developer</span>
              <span>muhammetali54321@gmail.com</span>
              <Button width={150} height={35} >{language.changeProfileImage}</Button>
            </div>
          </div>
          <div className={classes.variable}>
            <Outlet />
          </div>
        </div>
      </div>
    </ContainerFluid>
  )
}
export default Account