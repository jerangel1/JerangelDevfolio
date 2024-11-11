import { motion } from "framer-motion";

export default function ContactHeader() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
        >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold 
        bg-clip-text text-transparent 
        bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
                Let's Connect
            </h1>
            <p className="text-gray-300 text-lg">
                Choose your preferred way to reach out or send me a direct message
            </p>
        </motion.div>
    );
}