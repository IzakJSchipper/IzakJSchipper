import {useEffect} from "react";


export const Navbar = ({MenuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = MenuOpen ? "hidden" : "";
    }, [MenuOpen]);

    return (

        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">


        <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                <a href="#home" className="tracking-tighter text-sm/4"> Izak<br /><span className="text-blue-500 font-bold">Jordan</span><br />Schipper</a>
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                </div>


            </div>
        </div>


    </nav>
    )
}