import { FC, PropsWithChildren, useState } from "react";
import "../../app/styles.css";
import { CiCirclePlus } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { GiTimeTrap } from "react-icons/gi";
import { FcDocument } from "react-icons/fc";
import Link from "next/link"

const Icon: FC<PropsWithChildren> = ({ children }) => (
  <span className="material-symbols-outlined">{children}</span>
);

export const Button = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={`fab ${isOpen ? "open" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <Icon><CiCirclePlus /></Icon>
      </button>
      <div className="menu">
        <button>
          <Icon><Link href="https://github.com/jerangel1"><LuGithub /></Link></Icon>
        </button>
        <button>
          <Icon><Link href="https://flowcv.com/resume/kt73uigelr"><FcDocument /></Link></Icon>
        </button>
        <button>
          <Icon><Link href="https://jerangel1.github.io/Portfolio/"><GiTimeTrap /></Link></Icon>
        </button>
      </div>
    </div>
  );
};