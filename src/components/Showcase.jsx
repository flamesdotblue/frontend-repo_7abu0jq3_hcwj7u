import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { useRef } from 'react';

const projects = [
  {
    title: 'Interactive SaaS Dashboard',
    blurb:
      'Conversion-focused analytics with real-time charts, command palette, and dark mode.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: '3D Product Landing',
    blurb:
      'Hero 3D experience with Spline + WebGL interactions for higher dwell time.',
    tags: ['Spline', 'WebGL', 'Performance'],
    link: '#',
  },
  {
    title: 'Personal Brand System',
    blurb:
      'Design system and content engine that boosted leads by 3x.',
    tags: ['Design System', 'SEO', 'Content'],
    link: '#',
  },
];

function Card({ title, blurb, tags, link, index }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-xl shadow-black/20 backdrop-blur transition hover:bg-white/10"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <div className="rounded-lg border border-white/10 p-2 text-white/70 transition group-hover:border-white/20 group-hover:text-white">
          <ExternalLink size={16} />
        </div>
      </div>
      <p className="text-sm text-white/70">{blurb}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/80"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

export default function Showcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section id="work" ref={ref} className="relative h-screen snap-start">
      <div className="absolute inset-0 -z-[0] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15)_0%,rgba(0,0,0,0)_50%)]" />
      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
        <motion.div style={{ rotate, opacity }} className="flex items-center gap-2 text-amber-300">
          <Star size={16} />
          <span className="text-xs font-semibold tracking-widest">SELECTED WORK</span>
        </motion.div>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold text-white sm:text-5xl">
          Projects that help clients grow.
        </h2>
        <p className="mt-3 max-w-2xl text-white/70">
          A mix of product, marketing, and 3D storytelling. Designed for impact and built for speed.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Card key={p.title} index={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
