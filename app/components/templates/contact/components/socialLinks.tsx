import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Social } from "../socials";

type SocialLinksProps = {
  socials: Social[];
  selectedSocial: number | null;
  setSelectedSocial: (index: number | null) => void;
};

export default function SocialLinks({ socials, selectedSocial, setSelectedSocial }: SocialLinksProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="grid sm:grid-cols-2 gap-4"
    >
      {socials.map((social, index) => (
        <motion.div
          key={social.handle}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative"
          onHoverStart={() => setSelectedSocial(index)}
          onHoverEnd={() => setSelectedSocial(null)}
        >
          <Link
            href={social.href}
            target="_blank"
            className={`block p-6 rounded-xl bg-[rgba(20,0,50,0.5)] 
              backdrop-blur-sm border border-purple-500/20 
              hover:border-purple-400/40 transition-all duration-300
              ${social.color}`}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-[rgba(0,0,30,0.5)] border border-purple-500/30">
                {social.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white">{social.label}</h3>
                <p className="text-sm text-gray-400">{social.handle}</p>
              </div>
            </div>
            <AnimatePresence>
              {selectedSocial === index && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-4 text-sm text-gray-300"
                >
                  {social.description}
                </motion.p>
              )}
            </AnimatePresence>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}