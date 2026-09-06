import React from 'react';
import { Award, ExternalLink, CheckCircle2, FileCheck, Sparkles, Building } from 'lucide-react';

export default function Certifications() {
  const certs = [
    {
      title: 'Excel for Data Analysis',
      provider: 'Great Learning',
      score: '92%',
      scoreLabel: 'Assessment Score',
      scoreColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/60',
      description: 'Mastered advanced Excel functions, VLOOKUP, pivot tables, data visualization, and analytical modeling.',
      link: '#',
      badge: 'Verified Credential',
    },
    {
      title: 'MATLAB Onramp',
      provider: 'MathWorks',
      score: '100%',
      scoreLabel: 'Practical Assessment',
      scoreColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/60',
      description: 'Acquired hands-on proficiency in MATLAB syntax, signal plotting, matrix computations, and data analytics algorithms.',
      link: '#',
      badge: 'MathWorks Official',
    },
    {
      title: 'Prompt Engineering & Generative AI',
      provider: 'Great Learning',
      score: '90%',
      scoreLabel: 'Certification Score',
      scoreColor: 'text-purple-400 border-purple-500/30 bg-purple-950/60',
      description: 'Learned structured prompt design, LLM context optimization, AI workflow integration, and zero/few-shot logic.',
      link: '#',
      badge: 'AI & Automation',
    },
  ];

  return (
    <section id="certifications" className="py-20 relative bg-slate-950/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono tracking-wider uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Professional Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Certifications & <span className="gradient-text">Skill Training</span>
          </h2>
          <p className="text-slate-400 text-base">
            Industry-recognized credentials featuring quantifiable assessment scores and verified completion status.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {certs.map((cert, idx) => (
            <div key={idx} className="glass-card p-6 rounded-3xl flex flex-col justify-between group">
              <div className="space-y-4">
                
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                    <FileCheck className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">
                    {cert.badge}
                  </span>
                </div>

                {/* Title & Provider */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-medium text-cyan-400/90 mt-0.5">
                    {cert.provider}
                  </div>
                </div>

                {/* Score Pill */}
                <div className="inline-flex items-center gap-2">
                  <span className={`text-xs font-mono px-3 py-1 rounded-lg border font-bold ${cert.scoreColor}`}>
                    {cert.scoreLabel}: {cert.score}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  {cert.description}
                </p>

              </div>

              {/* Verify Link Button */}
              <div className="pt-4 border-t border-slate-800/80 mt-6">
                <a
                  href={cert.link}
                  onClick={(e) => {
                    if (cert.link === '#') {
                      e.preventDefault();
                      alert('You can add your direct certificate verification URL here!');
                    }
                  }}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Verify Certificate Link</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Employability Skills Training Card */}
        <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                  Professional Employability Program
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Innovation & Employability Skills Training
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Organized by <strong>MKSSS's Cummins College of Engineering for Women</strong> in collaboration with <strong>Neulex Talent Solutions Pvt. Ltd.</strong> (Aug 2024 – Mar 2025). Intensive career readiness training focusing on problem solving, soft skills, and industry alignment.
              </p>
            </div>

            <div className="shrink-0 bg-slate-900 border border-slate-800 p-4 rounded-2xl text-center">
              <div className="text-xs font-mono text-slate-400">DURATION</div>
              <div className="text-sm font-bold text-white mt-1">Aug 2024 – Mar 2025</div>
              <div className="text-[11px] text-emerald-400 font-mono mt-1">Active Participant</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
