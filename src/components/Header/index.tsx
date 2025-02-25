
import { Link } from 'react-router';
import Logo from '../../assets/shared/logo.svg';

export default function Header() {
    return (
        <header>
            <div>
                <Link to="/">
                    <a>
                        <img
                            src={Logo}
                            width={500}
                            height={500}
                            alt="Space Tourism"
                            title="Space Tourism "
                        />
                    </a>
                </Link>
            </div>
        </header>
    );
}
