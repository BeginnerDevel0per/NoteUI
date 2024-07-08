import React from 'react'
import { styles } from './styles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faNoteSticky, faUser, faRightFromBracket, faAngleRight, faPlus, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import icon from '../../Assets/icon-crops.png';
function Navbar() {
    const classes = styles();
    return (
        <>
            <button className={classes.navButton}><FontAwesomeIcon icon={faAngleRight} /></button>
            <div className={classes.userInformation}>
                <img width={70} src={icon} alt='...' />
                <h4 className={classes.Title}>beginner developer</h4>
                <button><FontAwesomeIcon icon={faPlus} /> Not Oluştur</button>
            </div>
            <div className={classes.navList}>
                <div className={classes.navItem}>
                    <Link className={classes.navLink} to="/"><FontAwesomeIcon className={classes.navLinkIcon} icon={faHome} /><span>Anasayfa</span></Link>
                </div>
                <div className={classes.navItem}>
                    <Link className={classes.navLink} to="/"><FontAwesomeIcon className={classes.navLinkIcon} icon={faNoteSticky} /><span>Notlarım</span> </Link>
                </div>
                <div className={classes.navItem}>
                    <Link className={classes.navLink} to="/UserInformation"><FontAwesomeIcon className={classes.navLinkIcon} icon={faUser} /><span>Hesabım</span> </Link>
                </div>
                <div className={classes.navItem}>
                    <Link className={classes.navLink} to="/"><FontAwesomeIcon className={classes.navLinkIcon} icon={faRightFromBracket} />Oturumu Kapat</Link>
                </div>
                <div className={classes.navItem}>
                    <Link className={classes.navLink} to="/"><FontAwesomeIcon className={classes.navLinkIcon} icon={faEllipsis} /><span>Menü</span></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar