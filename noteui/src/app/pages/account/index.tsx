import React, { useEffect, useState } from 'react'
import { styles } from './style';
import { Link, Outlet } from 'react-router-dom';
import ContainerFluid from '../../components/containerFluid';
import icon from '../../assets/usericon.png';
import {  Select } from '../../components/index';
import { useLanguageContext } from '../../context/localization/Localization';
import { useThemeContext } from '../../context/theme/Theme';
import { userService } from '../../services/UserService';
import UserDto from '../../services/Shared/UserDto';
import { Field, Form, Formik } from 'formik';
function Account() {
  const { theme } = useThemeContext();
  const classes = styles(theme);
  const { language } = useLanguageContext();


  //#region ApiResponse
  const [profileImage, setProfileImage] = useState("");
  const [userInformation, setUserInformation] = useState<UserDto>();
  useEffect(() => {
    const apiResponse = async () => {
      const response = await userService.getInformation();
      if (response.IsSuccess) {
        setUserInformation(response.Content);
        const Image = await userService.getProfileImage();
        if (Image) {
          const url = URL.createObjectURL(Image);
          setProfileImage(url);
        }
        else {
          setProfileImage(icon);
        }
        setUserInformation(response.Content);
      }

    }
    apiResponse();
  }, [])
  //#endregion
  //#region ProfileImageApiResponse
  const handleSubmit = async (values: any) => {
    await userService.updateProfileImage(values);
    window.location.reload();
  }
  //#endregion
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
              <img className={classes.profileImage} src={profileImage} width={90} alt='...' />
            </div>
            <div className={classes.userInformation}>
              <span>{userInformation?.UserName}</span>
              <span>{userInformation?.Email}</span>
              <Formik
                initialValues={{ file: null }}
                onSubmit={(values) => {
                  handleSubmit(values);
                }}
              >
                {({ setFieldValue, handleSubmit }) => (
                  <Form>
                    <label className={classes.fileInput}>
                      {language.changeProfileImage}
                      <Field
                        className={classes.hidden}
                        type="file"
                        name="ImageFile"
                        onChange={(event: any) => {
                          setFieldValue("file", event.currentTarget.files[0]);
                          handleSubmit();
                        }}
                      />
                    </label>
                  </Form>
                )}
              </Formik>

             
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