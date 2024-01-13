import { FC, PropsWithChildren, useState } from "react";
import "../../app/styles.css";
import { CiCirclePlus } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { GiTimeTrap } from "react-icons/gi";
import { FcDocument } from "react-icons/fc";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { X } from 'lucide-react';
import Image from "next/image"

const Icon: FC<PropsWithChildren> = ({ children }) => (
  <span className="material-symbols-outlined">{children}</span>
);

export const CustomButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={`fab ${isOpen ? "open" : ""}`}>
        <button onClick={() => setIsOpen(!isOpen)}>
          <Icon>
            <CiCirclePlus />
          </Icon>
        </button>
        <div className="menu">
          <button>
            <Icon>
              <Link href="https://github.com/jerangel1">
                <LuGithub />
              </Link>
            </Icon>
          </button>
          <button className="resumen">
            <Icon>
              <Link href="https://flowcv.com/resume/kt73uigelr">
                <FcDocument />
              </Link>
            </Icon>
          </button>
          <button className="older portfolios" onClick={openModal}>
            <Icon>
              <GiTimeTrap />
            </Icon>
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal
  show={isModalOpen}
  onHide={closeModal}
  centered
  style={{
    position: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundImage:
      "linear-gradient(to top left, black, zinc-600 20%, black)",
    backdropFilter: "blur(5px)",
    overflow: "hidden",
    borderRadius: 20,
  }}
>
  {/* Contenido del modal */}
  <div
  className="flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[460px] z-[-1]"
  style={{
    width: "100%",
    height: "100%",
    padding: "100px",
    marginTop: "145px",
  }}
>
  <Link
    href="https://jerangel1.github.io/Portfolio/"
    target="_blank"
    rel="noopener noreferrer"
    passHref
  >
    <div className="gap-2 p-5 flex-col text-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-400 hover:dark:bg-neutral-800/30 mt-4">
  <p className="font-mono text-center">Go back in time?</p>
  <p className="font-mono items-center justify-center text-center mt-4">
    Portfolio V-1
  </p>
  <div className="flex items-center justify-center">
    <div className="flex items-center justify-center">
      <Image
        src="/portfolioV1.jpg"
        width={200}
        height={200}
        alt="Portfolio Jerangel V-1"
      />
    </div>
  </div>
</div>
  </Link>
</div>
<Modal.Footer className="flex justify-center items-center text-center">
  <Button variant="secondary" onClick={closeModal}>
    <X />
  </Button>
</Modal.Footer>
</Modal>
    </>
  );
};
