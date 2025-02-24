import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp.js";
import {RevealOnScroll} from "../RevealOnScroll.jsx";

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
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,139,246,0.1)] transition-all">
                        <h2 className="font-bold text-2xl">Barcode System</h2>
                        <p className="text-gray-300">Made a barcode system.</p>
                        <div className="my-3">
                            {["React", "Node.js", "SQL"].map((tech, key) =>
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,139,246,0.2)] transition">
                                        {tech}
                                </span>
                            )}
                        </div>
                            <div className="flex justify-between items-center">
                                <a href="#sample" className="text-blue-100 hover:text-white transition-colors my-5 mb-2">View Project  ➤</a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,139,246,0.1)] transition-all">
                            <h2 className="font-bold text-2xl">Barcode System</h2>
                            <p className="text-gray-300">Made a barcode system.</p>
                            <div className="my-3">
                                {["React", "Node.js", "SQL"].map((tech, key) =>
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,139,246,0.2)] transition">
                                        {tech}
                                </span>
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#sample" className="text-blue-100 hover:text-white transition-colors my-5 mb-2">View Project ➤</a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,139,246,0.1)] transition-all">
                            <h2 className="font-bold text-2xl">Barcode System</h2>
                            <p className="text-gray-300">Made a barcode system.</p>
                            <div className="my-3">
                                {["React", "Node.js", "SQL"].map((tech, key) =>
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,139,246,0.2)] transition">
                                        {tech}
                                </span>
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#sample" className="text-blue-100 hover:text-white transition-colors my-5 mb-2">View Project ➤</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
        </section>
    );
};
