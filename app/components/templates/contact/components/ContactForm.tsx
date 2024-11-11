import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 rounded-xl bg-gradient-to-br from-purple-950/50 via-slate-900/50 to-black/50 
        backdrop-blur-sm border border-purple-500/20"
        >
            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg bg-black/50 border border-purple-500/30 
                    focus:border-purple-400 focus:ring-1 focus:ring-purple-400 
                    text-white placeholder-gray-500"
                        placeholder="Your name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 rounded-lg bg-black/50 border border-purple-500/30 
                    focus:border-purple-400 focus:ring-1 focus:ring-purple-400 
                    text-white placeholder-gray-500"
                        placeholder="your@email.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                    </label>
                    <textarea
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg bg-black/50 border border-purple-500/30 
                    focus:border-purple-400 focus:ring-1 focus:ring-purple-400 
                    text-white placeholder-gray-500"
                        placeholder="Your message..."
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 
                  text-white font-medium transition-colors duration-300
                  flex items-center justify-center gap-2"
                >
                    <Send size={20} />
                    Send Message
                </button>
            </form>
        </motion.div>
    );
}