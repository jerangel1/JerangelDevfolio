import { Mail, Linkedin, Github } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { Social } from "../socials";

export const socials: Social[] = [

    {
      icon: <BsTwitterX size={24} />,
      href: "https://twitter.com/jerangel1",
      label: "Twitter",
      handle: "@Jerangel1",
      color: "hover:text-blue-400",
      description: "Follow me for tech insights and updates"
    },
    {
      icon: <Mail size={24} />,
      href: "mailto:jerangel1691@gmail.com",
      label: "Email",
      handle: "jerangel1691@gmail.com",
      color: "hover:text-red-400",
      description: "Let's discuss your next project"
    },
    {
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/jerangel1/",
      label: "LinkedIn",
      handle: "Jerangel1",
      color: "hover:text-blue-500",
      description: "Connect with me professionally"
    },
    {
      icon: <Github size={24} />,
      href: "https://github.com/jerangel1",
      label: "GitHub",
      handle: "jerangel1",
      color: "hover:text-purple-400",
      description: "Check out my open source work"
    }
  ];