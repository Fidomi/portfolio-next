const Footer = ({ bgColor }: { bgColor: string }) => {
    return (
        <div className={`flex-1 w-full px-2 py-5 bg-${bgColor} max-h-36`}>
            <footer className="flex flex-row justify-between px-5 items-end text-base font-body">
                <div className="flex flex-col">
                    <p>FRONT END DEVELOPER</p>
                    <p>MOTION / VFX </p>
                </div>
                <p className="text-sm">
                    Build with Next.js, Typescript and Tailwind
                </p>
                <div className="flex flex-col items-end">
                    <a href="">EMAIL</a>
                    <a href="">GITHUB</a>
                    <a href="">LINKEDIN</a>
                    <a href="">RESUME (fr)</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
