import Facebook from '../assets/images/facebook.png';
import Twitter from '../assets/images/twitter.png';
import LinkedIn from '../assets/images/linkedin.png';
import Instagram from '../assets/images/instagram.png';

export default function Footer() {
    return (
        <footer>
            <div>
                <img src={Facebook} alt='Facebook'/>
                <img src={Twitter} alt='Twitter'/>
                <img src={LinkedIn} alt='LinkedIn'/>
                <img src={Instagram} alt='Instagram'/>
            </div>
        </footer>
    )
}