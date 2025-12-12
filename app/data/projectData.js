import AibImage from '../assets/aib.png'
import SyncSkillsImage from '../assets/synscSkills.png'
import AutomateImage from '../assets/automate.png'

export const projects = [
       {
        id: 5,
        name: "The Omoriwo's Wedding",
        myRole: 'Creative Developer',
        year: "2024",
        brief: "I need a portfolio, and I want it to be creative.",
        overview: "A portfolio for a software developer, featuring horizontal scroll, animations, and micro-interactions.",
        featureImage: AibImage,
        stack: ["Next.js", "JavaScript", "GSAP", "CSS"],
        liveSite: "https://akinolaifeoluwa.vercel.app/"
    },
    {
        id: 4,
        name: 'The AIB Portfolio',
        myRole: 'Creative Developer',
        year: "2024",
        brief: "I need a portfolio, and I want it to be creative.",
        overview: "A portfolio for a software developer, featuring horizontal scroll, animations, and micro-interactions.",
        featureImage: AibImage,
        stack: ["Next.js", "JavaScript", "GSAP", "CSS"],
        liveSite: "https://akinolaifeoluwa.vercel.app/"
    },
    {
        id: 3,
        name: 'PostaBox',
        myRole: 'Frontend Engineer',
        year: "2023", 
        brief: "Let's build a B2B email marketing application like mailchimp.",
        overview: "This was the project that got me a promotion from Intern to Junior Frontend Developer. Built with scale in mind, the PostaBox application featured several marketing landing pages and the core app. The core app, built with Next.js had an auth service, email template management system, email client, email outbox system, recipients management system, etc.",
        featureImage: AibImage,
        stack: ["Next.js", "JavaScript", "GSAP", "Framer Motion", "CSS"],
        liveSite: "https://akinolaifeoluwa.vercel.app/" // edit this
    },
    {
        id: 2,
        name: "SyncSkills",
        myRole: "Frontend Developer",
        year: "2023",
        brief: "Come up with a fresh landing page idea for SyncSkills.",
        overview: "A fresh perspective to the SyncSkills landing page. Built for the love of the game.",
        featureImage: SyncSkillsImage,
        stack: ["Next.js", "JavaScript", "CSS"],
        liveSite: "https://syncskills.vercel.app/"
    },
    {
        id: 1,
        name: 'Automate',
        myRole: 'Frontend Developer',
        year: "2023",
        brief: "Can you create a landing page exploration for a car company?",
        overview: "I love cars - from the sound of them, to the unique body builds, and to them racing each other. Built solely to practice conceptualizing clean and minimal designs, while executing some css-only animated interactions and scroll triggers.",
        featureImage: AutomateImage,
        stack: ["React", "JavaScript", "CSS"],
        liveSite: "http://auto-mate.vercel.app/"
    }
]