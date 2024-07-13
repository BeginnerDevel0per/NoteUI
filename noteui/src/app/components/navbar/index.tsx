import { useEffect, useState } from 'react'
import { styles } from './styles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames';
import { faHome, faNoteSticky, faUser, faRightFromBracket, faPlus, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import icon from '../../assets/icon-crops.png'
import { Button, MobileMenu } from '../index';

type NavbarProps = {
    navbarState: boolean;
    setNavbarState: React.Dispatch<React.SetStateAction<boolean>>;
};


function Navbar({ navbarState, setNavbarState }: NavbarProps) {
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
    const classes = styles();
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
    return (
        <>
            <MobileMenu MenuState={IsOpenMobileMenu} />
            <div className={classes.userInformation}>
                <img width={70} src={icon} alt='...' />
                <h4 className={classes.Title}>beginner developer</h4>
                <Button width={150} height={40} fontSize='15px'><FontAwesomeIcon icon={faPlus} /> Not Oluştur</Button>
            </div>
            <div className={classes.navList}>
                <div className={classes.navItem}>
                    <Link className={classes.navLink} to="/"><FontAwesomeIcon className={classes.navLinkIcon} icon={faHome} /><span>Anasayfa</span></Link>
                </div>
                <div className={Desktop}>
                    <Link className={classes.navLink} to="/"><FontAwesomeIcon className={classes.navLinkIcon} icon={faPlus} /><span>Oluştur</span></Link>
                </div>
                <div className={classes.navItem}>
                    <Link className={classes.navLink} to="/"><FontAwesomeIcon className={classes.navLinkIcon} icon={faNoteSticky} /><span>Notlarım</span> </Link>
                </div>
                <div className={Mobile}>
                    <Link className={classes.navLink} to="/Account/ProfileUpdate"><FontAwesomeIcon className={classes.navLinkIcon} icon={faUser} /><span>Hesabım</span> </Link>
                </div>
                <div className={Mobile}>
                    <Link className={classes.navLink} to="/"><FontAwesomeIcon className={classes.navLinkIcon} icon={faRightFromBracket} />Oturumu Kapat</Link>
                </div>
                <div className={Desktop}>
                    <button className={classes.menuButton} onClick={MobilMenuStateChange}><FontAwesomeIcon className={classes.navLinkIcon} icon={faEllipsis} /><span>Menü</span></button>
                </div>
            </div>
        </>
    ) //menu kısmına hesabım ve oturumu kapat 
}

export default Navbar