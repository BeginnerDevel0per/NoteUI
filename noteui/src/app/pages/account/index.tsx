import React from 'react'
import { styles } from './style';
import { Link, Outlet } from 'react-router-dom';
import ContainerFluid from '../../components/containerFluid';
import icon from '../../assets/icon-crops.png';
import { Button } from '../../components/index';
function Account() {
  const classes = styles();
  return (
    <ContainerFluid JustifyContent="center" AlignItems="center">
      <div className={classes.box}>
        <div className={classes.settingMenu}>
          <div className={classes.settingMenuItem}>
            <Link className={classes.settingMenuLink} to="ProfileUpdate">Profil Bilgilerini Değiştir</Link>
          </div>
          <div className={classes.settingMenuItem}>
            <Link className={classes.settingMenuLink} to="PasswordUpdate">Şifre Değiştir</Link>
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
              <Button width={150} height={35} >Profil Resmini Değiştir</Button>
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