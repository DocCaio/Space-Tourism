
import { Link } from 'react-router';
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
        <header className='header  flex items-center 
        justify-between w-full lg:flex-row'>
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
                    <li className='list-item'>
                        <Link to={'/'} className='lg:text-white lg:flex lg:itens-center'>
                            <span className='lg:text-4xl lg:font-bold mr-2'>00</span>Home
                        </Link>
                    </li>
                    <li className='list-item'>
                        <Link to={'/destination'} className='lg:text-white lg:flex lg:itens-center'>
                            <span className='lg:text-4xl lg:font-bold mr-2'>01</span>Destination{""}
                        </Link>
                    </li>
                    <li className='list-item'>
                        <Link to={'/crew'} className='lg:text-white lg:flex lg:itens-center'>
                            <span className='lg:text-4xl lg:font-bold mr-2'>02</span>Crew
                        </Link>
                    </li>
                    <li className='list-item'>
                        <Link to={'/technology'} className='lg:text-white lg:flex lg:itens-center'>
                            <span className='lg:text-4xl lg:font-bold mr-2'>03</span>Technology
                        </Link>
                    </li>

                </ul>
            </nav>
            <div className='lg:hidden'>
                <button onClick={handleClick}>
                    <CgMenuLeft className='text-white text-4xl'/>
                </button>

            </div>
        </header>
    );
}
