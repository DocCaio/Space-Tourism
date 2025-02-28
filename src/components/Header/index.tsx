
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

            <nav className='navbar'>
                <ul>
                    <li>
                        <Link to={'/'}>
                            <span>00</span>Home
                        </Link>
                    </li>
                    <li>
                        <Link to={'/destination'}>
                            <span>01</span>Destination{""}
                        </Link>
                    </li>
                    <li>
                        <Link to={'/crew'}>
                            <span>02</span>Crew
                        </Link>
                    </li>
                    <li>
                        <Link to={'/technology'}>
                            <span>03</span>Technology
                        </Link>
                    </li>

                </ul>
            </nav>
        </header>
    );
}
