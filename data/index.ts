import { FaGithub, FaLinkedin } from "react-icons/fa6";
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
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
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
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
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-commerce",
    des: "Building E-commerce with admin dashboard and realtime notifications ",
    img: "/ecomerce.png",
    iconLists: [
      "re.svg",
      "tail.svg",
      "edux.svg",
      "mongodb.svg",
      "express.svg",
      "socketio.svg",
    ],
    link: "https://mhpshop-rlks.onrender.com/",
  },
  {
    id: 2,
    title: "Airbnb clone ",
    des: "This Airbnb clone is a full-stack web application that replicates the core functionality of the popular vacation rental platform. The project allows users to browse, book, and list properties while providing hosts with tools to manage their listings.",
    img: "airbnb.png",
    iconLists: ["next.svg", "tail.svg", "prisma.svg", "redux.svg"],
    link: "https://airbnb-clone-rose-psi-61.vercel.app/",
  },
  {
    id: 3,
    title: "Messenger Clone",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/messenger.png",
    iconLists: [
      "next.svg",
      "tail.svg",
      "oAuth.svg",
      "prisma.svg",
      "mongodb.svg",
    ],
    link: "https://messenger-clone-inx2st53d-ramezgamel.vercel.app/",
  },
  {
    id: 4,
    title: "Movie App",
    des: "Movie App to see latest movies and show with some information and rating.",
    img: "movieApp.png",
    iconLists: ["angular.svg", "bootstrap.svg", "/firebase.svg"],
    link: "https://ramezgamel.github.io/movieApp/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "cloud.svg",
    nameImg: "portfolio/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "app.svg",
    nameImg: "portfolio/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "host.svg",
    nameImg: "portfolio/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "s.svg",
    nameImg: "portfolio/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "dock.svg",
    nameImg: "portfolio/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "exp1.svg",
  },
  {
    id: 2,
    title: "Build responsive web app",
    desc: "Designed and developed web app using Nextjs.",
    className: "md:col-span-2",
    thumbnail: "exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a web app for a client, from initial concept to deployment.",
    className: "md:col-span-2",
    thumbnail: "exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/ramezgamel",
    icon: FaGithub,
  },
  {
    id: 2,
    link: "https://linkedin.com/in/ramez-gamel",
    icon: FaLinkedin,
  },
];
