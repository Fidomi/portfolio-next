import Link from "next/link";

function Header() {
    return (
        <header>
            <Link href="/">
                <a>
                    <h1>SIDONIE</h1>
                </a>
            </Link>
            <Link href="/about">
                <a>
                    <p>about</p>
                </a>
            </Link>
        </header>
    );
}

export default Header;
