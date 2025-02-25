import Link from "next/link";
import Image from "next/image"; // Importing Image from next/image
import Logo from '../../assets/shared/logo.svg';

export default function Header() {
    return (
        <header>
            <div>
                <Link href="/">
                    <a>
                        <Image
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
