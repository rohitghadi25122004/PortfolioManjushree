import React from 'react';
import { Target, Layers, Compass, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      title: 'Instrumentation Core',
      description: 'Deep understanding of sensor interfacing, transducers, signal conditioning, and closed-loop control systems.',
      icon: Layers,
    },
    {
      title: 'Embedded Programming',
      description: 'Hands-on development with ATmega8535, AVR architecture, and Arduino platforms in C and Python.',
      icon: Target,
    },
    {
      title: 'Data & Visualization',
      description: 'Proficient in turning complex telemetry data into actionable dashboards using Power BI and MS Excel.',
      icon: Compass,
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging Physical Sensors with <span className="gradient-text">Digital Intelligence</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            An enthusiastic engineer who thrives at the intersection of microcontrollers, automation logic, data visualization, and real-world system design.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Biography Card */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-cyan-400" />
              <span>Engineering Journey</span>
            </h3>

            <p className="text-slate-300 leading-relaxed">
              Currently pursuing my BTech degree in <strong className="text-white">Instrumentation & Control Engineering</strong> at <strong className="text-cyan-400">MKSSS's Cummins College of Engineering for Women, Pune</strong> (2023–2027), holding a current CGPA of <strong>7.44</strong>.
            </p>

            <p className="text-slate-300 leading-relaxed">
              My engineering focus revolves around creating practical solutions to real-world problems. Whether designing ultrasonic water-level detection circuits with 100% overflow prevention, calibrating rain gauge sensors for meteorological accuracy, or engineering stable power supply units for microcontrollers, I emphasize precision, safety, and operational reliability.
            </p>

            {/* Institution Badge */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">AFFILIATION</div>
                  <div className="text-sm font-semibold text-white">Cummins College of Engineering for Women, Pune</div>
                </div>
              </div>

              <div className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1.5 rounded-lg">
                Batch: 2023 – 2027
              </div>
            </div>
          </div>

          {/* Highlights Column */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="glass-card p-6 rounded-2xl flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center shrink-0 group-hover:border-cyan-500 transition-colors">
                    <IconComp className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
