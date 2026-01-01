/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle } from 'lucide-react';

const ChiefGuest: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-heading text-4xl font-bold mb-16">Guest of <span className="text-orange-600">Honor</span></h2>
        
        <motion.div 
          className="relative max-w-md mx-auto aspect-[3/4] rounded-2xl bg-gray-100 flex flex-col items-center justify-center border-2 border-dashed border-gray-300"
          animate={{ borderColor: ['#e5e7eb', '#f97316', '#e5e7eb'] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
             <UserCircle className="w-32 h-32 text-gray-300 mb-6" />
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-400 uppercase tracking-widest">Coming Soon</h3>
          <p className="mt-2 text-gray-400">Stay Tuned for the Reveal</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ChiefGuest;