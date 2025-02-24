import { link } from "fs";
import { url } from "inspector";

// Navigation Items
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

// Grid Items
export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/charindu.svg",
  },
  {
    id: 2,
    title: "I'm flexible with time zone communication.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly strive to improve.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "E-commerce site using next.js",
    description: "The Inside Scoop.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
  },
];

// Projects
export const projects = [
  {
    id: 1,
    title: "Virtual Build Tools Landing Page",
    des: "Developed using React, JavaScript ES6, and Tailwind CSS for a modern and responsive design.",
    img: "/p11.svg",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://virtual-ir-landing-git-e87144-charindu-bandaranayakes-projects.vercel.app/", //live link
    git: 'https://github.com/charindu24/VirtualRLandingPage' // GitHub repository link
  },
  {
    id: 1,
    title: "NextCart E-Commerce Webstie",
    des: "Developed using MERN Stack, JavaScript ES7, and Tailwind CSS for a modern and responsive design.",
    img: "/NextCart.svg",
    iconLists: ["/re.svg", "/exp1.svg", "/node-js.svg", "/mongodb.svg", "/tail.svg", "cloud.svg",],
    link: "https://drive.google.com/file/d/1mgxBpPQEu-TyDDkadQID8eBzP0AWcnr_/view?usp=drive_link", //live link
    git: 'https://github.com/charindu24/FullStack_E-Commerce_Site24' // GitHub repository link
  },
  {
    id: 1,
    title: "VibeChat-Real-time chating app-MERN",
    des: "VibeChat is a real-time messaging app built with the MERN stack, featuring secure JWT authentication, Socket.io for instant chats, and a sleek Tailwind CSS UI. Designed for speed, security, and scalability..",
    img: "/vibechat.svg",
    iconLists: ["/re.svg", "/exp1.svg", "/node-js.svg", "/mongodb.svg", "/tail.svg"],
    link: "#", //live link
    git: 'https://github.com/charindu24/ChatAppMERN' // GitHub repository link
  }
  
];

// Testimonials
export const testimonials = [
  {
    quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  // Repeat for more testimonials or consider extracting to a loop if they are similar.
];

// Companies
export const companies = [
  {
    id: 1,
    name: "Cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Hostinger",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "Docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

// Work Experience
export const workExperience = [
  {
    id: 1,
    title: "Trainee Software Developer",
    desc: "Assisted in developing a web platform using React.js, improving interactivity with dynamic components and state management.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "System Support Engineer",
    desc: "Provided technical support, resolved system issues, and maintained IT infrastructure to ensure smooth operations and user satisfaction.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "IT and Marketing Executive",
    desc: "Managed IT operations and developed marketing strategies to drive business growth and enhance digital presence.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  }
  
];

// Social Media Links
export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/charindu24",

  },
  {
    id: 2,
    img: "/facebook.svg",
    url: "https://www.facebook.com/Charindu07",
  },
  {
    id: 3,
    img: "/link.svg",
    url:"https://www.linkedin.com/in/charindubandaranayake",
  },
  {
    id: 4,
    img: "/instagram.svg",
    url:"https://www.instagram.com/charindu.cdb/"
  },
];
