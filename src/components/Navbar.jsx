import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X, Send, User, Code2, Award, GraduationCap, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: Cpu },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'Education', href: '#education', icon: GraduationCap },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#090d16]/90 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-2xl shadow-cyan-950/40'
        : 'bg-transparent py-4 sm:py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-cyan-500/20">
            <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg text-white tracking-wide group-hover:text-cyan-400 transition-colors leading-tight">
              MANJUSHREE BAYAS
            </span>
            <span className="text-[9px] sm:text-[10px] text-cyan-400/90 font-mono tracking-wider uppercase">
              Instrumentation & Control
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/70 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-full hover:bg-slate-800/80 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions CTA (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 rounded-xl shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-200"
          >
            <Send className="w-4 h-4" />
            <span>Connect</span>
          </a>
        </div>

        {/* Mobile Menu Button - Sleek & Prominent */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden relative p-2.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-cyan-400 hover:text-white hover:bg-slate-800/90 hover:border-cyan-400 shadow-lg shadow-cyan-500/10 transition-all duration-200 active:scale-95"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-emerald-400 animate-spin-once" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Drawer (Upgraded Slide-down Glassmorphism) */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#090d16]/95 border-b border-cyan-500/30 backdrop-blur-2xl px-5 py-6 shadow-2xl space-y-4 animate-fadeIn">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Navigation Menu
            </span>
            <span className="text-[10px] font-mono text-slate-500">Cummins College</span>
          </div>

          <div className="grid grid-cols-1 gap-1.5">
            {navLinks.map((link) => {
              const LinkIcon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-200 hover:text-cyan-400 hover:bg-slate-900/90 border border-transparent hover:border-cyan-500/20 font-medium text-sm transition-all duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 flex items-center justify-center text-cyan-400">
                    <LinkIcon className="w-4 h-4" />
                  </div>
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800/80">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 font-semibold text-white bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 rounded-xl shadow-lg shadow-cyan-500/25 active:scale-[0.99] transition-all duration-200"
            >
              <Send className="w-4 h-4" />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
