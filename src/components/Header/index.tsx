
import { Link } from 'react-router';
import Logo from '../../assets/shared/logo.svg';

export default function Header() {
    return (
        <header>
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
