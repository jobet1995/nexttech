import {
  Code,
  Cloud,
  Cpu,
  Smartphone,
  Linkedin,
  Github,
  Twitter,
  LayoutGrid,
  Database,
  Server,
  PenTool,
  Bot,
} from "lucide-react";
import type {
  NavLink,
  Service,
  Project,
  Testimonial,
  TeamMember,
  JobOpening,
  TechStackItem,
} from "./definitions";
import { PlaceHolderImages } from "./placeholder-images";

const findImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) throw new Error(`Image with id "${id}" not found.`);
  return { src: image.imageUrl, hint: image.imageHint };
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export const services: Service[] = [
  {
    icon: Code,
    title: "Web Development",
    slug: "web-development",
    description:
      "Building responsive, high-performance websites and web applications tailored to your business needs.",
    longDescription:
      "Our web development services focus on creating robust, scalable, and secure applications. We use modern technologies like Next.js, TypeScript, and various backend solutions to deliver products that excel in performance and user experience. From simple landing pages to complex enterprise-level applications, we cover the entire development lifecycle.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description:
      "Leveraging cloud platforms like AWS and Azure for scalable, secure, and reliable infrastructure.",
    longDescription:
      "We help businesses migrate to the cloud, optimize their existing cloud infrastructure, and build cloud-native applications. Our expertise covers major providers like AWS, Google Cloud, and Azure. We focus on creating cost-effective, secure, and highly available solutions that support your business growth.",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    slug: "ai-integration",
    description:
      "Integrating cutting-edge AI and machine learning models to automate processes and derive insights.",
    longDescription:
      "Unlock the power of Artificial Intelligence for your business. We specialize in integrating advanced AI and Machine Learning models into your existing systems to automate workflows, provide predictive analytics, and create intelligent products. Our team can help you with natural language processing, computer vision, and more.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    slug: "mobile-apps",
    description:
      "Designing and developing intuitive native and cross-platform mobile applications for iOS and Android.",
    longDescription:
      "We build beautiful and performant mobile applications for both iOS and Android. Using technologies like React Native and native development tools, we create apps that offer a seamless user experience. From concept to launch, we guide you through the entire process of bringing your mobile app idea to life.",
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "E-commerce Platform",
    category: "Web Development",
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    description:
      "A full-featured e-commerce platform with a custom CMS, payment integration, and advanced analytics for a major retail client.",
    image: { ...findImage("project-1"), width: 600, height: 400 },
  },
  {
    id: "proj-2",
    title: "Data Analytics Dashboard",
    category: "Cloud Solutions",
    techStack: ["React", "AWS Lambda", "Redshift", "D3.js"],
    description:
      "A serverless data analytics dashboard providing real-time insights and visualizations for a financial services company.",
    image: { ...findImage("project-2"), width: 600, height: 400 },
  },
  {
    id: "proj-3",
    title: "AI-Powered Chatbot",
    category: "AI Integration",
    techStack: ["Python", "TensorFlow", "Flask", "React"],
    description:
      "An intelligent customer service chatbot that resolves 80% of user queries automatically, improving user satisfaction.",
    image: { ...findImage("project-3"), width: 600, height: 400 },
  },
  {
    id: "proj-4",
    title: "Fitness Tracking App",
    category: "Mobile Apps",
    techStack: ["React Native", "Firebase", "GraphQL"],
    description:
      "A cross-platform mobile app for tracking workouts, setting goals, and connecting with a community of fitness enthusiasts.",
    image: { ...findImage("project-4"), width: 600, height: 400 },
  },
  {
    id: "proj-5",
    title: "Cloud Migration for SaaS",
    category: "Cloud Solutions",
    techStack: ["Azure", "Docker", "Kubernetes", "Terraform"],
    description:
      "A comprehensive cloud migration project for a B2B SaaS provider, resulting in a 40% reduction in operational costs.",
    image: { ...findImage("project-5"), width: 600, height: 400 },
  },
  {
    id: "proj-6",
    title: "Real-time Translation Service",
    category: "AI Integration",
    techStack: ["Genkit", "Next.js", "Node.js", "WebSocket"],
    description:
      "A real-time translation service integrated into a video conferencing platform, supporting over 20 languages.",
    image: { ...findImage("project-6"), width: 600, height: 400 },
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "NextTech Innovations transformed our digital presence. Their team is professional, dedicated, and incredibly talented. The results exceeded all our expectations.",
    author: {
      name: "Sarah Johnson",
      title: "CEO, Innovate Inc.",
      avatar: findImage("testimonial-avatar-1"),
    },
  },
  {
    quote:
      "Working with NextTech has been a game-changer for our cloud infrastructure. Their expertise in AWS is unmatched, providing us with a scalable and cost-effective solution.",
    author: {
      name: "David Lee",
      title: "CTO, Enterprise Solutions",
      avatar: findImage("testimonial-avatar-2"),
    },
  },
  {
    quote:
      "The mobile app they developed for us is a masterpiece of design and functionality. User engagement has skyrocketed since launch. Highly recommended!",
    author: {
      name: "Maria Garcia",
      title: "Founder, Startup Hub",
      avatar: findImage("testimonial-avatar-3"),
    },
  },
];

export const team: TeamMember[] = [
  {
    name: "Jane Doe",
    role: "Founder & CEO",
    bio: "Visionary leader with 20+ years of experience in the tech industry, driving innovation and strategic growth.",
    image: findImage("team-member-1"),
  },
  {
    name: "John Smith",
    role: "Chief Technology Officer",
    bio: "A technology guru specializing in scalable systems and AI, passionate about solving complex engineering challenges.",
    image: findImage("team-member-2"),
  },
  {
    name: "Emily White",
    role: "Head of Design",
    bio: "Award-winning designer with a keen eye for user-centric design and creating delightful digital experiences.",
    image: findImage("team-member-3"),
  },
  {
    name: "Michael Brown",
    role: "Director of Engineering",
    bio: "Expert in agile methodologies and leading high-performing engineering teams to deliver exceptional products.",
    image: findImage("team-member-4"),
  },
];

export const jobOpenings: JobOpening[] = [
  {
    title: "Senior Frontend Engineer",
    location: "Remote",
    type: "Full-time",
    description:
      "We are looking for a skilled frontend engineer to build and maintain our client-facing applications. Must be proficient in React and TypeScript.",
  },
  {
    title: "Cloud Architect",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Design and implement scalable, secure cloud infrastructure on AWS/Azure. AWS Certified Solutions Architect is a plus.",
  },
  {
    title: "UX/UI Designer",
    location: "Remote",
    type: "Contract",
    description:
      "Join our design team to create intuitive and beautiful interfaces for our web and mobile apps. Portfolio required.",
  },
  {
    title: "AI/ML Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Develop and deploy machine learning models to solve real-world problems. Experience with Python and TensorFlow/PyTorch is essential.",
  },
];

export const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com" },
  { name: "GitHub", icon: Github, url: "https://github.com" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
];

export const techStack: TechStackItem[] = [
  { name: "React", icon: Code },
  { name: "Next.js", icon: LayoutGrid },
  { name: "Node.js", icon: Server },
  { name: "PostgreSQL", icon: Database },
  { name: "AWS", icon: Cloud },
  { name: "Figma", icon: PenTool },
  { name: "Genkit", icon: Bot },
];
