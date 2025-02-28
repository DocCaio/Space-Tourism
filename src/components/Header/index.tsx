
import { Link } from 'react-router';
import './header.css'
import Logo from '../../assets/shared/logo.svg';
import { CgMenuLeft } from 'react-icons/cg';

const handleClick = () => {
    const navbar = document.querySelector('.navbar');
    const listItems = document.querySelectorAll('.list-item'); // Corrected class name

   
    navbar?.classList.toggle("open");

   
    listItems.forEach((item) => 
        item.addEventListener('click', () => {
            navbar?.classList.remove('open');
        })
    );
}


export default function Header() {
    return (
        <header className='header  flex items-center justify-between w-full'>
            <div>
                <Link to="/">

                    <img
                        src={Logo}
                        alt="Space Tourism"
                        title="Space Tourism "
                    />

                </Link>
            </div>

            <nav className='navbar open'>
                <ul>
                    <li className='list-item'>
                        <Link to={'/'}>
                            <span>00</span>Home
                        </Link>
                    </li>
                    <li className='list-item'>
                        <Link to={'/destination'}>
                            <span>01</span>Destination{""}
                        </Link>
                    </li>
                    <li className='list-item'>
                        <Link to={'/crew'}>
                            <span>02</span>Crew
                        </Link>
                    </li>
                    <li className='list-item'>
                        <Link to={'/technology'}>
                            <span>03</span>Technology
                        </Link>
                    </li>

                </ul>
            </nav>
            <div>
                <button onClick={handleClick}>
                    <CgMenuLeft className='text-white text-4xl'/>
                </button>

            </div>
        </header>
    );
}
