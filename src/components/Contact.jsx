import { motion } from 'framer-motion';
import { Mail, Send, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative h-screen snap-start">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.12)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold text-white sm:text-5xl"
          >
            Let’s build something your clients will remember.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 max-w-2xl text-white/70"
          >
            Share a quick brief. I respond within 24 hours with ideas, timelines, and next steps.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 grid grid-cols-1 gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:grid-cols-2"
          >
            <input
              required
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 outline-none focus:border-white/30"
            />
            <input
              required
              type="email"
              placeholder="Email address"
              className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 outline-none focus:border-white/30"
            />
            <input
              type="text"
              placeholder="Company or project"
              className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 outline-none focus:border-white/30 sm:col-span-2"
            />
            <textarea
              placeholder="What are you building? Goals, timeline, budget..."
              className="h-32 w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 outline-none focus:border-white/30 sm:col-span-2"
            />
            <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110"
              >
                <Send size={16} />
                Send inquiry
              </button>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Mail size={16} />
                hello@example.com
              </a>
              <a
                href="tel:+10000000000"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Phone size={16} />
                +1 (000) 000-0000
              </a>
            </div>
          </motion.form>

          <div className="mt-6 text-xs text-white/50">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}
