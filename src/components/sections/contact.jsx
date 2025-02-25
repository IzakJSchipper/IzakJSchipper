import {RevealOnScroll} from "../RevealOnScroll.jsx";
import {BackgroundGradient} from "../ui/background-gradient.js";
import emailjs from "emailjs-com"
import {useState} from "react";

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })


    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then(result => {
            alert("Thanks for reaching out!");
            setFormData({name: "", email: "", message: ""});
        }).catch(() => alert("Something went wrong, please try again."));
    }

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-350">
            <RevealOnScroll>

                <div className="px-4 w-full max-w-xl">

                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">Get In Touch</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Enter your name here..."
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                        <div className="relative">
                            <input type="email"
                                   id="email"
                                   name="email"
                                   required
                                   value={formData.email}
                                   className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                   placeholder="Example@example.com"
                                   onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                   id="message"
                                   name="message"
                                   required
                                   value={formData.message}
                                   rows={5}
                                   className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                   placeholder="Your message here..."
                                   onChange={(e) => setFormData({...formData, message: e.target.value})}
                            />
                        </div>

                        <div>

                                <button type="submit" className="w-full text-white py-3 px-6 font-medium font-medium transition relative hover:-translate-y-0.5">
                                    <BackgroundGradient>
                                    Send Message
                                    </BackgroundGradient>
                                </button>

                        </div>
                    </form>

                </div>


            </RevealOnScroll>
        </section>
    )
}