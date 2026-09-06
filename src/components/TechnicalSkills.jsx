import React, { useState } from 'react';
import { Cpu, Terminal, BarChart3, Globe, Sparkles, CheckCircle2 } from 'lucide-react';

export default function TechnicalSkills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'simulation', name: 'Simulation & Automation' },
    { id: 'programming', name: 'Programming & DSA' },
    { id: 'analytics', name: 'Data & Analytics' },
    { id: 'embedded', name: 'Microcontrollers & Hardware' },
    { id: 'webai', name: 'Web & AI Tech' },
  ];

  const skillData = [
    {
      category: 'simulation',
      categoryName: 'Simulation & Automation',
      icon: Cpu,
      items: [
        { name: 'AutoCAD', level: 85, badge: 'CAD Design' },
        { name: 'Multisim', level: 90, badge: 'Circuit Simulation' },
        { name: 'Proteus', level: 88, badge: 'PCB & Circuit' },
        { name: 'MATLAB', level: 85, badge: 'Signal Processing' },
        { name: 'SCADA (Basic)', level: 75, badge: 'Industrial Automation' },
        { name: 'PLC (Basic)', level: 75, badge: 'Control Logic' },
        { name: 'Studio 5000 (Basic)', level: 70, badge: 'Automation Suite' },
        { name: 'Cisco Packet Tracer', level: 80, badge: 'Networking' },
      ],
    },
    {
      category: 'programming',
      categoryName: 'Programming & DSA',
      icon: Terminal,
      items: [
        { name: 'Python', level: 85, badge: 'Core & Scripts' },
        { name: 'C Language', level: 88, badge: 'Embedded Systems' },
        { name: 'Data Structures & Algorithms', level: 78, badge: 'Problem Solving' },
      ],
    },
    {
      category: 'analytics',
      categoryName: 'Data & Analytics',
      icon: BarChart3,
      items: [
        { name: 'Power BI', level: 88, badge: 'Interactive Dashboards' },
        { name: 'MS Excel (Advanced)', level: 92, badge: 'VLOOKUP, Pivot, Analytics' },
        { name: 'Minitab', level: 80, badge: 'Statistical Analysis' },
      ],
    },
    {
      category: 'embedded',
      categoryName: 'Microcontrollers & Hardware',
      icon: Cpu,
      items: [
        { name: 'ATmega8535 Microcontroller', level: 90, badge: '8-bit AVR' },
        { name: 'AVR Architecture', level: 85, badge: 'Hardware Logic' },
        { name: 'Arduino Platform & Sensors', level: 92, badge: 'Ultrasonic / Rainfall' },
      ],
    },
    {
      category: 'webai',
      categoryName: 'Web & AI Tech',
      icon: Globe,
      items: [
        { name: 'FastAPI', level: 80, badge: 'RESTful Backend' },
        { name: 'Prompt Engineering', level: 90, badge: 'LLM & Context Logic' },
      ],
    },
  ];

  const filteredCategories = activeTab === 'all'
    ? skillData
    : skillData.filter(cat => cat.category === activeTab);

  return (
    <section id="skills" className="py-20 relative bg-slate-950/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools, Technologies & <span className="gradient-text">Engineering Arsenal</span>
          </h2>
          <p className="text-slate-400 text-base">
            Comprehensive skill set spanning hardware microcontrollers, simulation software, analytical dashboards, and modern software tools.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 sm:mb-12 scrollbar-none sm:flex-wrap sm:justify-center">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group, idx) => {
            const CategoryIcon = group.icon;
            return (
              <div key={idx} className="glass-card p-6 rounded-2xl space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center">
                    <CategoryIcon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {group.categoryName}
                  </h3>
                </div>

                <div className="space-y-4">
                  {group.items.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
                          {skill.badge}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden p-0.5 border border-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
