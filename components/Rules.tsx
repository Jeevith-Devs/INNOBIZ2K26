/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Rules: React.FC = () => {
  const rules = [
    "Valid College ID card is mandatory for all participants.",
    "Maximum team size as per individual event rules.",
    "Decision of the judges will be final and binding.",
    "Participants must report to the venue 30 mins prior.",
    "Certificates will be provided to all registered participants.",
    "Registration is completely FREE."
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-heading font-bold mb-12 text-center">General <span className="text-orange-500">Guidelines</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rules.map((rule, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
            >
              <CheckCircle className="w-6 h-6 text-green-400 shrink-0" />
              <p className="text-gray-300 font-medium">{rule}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rules;