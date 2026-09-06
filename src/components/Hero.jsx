import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Activity, Cpu, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-5 sm:right-10 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-[11px] sm:text-xs font-mono tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Engineering Roles & Internships</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1.5 sm:space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <span className="gradient-text">Manjushree Bayas</span>
              </h1>
              <p className="text-base sm:text-xl font-medium text-slate-300">
                Instrumentation & Control Engineer
              </p>
            </div>

            {/* Sub-headline / Summary */}
            <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              BTech Undergraduate at <strong className="text-slate-200">MKSSS's Cummins College of Engineering for Women, Pune</strong>. Specialized in sensor-driven microcontrollers, industrial automation, circuit simulations, and data analytics.
            </p>

            {/* Domain Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium">
                <Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Microcontrollers & Embedded Systems
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium">
                <Activity className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Industrial Simulation & PLC
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium">
                <Zap className="w-3.5 h-3.5 text-yellow-400 shrink-0" /> Power BI & Data Analytics
              </span>
            </div>

            {/* Quick Contact Info Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 text-xs sm:text-sm text-slate-400">
              <a href="mailto:manjushree.bayas@cumminscollege.in" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors max-w-full">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="truncate max-w-[260px] sm:max-w-none">manjushree.bayas@cumminscollege.in</span>
              </a>
              <a href="tel:+918208942109" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 8208942109</span>
              </a>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Nashik / Pune, India</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-3">
              <a
                href="#projects"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-200"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold border border-slate-700 hover:border-slate-600 transition-all duration-200"
              >
                <span>Contact Me</span>
              </a>
            </div>

          </div>

          {/* Avatar Profile Column */}
          <div className="lg:col-span-5 flex justify-center pt-4 lg:pt-0">
            <div className="relative group">

              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse-slow" />

              {/* Avatar Container */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl bg-slate-900 p-2 border border-slate-700/80 shadow-2xl overflow-hidden">
                <img
                  src="/profile.png"
                  alt="Manjushree Bayas"
                  className="w-full h-full object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Metric Badge */}
                <div className="absolute bottom-3 right-3 bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 rounded-xl px-2.5 py-1.5 text-left shadow-lg">
                  <div className="text-[9px] text-slate-400 font-mono">CURRENT CGPA</div>
                  <div className="text-xs sm:text-sm font-bold text-cyan-400 font-mono">7.44 / 10.0</div>
                </div>

                {/* Floating College Tag */}
                <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md border border-emerald-500/40 rounded-xl px-2.5 py-1 flex items-center gap-1.5 shadow-lg">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-200">Cummins College</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
