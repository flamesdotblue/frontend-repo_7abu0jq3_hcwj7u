import { motion } from 'framer-motion';
import { Code2, Cpu, Sparkles } from 'lucide-react';

export default function About() {
  const items = [
    {
      icon: <Sparkles size={18} />,
      title: 'Strategy-first',
      text: 'Every pixel and micro-interaction serves a business goal: conversion, retention, trust.',
    },
    {
      icon: <Cpu size={18} />,
      title: 'Performance',
      text: 'Lighthouse-optimized, a11y-aware, and production-ready from day one.',
    },
    {
      icon: <Code2 size={18} />,
      title: 'Modern Stack',
      text: 'React, Next, FastAPI, and 3D—delivered with clean, maintainable code.',
    },
  ];

  return (
    <section id="about" className="relative h-screen snap-start">
      <div className="mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-extrabold text-white sm:text-5xl"
            >
              Designer-engineer hybrid who loves playful tech.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 max-w-xl text-white/70"
            >
              I partner with startups and teams to ship high-velocity experiments and premium product experiences.
            </motion.p>
          </div>
          <div className="grid gap-4">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur"
              >
                <div className="mt-1 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-500/70 via-fuchsia-500/70 to-amber-400/70 text-white">
                  {it.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{it.title}</h3>
                  <p className="text-sm text-white/70">{it.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
