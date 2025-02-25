import {RevealOnScroll} from "../RevealOnScroll.jsx";

export const About = () => {

    const frontendSkills = [
        "React",
        "vue",
        "TypeScript",
        "TailwindCss",
        "JavaScript",
        "CSS",
        "Responsive Design",
        "UI/UX Design",
        "Git",
        "Graphic Design",
        "Typography",
        "Typesetting",
        "Debugging",
    ];
    const backendSkills = [
        "Node.js",
        "PHP",
        "SQL",
        "GraphQL",
        "IaaS",
        "DNS Configuration",
        "Web Hosting",
        "API Management",
        "Database Management",
        "Schema Design",
        "JavaScript",
    ];
    const itSkills = [
        "Hardware Installation",
        "Software Engineering",
        "Operating Systems",
        "Virtualizing (VM)",
        "CaaS",
        "IaaS",
        "DHCP",
        "Policy Management",
        "Cyber Security",
        "CLI (Powershell, Bash)",
        "IP",
        "Documentation",
        "Salesforce",
    ];
    const avSkills = [
        "AV Systems",
        "Audio Engineering",
        "Live Sound",
        "Video Conferencing",
        "AV System Design",
        "Live Event Production",
        "IP",
        "VOIP",
        "Lighting/Gaffing",
        "Broadcasting Software",
        "Broadcasting Hardware",
    ];
    const filmSkills = [
        "Camera Operation",
        "Film Editing",
        "Film Production",
        "Sound Design",
        "VFX Design",
        "Premiere Pro",
        "DaVinci Resolve",
        "Multi-Cam Operation",
        "Audio Engineering",
        "Recording Engineering",
        "Audio Equipment Operation",
    ];
    const softSkills = [
        "Communication",
        "Customer Support",
        "Problem Solving",
        "Teamwork",
        "Resource Management",
        "Time Management",
        "Adaptability",
    ];
    return(

        <section id="about" className="min-h-screen flex items-center justify-center py-20">

            <div className="max-w-3xl mx-auto px-4">

                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">
                    About Me
                </h2>


                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-0.5 transition-all">
                    <p className="text-gray-300 mb-6">I'm a engineer that wears many hats. Driven by a passion to learn,
                        I often push myself to take on projects which seem impossible just so I can say <strong className="text-blue-500">"I did that."</strong>
                    <br/><br/>I started playing with computers in my childhood. Running Virtual machines just for the fun of it. It started out
                    because I loved seeing the prototype builds of windows, such as Windows Neptune, Whistler, and Longhorn. <br/><br/>From there it became and endless passion for learning
                    whatever new technology I could get my hands on. I started programming games on GameMaker Studio and Unity - bringing them into the school's
                    computer lab and showing them off to friends. (I got in some trouble though, because in order to install my games on them I had to bypass the Windows Group Policies). 🤪 <br/><br/>
                    From there, I took my passion into learning about cybersecurity and network protocols. Learning the ins and outs of Tor browser and VPN's - later on learning decentralized
                    protocols. This started a passion for learning about crypto currencies - and to this day I still run a bitcoin node - mining to it by using hopper to create a
                    pool (using the open source soloCK pool), yet to be lucky enough to mine a solo block though. 🤭
                    <br/><br/>With that being said, my focus in the more recent years has been Audio and Visual technologies. During Highschool,
                     I attended a trade school and studied Graphic Communications Technology. This fueled my passion for
                    finding creative ways to use technology to make beautiful things. I had a hobby for collecting cameras and audio gear, and I finally found a way I could
                    incorporate this with my love for problem solving. <br/><br/> In the program, we used the Adobe Creative Suite for vector illustration & animation, as well as
                    for video editing. Around this time I had already won a film award at a community event, and used the tools available to push them and myself to our limits.
                    For fun, me and a friend made a promotional video for the program, and ended up getting noticed by a local TV production company, which offered the two of us an internship.
                    <br/><br/> We did not join it to disappoint, we worked hard, got a look into the depths of AV engineering and Film Production, and took home another film award. 🎉
                    <br/><br/>I keep going on (and sorry for the length), but I also developed a passion for learning Japanese around that time. This passion was so strong, it led me to pursue some way to make it
                    to Japan. And I am here to this day, still studying, preparing to take the N2 Exam. <br/><br/> In University, I studied Communications on the Production Track. A program
                    that promised to give you the technical and artistic skills to use Audio and Visual equipment and put them to use making films or running live events. <br/><br/>
                    It was a lot of work, especially considering my Japanese Minor on top of everything else. But the efforts were not in vain. I joined the Communications Program's Student Worker program
                    for equipment rentals and maintenance. This was a lot of hands on with using and servicing high-end camera and audio equipment; with the added responsibility of
                    teaching and running workshops for all the technical aspects of the equipment. <br/><br/> But my affinity for programming and technology didn't stop at that time.
                    I couldn't help but notice the inefficiency of the program's rental system. No way to really track lost or damaged equipment - nor ticket issues. On top of that, every rental manually
                    typed and input into a large and hard to read excel document. I started off making automation scripts for the Excel doc, but still imagined it being so much better.
                    That's when I got into React JS development. <br/><br/> I didn't mention earlier, but I had already made and published websites before. Hosting my own sites, grabbing custom domains, creating PHP scripts, and running SQL servers.
                        But the dynamic elements and depth that I wanted to go into for creating the app would be a nightmare to do without a framework. <strong>That's when I found React.</strong>
                    <br/><br/>Not only would react be perfect for the webapp to be deployable and accessible across all devices dynamically, but it would allow me to strengthen my
                    JavaScript skills, but also the existence of React Native allowing me to bring these skills into native cross platform mobile applications. Since finding this framework, I've fallen in love.
                    This website here is entirely written inside the React framework, and I have been working on various web and mobile apps since. <br/><br/> I feel this is already too long, and I've taken up too much of your time -
                    but I appreciate you reading this. I could say so much more, and I still feel like I am missing out on some really important things, but please feel free to reach out to me in the <a href="#contact" className="text-blue-500 font-bold hover:text-blue-400">Contact Me</a> section.
                    I'd love to talk more, nerd out about these things, or just get to know you.<br/><br/></p>

                    <div className="outline-blue-500 outline rounded-xl flex flex-wrap content justify-center mb-6 glass hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all">

                        <p className="text-xl font-bold my-2 mb-2 bg-gradient-to-r from-white to-blue-100/90 bg-clip-text text-transparent text-center">Skills List</p>

                    </div>


                    <div className="my-9 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl px-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,139,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>
                        <div className="my-9 rounded-xl px-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,139,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>

                        <div className="my-4 rounded-xl px-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">IT</h3>
                            <div className="flex flex-wrap gap-2">
                                {itSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,139,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>

                        <div className="my-6 rounded-xl px-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Audio Visual</h3>
                            <div className="flex flex-wrap gap-2">
                                {avSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,139,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>

                        <div className="my-6 rounded-xl px-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Film</h3>
                            <div className="flex flex-wrap gap-2">
                                {filmSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,139,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>

                        <div className="my-6 mb-0 rounded-xl px-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-extrabold mb-4">Soft-Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {softSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,139,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>

                    </div>

                </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/80 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-7 mt-3">Education 🎓</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-3">
                        <li className="border border-8 border-white/0 bg-gray-400/10 hover:translate-x-3 transition-all duration-400 hover:bg-gray-900  rounded-xl">
                            <strong> B.A in Communications Studies</strong> - Temple University, Japan Campus (2021-2024)
                        </li>
                        <li className="font-light hover:translate-x-2 transition-all duration-200">
                            Major Concentration: Production
                        </li>
                        <li className="font-light hover:translate-x-2 transition-all duration-200">
                            Minor: Japanese
                        </li>
                        <li className="font-light hover:translate-x-2 transition-all duration-200">
                            Led Communications Studies Academic Society
                        </li>
                    </ul>

                    <ul className="list-disc list-inside text-gray-300 space-y-3 mt-4">
                        <li className="border border-8 border-white/0 bg-gray-400/10 hover:translate-x-3 transition-all duration-400 hover:bg-gray-900  rounded-xl">
                            <strong>Graphic Communications</strong> - Kellogg Community College (2020-2021 transferred)
                        </li>
                        <li className="font-light hover:translate-x-2 transition-all duration-200">
                            Typography
                        </li>
                        <li className="font-light hover:translate-x-2 transition-all duration-200">
                            Typesetting
                        </li>
                    </ul>

                    <ul className="list-disc list-inside text-gray-300 space-y-3 mt-4">
                        <li className="border border-8 border-white/0 bg-gray-400/10 hover:translate-x-3 transition-all duration-400 hover:bg-gray-900  rounded-xl">
                            <strong>Graphic Communications Technology</strong> - Calhoun Area Career Center (2019-2021)
                        </li>
                        <li className="font-light hover:translate-x-2 transition-all duration-200">
                            Awarded with Academic Excellence
                        </li>
                        <li className="font-light hover:translate-x-2 transition-all duration-200">
                            Printing Processes, Graphics Software/Hardware
                        </li>
                    </ul>

                    <ul className="list-disc list-inside text-gray-300 space-y-3 mt-4">
                        <li className="border border-8 border-white/0 bg-gray-400/10 hover:translate-x-3 transition-all duration-400 hover:bg-gray-900  rounded-xl">
                            <strong>General Studies</strong> - Pennfield Senior High School (2019-2021)
                        </li>
                        <li className="font-light hover:translate-x-2 transition-all duration-200">
                            Studied Various Subjects, from Japanese, to Javascript
                        </li>
                        <li className="font-light hover:translate-x-2 transition-all duration-200">
                            Participated in Broadcasting Class, Beginner and Advanced.
                        </li>
                    </ul>
                    <h3 className="text-2xl font-bold mb-7 my-8">Certifications</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-3">
                        <li className="border border-8 border-white/0 bg-gray-400/10 hover:translate-x-3 transition-all duration-400 hover:bg-gray-900  rounded-xl">
                            <strong>Google IT Support</strong> - Google, Coursera (2025)
                        </li>
                    </ul>

                </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/80 transition-all duration-300">
                        <h3 className="text-2xl font-bold mb-7 mt-3">Work Experience 💼</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-3">
                            <li className="border border-8 border-white/0 bg-gray-400/10 hover:translate-x-3 transition-all duration-400 hover:bg-gray-900  rounded-xl">
                                <strong>Film Equipment Rental Service</strong> - Temple University, Japan Campus (2023-2024)
                            </li>
                            <li className="font-light hover:translate-x-2 transition-all duration-200">
                                Equipment Rental, Repair, Servicing and Educating
                            </li>
                            <li className="font-light hover:translate-x-2 transition-all duration-200">
                                Designed Inventory/Ticketing System with React
                            </li>
                        </ul>

                        <ul className="list-disc list-inside text-gray-300 space-y-3 mt-10">
                            <li className="border border-8 border-white/0 bg-gray-400/10 hover:translate-x-3 transition-all duration-400 hover:bg-gray-900  rounded-xl">
                                <strong>Staff</strong> - Lawson (Jan-Sep 2023)
                            </li>
                            <li className="font-light hover:translate-x-2 transition-all duration-200">
                                Daily Store Operations
                            </li>
                            <li className="font-light hover:translate-x-2 transition-all duration-200">
                                Verbal/Written Japanese Communication
                            </li>
                        </ul>

                        <ul className="list-disc list-inside text-gray-300 space-y-3 mt-10">
                            <li className="border border-8 border-white/0 bg-gray-400/10 hover:translate-x-3 transition-all duration-400 hover:bg-gray-900  rounded-xl">
                                <strong>CS: Tech Support Desk</strong> - Dematic (May-Dec 2022)
                            </li>
                            <li className="font-light hover:translate-x-2 transition-all duration-200">
                                Remote Customer Support
                            </li>
                            <li className="font-light hover:translate-x-2 transition-all duration-200">
                                Problem Solving, Teamwork, Salesforce ticketing
                            </li>
                        </ul>
                        <ul className="list-disc list-inside text-gray-300 space-y-3 mt-10">
                            <li className="border border-8 border-white/0 bg-gray-400/10 hover:translate-x-3 transition-all duration-400 hover:bg-gray-900  rounded-xl">
                                <strong>Shift Lead</strong> - Disc Traders (Jan-Aug 2021)
                            </li>
                            <li className="font-light hover:translate-x-2 transition-all duration-200">
                                Store & Inventory Management, Sales Docs
                            </li>
                            <li className="font-light hover:translate-x-2 transition-all duration-200">
                                Internet Advertisement Campaign Management
                            </li>
                        </ul>
                        <ul className="list-disc list-inside text-gray-300 space-y-3 mt-10">
                            <li className="border border-8 border-white/0 bg-gray-400/10 hover:translate-x-3 transition-all duration-400 hover:bg-gray-900  rounded-xl">
                                <strong>Intern</strong> - AccessVision (Jan-Jun 2021)
                            </li>
                            <li className="font-light hover:translate-x-2 transition-all duration-200">
                                Hands-On w/ AV and Broadcasting Equipment
                            </li>
                            <li className="font-light hover:translate-x-2 transition-all duration-200">
                                (Award-Winning) School Advertisement Production
                            </li>
                        </ul>

                    </div>

            </div>

            </div>


        </section>

    )
}