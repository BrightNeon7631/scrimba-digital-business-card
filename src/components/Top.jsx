import Image from '../assets/images/unsplash.jpg';
import Email from '../assets/images/email.png';
import LinkedIn from '../assets/images/linkedin1.png';

export default function Top() {
    return (
        <div className="top">
            <img src={Image} alt='photo'/>
            <div className='top-text'>
                <h1>Laura Smith</h1>
                <p className='top-text-1'>Frontend Developer</p>
                <p className='top-text-2'>laurasmith.website</p>
            </div>
            <div className='top-buttons'>
                <button className='top-button-1'>
                    <div>
                        <img src={Email}/>
                        <span>Email</span>
                    </div>
                </button>
                <button className='top-button-2'>
                    <div>
                        <img src={LinkedIn}/>
                        <span>LinkedIn</span>
                    </div>
                </button>
            </div>
        </div>
    )
}