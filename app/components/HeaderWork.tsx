import { motion } from 'framer-motion';

export const HeaderWork = () => {
  return (
    <div className="container px-6 pt-24 mx-auto max-w-7xl lg:px-8 mb-15">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Lottie Animation */}
        <motion.div
          className="flex items-center justify-center h-40 md:h-48 lg:h-56
                             animate-float"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <iframe
            src="https://lottie.host/embed/3945cf96-0368-4bf5-b18e-fde844ca8201/kwqjXGwoDk.json"
            className="w-full h-full"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold 
                     bg-clip-text text-transparent 
                     bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400
                     drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]
                     my-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          From Explorer

          to Developer

        </motion.h1>

        {/* Description */}
        <motion.p
          className="mt-6 text-xl md:text-2xl text-zinc-300/80
                             max-w-2xl mx-auto leading-relaxed
                             backdrop-blur-sm bg-black/10 rounded-xl p-4
                             border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Embark on my transformative journey through{" "}
          <span className="text-blue-400">global adventures</span>,{" "}
          <span className="text-purple-400">business innovation</span>, and{" "}
          <span className="text-blue-400">digital creation</span>.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HeaderWork;