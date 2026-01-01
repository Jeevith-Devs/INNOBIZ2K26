/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Phone, User } from 'lucide-react';

const Coordinators: React.FC = () => {
  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center font-heading text-4xl font-bold mb-16 text-gray-900">
          Meet The <span className="text-orange-600">Team</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Faculty */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-orange-100">
            <h3 className="font-heading text-2xl font-bold mb-6 text-orange-600 border-b border-orange-100 pb-4">
              Faculty Coordinators
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                   <User size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-lg text-gray-900">C.S. Sasikala</h4>
                   <p className="text-sm text-gray-500 font-medium">Dept of CSBS</p>
                   <div className="flex items-center gap-2 mt-1 text-gray-600">
                     <Phone size={14} />
                     <span>+91 95006 19895</span>
                   </div>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                   <User size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-lg text-gray-900">Anthony Mutharasan .S</h4>
                   <p className="text-sm text-gray-500 font-medium">Dept of CSBS</p>
                   <div className="flex items-center gap-2 mt-1 text-gray-600">
                     <Phone size={14} />
                     <span>+91 99941 34713</span>
                   </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Students */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-orange-100">
            <h3 className="font-heading text-2xl font-bold mb-6 text-orange-600 border-b border-orange-100 pb-4">
              Student Coordinators
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { name: 'Mohana Priya', role: '3rd Year CSBS', phone: '' },
                { name: 'Rishga', role: '3rd Year CSBS', phone: '' },
                { name: 'Yuvan Raj', role: '3rd Year CSBS', phone: '+91 93459 86055' },
                { name: 'Raheem Mohamed Meeran', role: '3rd Year CSBS', phone: '+91 93422 24949' },
              ].map((student, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-bold text-gray-900">{student.name}</h4>
                  <p className="text-xs text-gray-500 font-medium mb-1">{student.role}</p>
                  {student.phone && (
                    <div className="flex items-center gap-1 text-sm text-orange-600 font-medium">
                      <Phone size={12} />
                      <span>{student.phone}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coordinators;