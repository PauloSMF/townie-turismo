//Styles
import './Header.scss'
//MaterialUI Icons
import HomeIcon from '@material-ui/icons/Home';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import PanoramaIcon from '@material-ui/icons/Panorama';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Header() {
    return (
        <header>
            <div className="header-content">
                <div className="menu">
                    <img src="images/logo-header.png" alt="Logo Townie Turismo" />
                    <div className="menu-item">
                        <HomeIcon className="icon" /> Início
                    </div>
                    <div className="menu-item">
                        <DirectionsBusIcon className="icon" /> Pacotes
                    </div>
                    <div className="menu-item">
                        <PanoramaIcon className="icon" /> Galeria
                    </div>
                    <div className="menu-item">
                        <MailIcon className="icon" /> Contato
                    </div>
                </div>
                <div className="socialMedia">
                    <div className="socialMedia-item">
                        <FacebookIcon className="icon" /> Facebook
                    </div>
                    <div className="socialMedia-item">
                        <InstagramIcon className="icon" /> Instagram
                    </div>
                </div>
            </div>
        </header>
    );
} 