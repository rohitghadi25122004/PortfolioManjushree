import React from 'react';
import { Cpu, Award, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function QuickStats() {
  const stats = [
    {
      label: 'Academic Projects',
      value: '04+',
      description: 'Hardware, Sensors & Circuits',
      icon: Cpu,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      label: 'Certifications',
      value: '03+',
      description: 'Excel, MATLAB & Prompt AI',
      icon: Award,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      label: 'Higher Secondary',
      value: '88.0%',
      description: 'HSC Board Academic Distinction',
      icon: GraduationCap,
      color: 'from-purple-500 to-indigo-500',
    },
    {
      label: 'Overflow Prevention',
      value: '100%',
      description: 'Efficiency in Sensor System',
      icon: CheckCircle2,
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section className="py-8 sm:py-12 bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="glass-card p-4 sm:p-6 rounded-2xl relative overflow-hidden group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between gap-1 mb-3">
                  <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${stat.color} p-[1px] shrink-0`}>
                    <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center">
                      <IconComponent className="w-4 h-4 sm:w-6 sm:h-6 text-slate-200 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <span className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white font-mono whitespace-nowrap">
                    {stat.value}
                  </span>
                </div>
                <div>
                  <h3 className="text-xs sm:text-base font-bold text-slate-200 group-hover:text-cyan-400 transition-colors leading-tight">
                    {stat.label}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-400 mt-1 leading-snug">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
