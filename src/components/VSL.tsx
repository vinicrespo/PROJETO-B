/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function VSL() {
  return (
    <section id="vsl" className="bg-black py-6 px-2 overflow-hidden">
      <div className="max-w-[420px] mx-auto relative aspect-[9/16] bg-[#0a0a0a] border-4 border-[#1a1a1a] rounded-lg overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        {/* Placeholder for video embed */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/50 to-black/80">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <div className="bg-[#e33036] rounded-full w-20 h-20 flex items-center justify-center shadow-[0_0_30px_rgba(227,48,54,0.3)] border-2 border-white/20 backdrop-blur-sm group">
              <Play className="w-8 h-8 text-white fill-white ml-1 transition-transform group-hover:scale-110" />
            </div>
          </motion.div>
        </div>
        
        {/* Progress bar placeholder at the bottom */}
        <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "33%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="h-full bg-[#e33036]"
          />
        </div>
      </div>
    </section>
  );
}
