/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Award, Medal } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PrizeCard: React.FC<{ title: string; first: number; second: number; third: number; delay: number }> = ({ title, first, second, third, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: delay,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        }
      });
      
      // Animate numbers
      [first, second, third].forEach((val, i) => {
        gsap.fromTo(`.count-${title.replace(/\s/g, '')}-${i}`, 
          { innerText: 0 },
          {
            innerText: val,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 80%",
            }
          }
        );
      });
    }, cardRef);

    return () => ctx.revert();
  }, [first, second, third, title, delay]);

  return (
    <div ref={cardRef} className="bg-white rounded-3xl p-8 shadow-xl border-2 border-orange-100 hover:border-orange-300 transition-colors">
      <h3 className="font-heading text-2xl font-bold mb-8 text-center uppercase tracking-wider text-gray-800 border-b-2 border-dashed border-gray-100 pb-4">{title}</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-5 bg-gradient-to-r from-yellow-50 to-white rounded-2xl border border-yellow-200 shadow-sm">
           <div className="flex items-center gap-4">
             <div className="p-3 bg-yellow-100 rounded-full text-yellow-600">
               <Trophy className="w-6 h-6" />
             </div>
             <div>
                <span className="block text-xs font-bold uppercase text-yellow-600 tracking-wider">Winner</span>
                <span className="font-bold text-gray-800 text-lg">1st Prize</span>
             </div>
           </div>
           <div className="text-3xl font-black text-gray-900 tracking-tight">₹<span className={`count-${title.replace(/\s/g, '')}-0`}>0</span></div>
        </div>

        <div className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200 shadow-sm">
           <div className="flex items-center gap-4">
             <div className="p-3 bg-gray-100 rounded-full text-gray-500">
               <Award className="w-6 h-6" />
             </div>
             <div>
                <span className="block text-xs font-bold uppercase text-gray-500 tracking-wider">Runner Up</span>
                <span className="font-bold text-gray-800 text-lg">2nd Prize</span>
             </div>
           </div>
           <div className="text-3xl font-black text-gray-900 tracking-tight">₹<span className={`count-${title.replace(/\s/g, '')}-1`}>0</span></div>
        </div>

        <div className="flex items-center justify-between p-5 bg-gradient-to-r from-orange-50 to-white rounded-2xl border border-orange-200 shadow-sm">
           <div className="flex items-center gap-4">
             <div className="p-3 bg-orange-100 rounded-full text-orange-600">
               <Medal className="w-6 h-6" />
             </div>
             <div>
                <span className="block text-xs font-bold uppercase text-orange-600 tracking-wider">Runner Up</span>
                <span className="font-bold text-gray-800 text-lg">3rd Prize</span>
             </div>
           </div>
           <div className="text-3xl font-black text-gray-900 tracking-tight">₹<span className={`count-${title.replace(/\s/g, '')}-2`}>0</span></div>
        </div>
      </div>
    </div>
  );
};

const PrizePool: React.FC = () => {
  return (
    <section id="prizes" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-center font-heading text-4xl md:text-5xl font-bold mb-16 text-gray-900">
          Prize <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-500">Pool</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <PrizeCard title="Technical" first={3000} second={2000} third={1000} delay={0} />
          <PrizeCard title="Non Technical" first={2000} second={1000} third={500} delay={0.2} />
        </div>
      </div>
    </section>
  );
};

export default PrizePool;