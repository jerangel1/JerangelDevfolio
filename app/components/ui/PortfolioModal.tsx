import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Link from "next/link";
import Particles from "../particles";

interface PortfolioModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const PortfolioModal = ({ isOpen, onClose }: PortfolioModalProps) => (
    <Modal
        show={isOpen}
        onHide={onClose}
        centered
        size="xl"
        className="fixed inset-0 z-50"
        contentClassName="bg-transparent border-none modal-content-custom w-full h-screen"
    >
        <div className="relative min-h-[80vh] bg-gradient-to-tr 
                    from-black/95 via-[#000022]/60 to-[#000066]/30
                    backdrop-blur-xl rounded-2xl
                    border border-white/10
                    shadow-lg shadow-blue-500/10">
            <Particles className="absolute inset-0 -z-10" quantity={500} />

            <div className="flex flex-col items-center justify-center 
                        p-4 md:p-8 lg:p-12 space-y-6 md:space-y-8">
                {/* Título principal */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold
                           text-center mb-2 md:mb-4
                           bg-clip-text text-transparent 
                           bg-gradient-to-r from-white to-blue-500">
                    Portfolio Evolution
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
                    {/* Portfolio V1 */}
                    <Link
                        href="https://jerangel1.github.io/Portfolio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-xl p-4 md:p-6
                               backdrop-blur-md bg-black/30 
                               border border-white/10
                               shadow-lg shadow-blue-500/10 
                               transition-all duration-300
                               hover:bg-black/40 hover:scale-105"
                    >
                        <h3 className="text-lg md:text-xl font-bold text-center mb-3
                                   bg-clip-text text-transparent 
                                   bg-gradient-to-r from-white to-blue-500">
                            Portfolio V1
                        </h3>

                        <div className="relative aspect-video rounded-lg overflow-hidden
                                    border border-white/10">
                            <Image
                                src="/portfolioV1.jpg"
                                fill
                                className="object-cover"
                                alt="Portfolio V1"
                            />
                        </div>

                        <p className="mt-3 text-sm text-gray-300 text-center">
                            Mi primer portfolio - Junio 2023
                        </p>
                    </Link>

                    {/* Portfolio V2 (Actual) */}
                    <Link
                        href="/"
                        className="group rounded-xl p-4 md:p-6
                               backdrop-blur-md bg-black/30 
                               border border-white/10
                               shadow-lg shadow-blue-500/10 
                               transition-all duration-300
                               hover:bg-black/40 hover:scale-105"
                    >
                        <h3 className="text-lg md:text-xl font-bold text-center mb-3
                                   bg-clip-text text-transparent 
                                   bg-gradient-to-r from-white to-blue-500">
                            Portfolio V2
                        </h3>

                        <div className="relative aspect-video rounded-lg overflow-hidden
                                    border border-white/10">
                            <Image
                                src="/PorfolioV2.png"
                                fill
                                className="object-cover"
                                alt="Portfolio V2"
                            />
                        </div>

                        <p className="mt-3 text-sm text-gray-300 text-center">
                            Portfolio actual - 2024
                        </p>
                    </Link>
                </div>
            </div>

            {/* Botón de cerrar */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <Button
                    variant="secondary"
                    onClick={onClose}
                    className="px-6 py-2 rounded-full
                           bg-black/30 backdrop-blur-md
                           border border-white/10 
                           shadow-lg shadow-blue-500/10
                           transition-all duration-300 
                           hover:bg-black/40 hover:scale-105
                           text-white/80 hover:text-white"
                >
                    Cerrar
                </Button>
            </div>
        </div>
    </Modal>
);