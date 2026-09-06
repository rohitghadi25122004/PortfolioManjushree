import React, { useState } from 'react';
import { Cpu, ShieldCheck, Activity, Layers, ExternalLink, X, Zap, ChevronRight } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'water-level',
      title: 'Water Level Measuring & Alert System',
      category: 'Embedded & Sensors',
      badge: '100% Overflow Prevention',
      badgeColor: 'bg-emerald-950/80 text-emerald-400 border-emerald-500/30',
      shortDesc: 'Designed a sensor-based monitoring system with automatic buzzer alerts to prevent water tank overflow in real-time.',
      fullDesc: 'Developed an automated water level monitoring setup utilizing ultrasonic sensors and float sensor logic interfaced with microcontrollers. The system continuously measures tank fluid height and triggers high-decibel buzzer alert circuits upon reaching critical thresholds, completely eliminating water overflow risk.',
      keyFeatures: [
        'Real-time ultrasonic distance and water level height measurement.',
        'Low-latency buzzer alert circuit triggering at 90% capacity threshold.',
        'Prevents 100% water tank overflow and reduces wastage.',
        'Scalable for industrial storage tank monitoring.',
      ],
      techStack: ['Microcontrollers', 'Ultrasonic Sensors', 'Buzzer Circuitry', 'Arduino C', 'Proteus Simulation'],
      icon: Activity,
    },
    {
      id: 'rain-gauge',
      title: 'Rain Gauge Weather Sensor Unit',
      category: 'Instrumentation & Weather',
      badge: 'High Precision Calibration',
      badgeColor: 'bg-cyan-950/80 text-cyan-400 border-cyan-500/30',
      shortDesc: 'Built a sensor-driven rainfall measurement unit engineered for accurate weather monitoring and data recording.',
      fullDesc: 'Engineered a meteorological sensor module designed to record precipitation levels with high accuracy. Transducer signals are converted into measurable digital values for weather analysis, agricultural planning, and rainfall rate telemetry.',
      keyFeatures: [
        'Accurate precipitation depth measurement with digital pulse counting.',
        'Weather-resistant sensor calibration for outdoor deployment.',
        'Low power consumption design suited for remote telemetry setups.',
        'Integrated signal conditioning for minimal noise interference.',
      ],
      techStack: ['Rain Sensors', 'Signal Conditioning', 'Microcontroller Interfacing', 'MATLAB Data Plotting'],
      icon: Cpu,
    },
    {
      id: 'power-supply',
      title: 'Power Supply Generator for Embedded Systems',
      category: 'Circuit Engineering',
      badge: 'Stable DC Regulation',
      badgeColor: 'bg-purple-950/80 text-purple-400 border-purple-500/30',
      shortDesc: 'Engineered a reliable power supply unit delivering clean, stable voltage to prevent microcontroller reset failures.',
      fullDesc: 'Designed and assembled a multi-stage regulated DC power supply circuit equipped with step-down transformation, bridge rectification, capacitive filtering, and IC voltage regulation (7805/7812). Ensures ripple-free voltage for sensitive microcontrollers like ATmega8535 and AVR boards.',
      keyFeatures: [
        'Delivers clean +5V and +12V regulated DC output.',
        'Low ripple factor through multi-stage electrolytic capacitor filtering.',
        'Over-current and thermal protection built into regulator stage.',
        'Tested under varying load conditions for high stability.',
      ],
      techStack: ['Multisim', 'Proteus', 'Voltage Regulators', 'Transformer Coupling', 'Analog Electronics'],
      icon: Zap,
    },
    {
      id: 'multi-suite',
      title: 'Multi-Platform Circuit Simulation & Analytics Suite',
      category: 'Simulation & Data',
      badge: 'Power BI + MATLAB',
      badgeColor: 'bg-amber-950/80 text-amber-400 border-amber-500/30',
      shortDesc: 'Executed circuit simulations, signal processing, and interactive Power BI dashboards for engineering analytics.',
      fullDesc: 'Combined multi-tool simulation workflows across Multisim, Proteus, MATLAB, and Power BI. Designed interactive visualization dashboards to evaluate circuit parameters, signal response waveforms, and equipment telemetry metrics.',
      keyFeatures: [
        'Simulated complex analog and digital logic circuits prior to hardware prototyping.',
        'Built interactive Power BI dashboards to track telemetry trends and operational KPIs.',
        'Performed signal filtering and curve fitting in MATLAB.',
        'Demonstrated end-to-end design from theoretical simulation to visual analysis.',
      ],
      techStack: ['Multisim', 'Proteus', 'MATLAB', 'Power BI', 'MS Excel Advanced'],
      icon: Layers,
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>Academic Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Engineering <span className="gradient-text">Projects & Systems</span>
          </h2>
          <p className="text-slate-400 text-base">
            Hands-on hardware builds, sensor integration, microcontroller programming, and analytical simulation projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const ProjectIcon = project.icon;
            return (
              <div
                key={project.id}
                className="glass-card p-8 rounded-3xl flex flex-col justify-between group hover:border-cyan-500/40 relative overflow-hidden"
              >
                <div className="space-y-4">
                  
                  {/* Category & Badge Header */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className={`text-[11px] font-mono px-3 py-1 rounded-full border ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                  </div>

                  {/* Project Title */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-cyan-400 transition-colors">
                      <ProjectIcon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono bg-slate-900/90 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* View Details Button */}
                <div className="pt-6 border-t border-slate-800/80 mt-6 flex justify-end">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-white transition-colors"
                  >
                    <span>View System Specifications</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Interactive Modal Popup */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            <div className="glass-card max-w-2xl w-full p-8 rounded-3xl relative max-h-[90vh] overflow-y-auto space-y-6 border border-cyan-500/30">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-10">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <span className={`inline-block text-xs font-mono px-3 py-1 rounded-full border ${selectedProject.badgeColor}`}>
                  {selectedProject.badge}
                </span>
              </div>

              {/* Full Overview */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-slate-200">System Overview</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedProject.fullDesc}
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-200">Technical Key Highlights</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {selectedProject.keyFeatures.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <h4 className="text-xs font-mono text-slate-400">TOOLS & TECHNOLOGIES USED</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 px-3 py-1 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
