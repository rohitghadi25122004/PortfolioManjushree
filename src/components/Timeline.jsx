import React from 'react';
import { GraduationCap, Trophy, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';

export default function Timeline() {
  const education = [
    {
      degree: 'BTech in Instrumentation & Control Engineering',
      institution: "MKSSS's Cummins College of Engineering for Women, Pune",
      period: '2023 – 2027 (Expected)',
      score: 'Current CGPA: 7.44 / 10.0',
      highlights: [
        'Specialization in Transducers, Sensor Interfacing & Automation',
        'Hands-on laboratory training in PLC, SCADA & Proteus Circuit Simulation',
        'Active participant in Innovation & Employability Skills Program',
      ],
      icon: GraduationCap,
    },
    {
      degree: 'Higher Secondary School Certificate (HSC)',
      institution: 'Bhujbal Academy, Nashik',
      period: '2021 – 2023',
      score: 'HSC Board Score: 88.0%',
      highlights: [
        'Physics, Chemistry & Mathematics Stream',
        'Academic Distinction with 88% overall performance',
      ],
      icon: GraduationCap,
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Holy Flower School, Nashik',
      period: '2020 – 2021',
      score: 'SSC Board Score: 74.4%',
      highlights: [
        'Secondary Education Foundation with core focus on Sciences & Mathematics',
      ],
      icon: GraduationCap,
    },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Pathway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="gradient-text">Co-Curriculars</span>
          </h2>
          <p className="text-slate-400 text-base">
            Academic milestones, foundational schooling, and inter-university athletic representation.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Timeline */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>Academic Education</span>
            </h3>

            <div className="space-y-6">
              {education.map((item, idx) => (
                <div key={idx} className="glass-card p-6 rounded-2xl space-y-3 relative">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-white">{item.degree}</h4>
                      <p className="text-xs font-semibold text-cyan-400 mt-0.5">{item.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 px-3 py-1 rounded-lg">
                        {item.score}
                      </span>
                      <div className="text-[11px] font-mono text-slate-400 mt-1 flex items-center justify-end gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {item.period}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-1.5 pt-2 border-t border-slate-800">
                    {item.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Sports & Leadership Column */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-amber-400" />
              <span>Athletics & Leadership</span>
            </h3>

            {/* Handball Card */}
            <div className="glass-card p-6 rounded-2xl space-y-4 border border-amber-500/20">
              <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-500/30 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-amber-400" />
              </div>

              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider bg-amber-950/60 px-2.5 py-1 rounded-md border border-amber-500/30">
                  Sports Achievement
                </span>
                <h4 className="text-lg font-bold text-white mt-2">
                  Handball Sport – University Level Participation
                </h4>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Represented the University Handball Team in competitive inter-collegiate tournaments, demonstrating team coordination, tactical endurance, and competitive sportsmanship under pressure.
              </p>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>INTER-COLLEGIATE</span>
                <span className="text-emerald-400 font-semibold">Active Representative</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
