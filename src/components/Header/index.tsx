
import { Link } from 'react-router';
import './header.css'
import Logo from '../../assets/shared/logo.svg';

export default function Header() {
    return (
        <header className='header'>
            <div>
                <Link to="/">
                 
                    <img
                        src={Logo}
                        alt="Space Tourism"
                        title="Space Tourism "
                    />

                </Link>
            </div>
        </header>
    );
}
