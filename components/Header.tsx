import Link from "next/link";

function Header() {
    return (
        <div className="sticky top-0 w-full px-2 py-2">
            <header className="flex flex-row justify-between px-5 items-center ">
                <Link href="/">
                    <a className="text-4xl">SIDONIE</a>
                </Link>
                <Link href="/about">
                    <a className="text-base font-body">ABOUT</a>
                </Link>
            </header>
        </div>
    );
}

export default Header;
