const Footer = ({ bgColor }: { bgColor: string }) => {
    return (
        <div
            className={`flex-1 w-full pt-5 pb-2 bg-${bgColor} max-h-44 md:max-h-36`}>
            <footer className="flex flex-row flex-wrap  w-full justify-between px-5 items-end text-lg font-body md:flex-nowrap">
                <div className="flex order-1 flex-50 flex-col text-sm md:text-base md:order-1 md:flex-25">
                    <p>FRONT END DEVELOPER</p>
                    <p>MOTION / VFX </p>
                </div>
                <p className="text-xs text-center order-3 pt-6 flex-100 md:order-2 md:flex-1 md:flex-50 md:text-sm md:pt-0">
                    Build with Next.js, Typescript and Tailwind
                </p>
                <div className="flex order-2 flex-50 flex-col items-end text-sm md:text-base md:order-3 md:flex-25 ">
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
