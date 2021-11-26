import Link from "next/link";

function Header({ bgColor }: { bgColor: string }) {
    return (
        <div className={`flex-1 w-full px-2 py-3 bg-${bgColor} max-h-20`}>
            <header className="flex flex-row justify-between px-5 items-center ">
                <Link href="/">
                    <a className="text-2xl md:text-4xl">SIDONIE</a>
                </Link>
                <Link href="/about">
                    <a className="text-lg font-body lg:text-2xl">ABOUT</a>
                </Link>
            </header>
        </div>
    );
}

export default Header;
