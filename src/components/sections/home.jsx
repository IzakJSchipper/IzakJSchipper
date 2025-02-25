import { Vortex } from "../ui/vortex.js"
import {RevealOnScroll} from "../RevealOnScroll.jsx";

export const Home = () => {
    return (

        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
            <div className="w-full max-w-screen-sm mx-auto rounded-md h-[30rem] overflow-hidden">
                <Vortex
                    backgroundColor="black"
                    className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
                    rangeSpeed="1"
                    particleCount="100"
                >
            <div>
            <div className="text-center z-10 px-4">

                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text leading-right text-transparent">Hi, I'm Izak Schipper.</h1>

                <p>
                    <strong className="text-2xl">Full-stack developer, IT/AV Engineer, and Film Editor.</strong>
                    <br/> I love all things technology, music & film. I bring with me an endless passion for learning.
                </p> <a className="text-blue-500 font-bold" href="#contact">Let's make dreams come true together.</a>

                <div className="flex justify-center my-5 space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        View Projects
                    </a>
                    <a href="#contact" className="border border-blue-500/50 rounded text-blue-500 py-3 px-6 font-menium transition-all duration-200 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                        Contact me
                    </a>
                </div>

            </div>
            </div>
                </Vortex>
            </div>
                </RevealOnScroll>
        </section>

    );
};