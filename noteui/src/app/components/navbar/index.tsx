import { useEffect, useState } from 'react'
import { styles } from './style';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames';
import { faHome, faNoteSticky, faUser, faRightFromBracket, faPlus, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import icon from '../../assets/usericon.png';
import { Button, MobileMenu, ThemeSwitch } from '../index';
import { useLanguageContext } from '../../context/localization/Localization';
import { useThemeContext } from '../../context/theme/Theme';
import { userService } from '../../services/UserService';
import UserDto from '../../services/Shared/UserDto';
import noteService from '../../services/NoteService';
import AddNoteDto from '../../services/Shared/AddNoteDto';

type NavbarProps = {
    navbarState: boolean;
    setNavbarState: React.Dispatch<React.SetStateAction<boolean>>;
};


function Navbar({ navbarState, setNavbarState }: NavbarProps) {
    const navigate = useNavigate();
    const { language } = useLanguageContext();
    const { theme } = useThemeContext();
    const classes = styles(theme);

    const [isMobile, setIsMobile] = useState(false);
    const resize = () => {
        window.innerWidth < 1000 ? setIsMobile(true) : setIsMobile(false);
    }
    useEffect(() => {
        resize();
    }, []);
    window.addEventListener("resize", () => {
        //boyutlandırma durumunu kontrol ediyorum.
        resize();
    });

    const Mobile = classNames(classes.navItem, {
        [classes.Mobile]: isMobile, //mobil görünüm
    });
    const Desktop = classNames(classes.navItem, {
        [classes.Desktop]: !isMobile,
    });
    const [IsOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
    const MobilMenuStateChange = () => {
        setIsOpenMobileMenu(!IsOpenMobileMenu);
    }

    //#region ApiResponse
    const [profileImage, setProfileImage] = useState("");
    const [userInformation, setUserInformation] = useState<UserDto>();
    useEffect(() => {
        const apiResponse = async () => {
            const response = await userService.getInformation();
            if (response?.IsSuccess) {
                setUserInformation(response.Content);
                const Image = await userService.getProfileImage();
                if (Image) {
                    const url = URL.createObjectURL(Image);
                    setProfileImage(url);
                }
                else
                    setProfileImage(icon);
                setUserInformation(response.Content);
            }
        }
        apiResponse();
    }, [])
    //#endregion

    const logOut = () => {
        localStorage.removeItem("JWT");
    }
    const createNote = async () => {
        const response = await noteService.AddNote(new AddNoteDto("", ""));
        if (response.IsSuccess)
            navigate("/Note/" + response.Content?.NoteId);
    }
    return (
        <>
            <MobileMenu MenuState={IsOpenMobileMenu} />


            <div className={classes.userInformation}>
                <div className={classes.themeSwitch}>
                    <ThemeSwitch></ThemeSwitch>
                </div>
                {
                    profileImage === "" ?
                        <img className={classes.profileImage} src={profileImage} alt='...' />
                        :
                        <FontAwesomeIcon className={classes.userIcon} icon={faUser} />
                }

                <h4 className={classes.Title}>{userInformation?.UserName}</h4>
                <Button onClick={createNote} width={150} height={40} fontSize='15px'><FontAwesomeIcon icon={faPlus} /> {language.noteCreate}</Button>
            </div>
            <div className={classes.navList}>
                <div className={classes.navItem}>
                    <Link className={classes.navLink} to="/"><FontAwesomeIcon className={classes.navLinkIcon} icon={faHome} /><span>{language.home}</span></Link>
                </div>
                <div className={Desktop}>
                    <Link className={classes.navLink} onClick={createNote} to=""><FontAwesomeIcon className={classes.navLinkIcon} icon={faPlus} /><span>{language.newNote}</span></Link>
                </div>
                <div className={classes.navItem}>
                    <Link className={classes.navLink} to="/Note"><FontAwesomeIcon className={classes.navLinkIcon} icon={faNoteSticky} /><span>{language.myNote}</span> </Link>
                </div>
                <div className={Mobile}>
                    <Link className={classes.navLink} to="/Account/ProfileUpdate"><FontAwesomeIcon className={classes.navLinkIcon} icon={faUser} /><span>{language.myAccount}</span> </Link>
                </div>
                <div className={Mobile}>
                    <Link onClick={logOut} className={classes.navLink} to="/Login"><FontAwesomeIcon className={classes.navLinkIcon} icon={faRightFromBracket} />{language.signOut}</Link>
                </div>
                <div className={Desktop}>
                    <button className={classes.menuButton} onClick={MobilMenuStateChange}><FontAwesomeIcon className={classes.navLinkIcon} icon={faEllipsis} /><span>Menü</span></button>
                </div>
            </div>
        </>
    ) //menu kısmına hesabım ve oturumu kapat 
}

export default Navbar