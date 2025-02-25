import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp.js";
import {RevealOnScroll} from "../RevealOnScroll.jsx";
import {CardSpotlight} from "../ui/card-spotlight.js";

export const Projects = () => {
    return (
        <section id="projects" className="relative min-h-screen items-center py-0 bg-black">
           <RevealOnScroll>
            {/* Lamp Container */}
            <LampContainer className="relative px-4 py-8 mx-auto z-10 bg-black">
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-white to-slate-400 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl"
                >
                    Highlighted <br /> projects.
                </motion.h1>
            </LampContainer>

            <div className="absolute top-3/4 left-0 w-full flex items-center justify-center py-20 z-20 bg-black">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">
                        Tech Projects:
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 gap-6 ">
                        <CardSpotlight className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,139,246,0.1)] transition-all">
                        <h2 className="font-bold text-2xl relative z-20">IzakJSchipper.com</h2>
                        <p className="text-gray-300 relative z-20 py-3">This very website here.</p>
                        <div className="my-3 relative z-20">
                            {["React", "Node.js", "NativewindCSS"].map((tech, key) =>
                                <span key={key} className="mr-1 bg-black/50 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-black/90 hover:shadow-[0_2px_8px_rgba(59,139,246,0.2)] transition relative whitespace-nowrap">
                                        {tech}
                                </span>
                            )}
                        </div>
                            <div className="my-3 relative z-20">
                                {["API Calls", "Vite"].map((tech, key) =>
                                        <span key={key} className="mr-2 bg-black/50 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-black/90 hover:shadow-[0_2px_8px_rgba(59,139,246,0.2)] transition relative whitespace-nowrap">
                                        {tech}
                                </span>
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/IzakJSchipper/IzakJSchipper" className="text-blue-100 hover:text-white transition-colors my-5 mb-2 relative z-20">View GitHub  ➤</a>
                            </div>
                        </CardSpotlight>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,139,246,0.1)] transition-all">
                            <h2 className="font-bold text-2xl">Job Matching APP</h2>
                            <p className="text-gray-300 py-3">Currently Developing an app for Job-Hunters and Employers. The dating market has moved almost entirely to matching apps, why not Job-Hunting too?</p>
                            <div className="my-3 leading-8">
                                {["React Native", "Nativewind CSS", "SQL"].map((tech, key) =>
                                        <span key={key} className="mr-1 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,139,246,0.2)] transition">
                                        {tech}
                                </span>
                                )}
                            </div>
                            <div className="my-3 leading-2">
                                {["UI/UX", "Moblie App Development"].map((tech, key) =>
                                        <span key={key} className="mr-1 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,139,246,0.2)] transition">
                                        {tech}
                                </span>
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#sample" className="text-blue-100 hover:text-white transition-colors my-5 mb-2">(Still In Development)</a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,139,246,0.1)] transition-all">
                            <h2 className="font-bold text-2xl">JapanEstate - Japan Real Estate App</h2>
                            <p className="text-gray-300 py-3">A full-Stack Real Estate app. Made for the purpose of making it easier to navigate the real estate and rental market in Japan.</p>
                            <div className="my-3">
                                {["React Native", "TailwindCSS", "SQL"].map((tech, key) =>
                                        <span key={key} className="mr-1 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,139,246,0.2)] transition">
                                        {tech}
                                </span>
                                )}
                            </div>
                            <div className="my-3">
                                {["Google API", "OAuth"].map((tech, key) =>
                                        <span key={key} className="mr-1 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,139,246,0.2)] transition">
                                        {tech}
                                </span>
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/IzakJSchipper/JapanEstate" className="text-blue-100 hover:text-white transition-colors my-5 mb-2">View GitHub ➤</a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,139,246,0.1)] transition-all">
                            <h2 className="font-bold text-2xl">Barcode Rental Tracking & Ticketing System</h2>
                            <p className="text-gray-300 py-3">A full-Stack Salesforce-Like ticketing system for tracking student rentals, Gear Condiiton, and Inventory.</p>
                            <div className="my-3">
                                {["React", "Node.js", "SQL"].map((tech, key) =>
                                        <span key={key} className="mr-1 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,139,246,0.2)] transition">
                                        {tech}
                                </span>
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#sample" className="text-blue-100 hover:text-white transition-colors my-5 mb-2">Proprietary Software, But will make a sensitive-info stripped open source dump eventually.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
        </section>
    );
};
