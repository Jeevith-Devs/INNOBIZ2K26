/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target Date: January 29, 2026 09:00:00
    const targetDate = new Date('2026-01-29T09:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num < 10 ? `0${num}` : num;

  return (
    <section className="py-20 bg-black relative overflow-hidden text-orange-500 border-y-4 border-orange-600/50">
      {/* Background Grid & Noise */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,165,0,0.06),rgba(255,165,0,0.02))] bg-[length:100%_4px,6px_100%] pointer-events-none z-0"></div>
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/80 to-black z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-20 text-center">
        <div className="flex items-center justify-center gap-4 mb-12">
           <AlertTriangle className="w-8 h-8 md:w-10 md:h-10 text-orange-600 animate-pulse" />
           <h3 className="font-military text-3xl md:text-5xl uppercase tracking-[0.2em] text-orange-600 drop-shadow-[0_0_15px_rgba(234,88,12,0.8)]">
             Event Initiation
           </h3>
           <AlertTriangle className="w-8 h-8 md:w-10 md:h-10 text-orange-600 animate-pulse" />
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {[
            { label: 'DAYS', value: timeLeft.days },
            { label: 'HOURS', value: timeLeft.hours },
            { label: 'MINUTES', value: timeLeft.minutes },
            { label: 'SECONDS', value: timeLeft.seconds }
          ].map((unit, index) => (
            <div key={unit.label} className="relative group">
              <div className="bg-gray-900/80 border-2 border-orange-900/50 rounded-lg p-6 md:p-8 min-w-[140px] md:min-w-[180px] shadow-[0_0_30px_rgba(234,88,12,0.2)] group-hover:border-orange-500/50 transition-colors duration-300">
                <div className="font-digital text-5xl md:text-8xl font-black text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.8)] tabular-nums tracking-wider">
                  {formatNumber(unit.value)}
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-orange-600 rounded-full animate-ping"></div>
              </div>
              <div className="mt-4 font-military text-orange-700/80 text-lg md:text-xl tracking-widest uppercase">
                {unit.label}
              </div>
            </div>
          ))}
        </div>
        
        <p className="mt-12 font-digital text-orange-400/60 text-sm md:text-base uppercase tracking-widest animate-pulse">
          /// SYSTEM SYNCHRONIZED : PALANI MURUGAN HALL ///
        </p>
      </div>
    </section>
  );
};

export default Countdown;