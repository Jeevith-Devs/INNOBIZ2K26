/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      gsap.fromTo(el.children, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={textRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-4">About The Symposium</h2>
            <h3 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Where Technology Meets <span className="text-yellow-600">Business Strategy</span>
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              InnoBiz 2K26 is a premier national-level technical symposium organized by the Department of Computer Science & Business Systems at Vel Tech Multi Tech.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We bring together the brightest minds to compete, innovate, and solve real-world problems through a blend of technical expertise and business acumen. Join us for a day of intense competition and learning.
            </p>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
             <img 
               src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop" 
               alt="Conference" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
             <div className="absolute bottom-6 left-6 text-white">
               <div className="text-3xl font-bold">2000+</div>
               <div className="text-sm opacity-80 uppercase tracking-widest">Expected Footfall</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;