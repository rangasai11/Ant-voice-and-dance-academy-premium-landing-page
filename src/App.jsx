import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  BadgeCheck,
  Facebook,
  Gem,
  GraduationCap,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Mic2,
  Music2,
  Phone,
  Play,
  Send,
  Sparkles,
  Star,
  Trophy,
  Users,
  Video,
  WandSparkles,
  X,
  Youtube,
} from 'lucide-react';

const navLinks = ['Home', 'About', 'Courses', 'Why Choose Us', 'Gallery', 'Contact'];

const contact = {
  phone: '+91 12345 67890',
  phoneLink: 'tel:+911234567890',
  whatsappLink: 'https://wa.me/911234567890',
  email: 'antvoiceanddance@gmail.com',
  emailLink: 'mailto:antvoiceanddance@gmail.com',
  location: '123 Harmony Street, Your City',
};

const courses = [
  {
    title: 'Voice Classes',
    icon: Mic2,
    gradient: 'from-fuchsia-500 via-pink-500 to-rose-400',
    description: 'Build vocal strength, pitch control, and performance-ready singing technique.',
    items: ['Hindustani', 'Western', 'Light Music', 'Playback Singing', 'Voice Culture'],
  },
  {
    title: 'Dance Classes',
    icon: Music2,
    gradient: 'from-violet-600 via-purple-500 to-fuchsia-400',
    description: 'Learn graceful foundations, energetic choreography, and expressive movement.',
    items: ['Ballet', 'Classical', 'Western', 'Hip-Hop', 'Contemporary'],
  },
  {
    title: 'Performance Training',
    icon: Trophy,
    gradient: 'from-amber-400 via-orange-400 to-pink-500',
    description: 'Own the spotlight with posture, expression, confidence, and stage polish.',
    items: ['Stage Presence', 'Expression', 'Confidence Building', 'Microphone Skills'],
  },
  {
    title: 'Special Programs',
    icon: WandSparkles,
    gradient: 'from-sky-400 via-cyan-400 to-emerald-400',
    description: 'Seasonal experiences that turn practice into memorable performance moments.',
    items: ['Workshops', 'Competitions', 'Annual Shows', 'Cultural Events'],
  },
];

const whyChoose = [
  {
    title: 'Expert Trainers',
    icon: GraduationCap,
    text: 'Learn from experienced mentors with a refined performance approach.',
  },
  {
    title: 'Personal Attention',
    icon: HeartHandshake,
    text: 'Small-batch guidance helps every student grow at the right pace.',
  },
  {
    title: 'Stage Opportunities',
    icon: Star,
    text: 'Frequent events help students become comfortable in the spotlight.',
  },
  {
    title: 'Proven Results',
    icon: BadgeCheck,
    text: 'Structured training supports steady progress and visible confidence.',
  },
  {
    title: 'Fun Learning Environment',
    icon: Sparkles,
    text: 'Joyful classes keep creativity, discipline, and friendship in balance.',
  },
  {
    title: 'Confidence Building',
    icon: Award,
    text: 'Students learn to express, present, and shine with personality.',
  },
];

const gallery = [
  ['Singing', 'from-fuchsia-500 to-pink-400', Mic2],
  ['Classical Dance', 'from-amber-400 to-rose-400', Sparkles],
  ['Ballet', 'from-pink-500 to-rose-400', Star],
  ['Hip-Hop', 'from-violet-600 to-blue-500', Music2],
  ['Kids Singing', 'from-cyan-400 to-emerald-400', Users],
  ['Stage Performance', 'from-pink-500 to-orange-400', Trophy],
  ['Group Dance', 'from-purple-500 to-fuchsia-500', Video],
  ['Music Class', 'from-sky-400 to-blue-600', Mic2],
  ['Dance Practice', 'from-amber-400 to-pink-500', Sparkles],
  ['Annual Event', 'from-velvet to-fuchsia-700', Trophy],
];

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com/antvoiceanddance',
    gradient: 'from-pink-500 to-fuchsia-600',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    href: 'https://facebook.com/antvoiceanddance',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    href: 'https://youtube.com/@antvoiceanddance',
    gradient: 'from-red-500 to-rose-600',
  },
  {
    name: 'WhatsApp',
    icon: Phone,
    href: contact.whatsappLink,
    gradient: 'from-emerald-400 to-green-600',
  },
  {
    name: 'Telegram',
    icon: Send,
    href: 'https://t.me/antvoiceanddance',
    gradient: 'from-sky-400 to-blue-600',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

function sectionId(label) {
  return label.toLowerCase().replaceAll(' ', '-');
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      transition={{ duration: 0.7 }}
    >
      <p className="mb-3 inline-flex rounded-full border border-aurum/40 bg-white/70 px-4 py-2 text-sm font-bold uppercase tracking-[0.24em] text-royal shadow-sm backdrop-blur">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-black text-velvet sm:text-5xl">{title}</h2>
      {text && <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">{text}</p>}
    </motion.div>
  );
}

function AbstractStageVisual({ icon: Icon, gradient, label, compact = false }) {
  return (
    <div className={`relative overflow-hidden ${compact ? 'aspect-square rounded-2xl' : 'aspect-[4/3] rounded-[1.35rem]'} bg-velvet`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_24%,rgba(255,255,255,0.38),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(248,200,76,0.36),transparent_26%),linear-gradient(135deg,rgba(43,11,85,0.16),rgba(43,11,85,0.66))]" />
      <div className="absolute -left-16 top-0 h-full w-32 rotate-12 bg-white/12 blur-xl" />
      <div className="absolute -right-12 bottom-0 h-40 w-40 rounded-full bg-aurum/25 blur-2xl" />
      <div className="absolute left-6 top-5 text-4xl font-black text-white/35">♪</div>
      <div className="absolute right-7 top-8 text-3xl font-black text-aurum/70">★</div>
      <div className="absolute bottom-7 left-8 text-3xl font-black text-white/45">♫</div>
      <motion.div
        className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/35 bg-white/18 text-white shadow-gold backdrop-blur-xl"
        animate={{ y: [0, -8, 0], rotate: [0, 3, -3, 0] }}
        transition={{ duration: 4.5, repeat: Infinity }}
      >
        <Icon className="h-12 w-12" />
      </motion.div>
      <div className="absolute inset-x-6 bottom-5 rounded-2xl border border-white/25 bg-white/15 px-4 py-3 text-center shadow-lg backdrop-blur-xl">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-champagne">{label}</p>
      </div>
    </div>
  );
}

function DancerSilhouette() {
  return (
    <div className="relative h-20 w-20">
      <div className="absolute left-8 top-1 h-5 w-5 rounded-full bg-aurum shadow-gold" />
      <div className="absolute left-9 top-6 h-10 w-3 rounded-full bg-white/85" />
      <div className="absolute left-2 top-8 h-3 w-16 -rotate-12 rounded-full bg-fuchsia-300" />
      <div className="absolute left-4 top-14 h-3 w-14 rotate-12 rounded-full bg-aurum" />
      <div className="absolute left-0 top-2 h-20 w-20 rounded-full border border-white/25" />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/65 shadow-sm backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-aurum to-pink-500 text-velvet shadow-gold">
            <Music2 className="h-6 w-6" />
          </span>
          <span>
            <span className="block font-display text-xl font-black leading-none text-velvet">ANT Voice & Dance</span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-600">Talent Academy</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${sectionId(link)}`}
              className="rounded-full px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-royal hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#enroll"
          className="hidden rounded-full bg-gradient-to-r from-aurum via-yellow-300 to-pink-400 px-5 py-3 text-sm font-black text-velvet shadow-gold transition hover:-translate-y-0.5 hover:shadow-glow lg:inline-flex"
        >
          Enroll Now
        </a>

        <button
          aria-label="Toggle menu"
          className="rounded-full bg-velvet p-3 text-white shadow-lg lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          className="mx-4 mb-4 rounded-3xl border border-white/50 bg-white/90 p-4 shadow-glow backdrop-blur-xl lg:hidden"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${sectionId(link)}`}
                className="rounded-2xl px-4 py-3 font-bold text-velvet transition hover:bg-champagne"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#enroll"
              className="rounded-2xl bg-gradient-to-r from-aurum to-pink-400 px-4 py-3 text-center font-black text-velvet"
              onClick={() => setOpen(false)}
            >
              Enroll Now
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function FloatingDecor() {
  const pieces = [
    ['♪', 'left-[6%] top-[18%]', 0],
    ['✦', 'right-[12%] top-[16%]', 0.4],
    ['♫', 'right-[20%] top-[42%]', 0.8],
    ['★', 'left-[12%] top-[54%]', 1.2],
    ['✧', 'right-[7%] bottom-[20%]', 1.6],
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map(([text, position, delay]) => (
        <motion.span
          key={`${text}-${position}`}
          className={`absolute ${position} text-3xl font-black text-aurum drop-shadow-lg sm:text-5xl`}
          animate={{ y: [0, -18, 0], rotate: [0, 9, -5, 0], opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 5, repeat: Infinity, delay }}
        >
          {text}
        </motion.span>
      ))}
      <motion.div
        className="absolute left-[4%] bottom-[12%] hidden h-20 w-20 overflow-hidden rounded-full border-2 border-white/50 bg-white/15 shadow-gold backdrop-blur sm:block"
        animate={{ y: [0, -14, 0], rotate: [0, -6, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 0.3 }}
      >
        <DancerSilhouette />
      </motion.div>
      <motion.div
        className="absolute right-[5%] top-[58%] hidden h-16 w-16 place-items-center rounded-3xl border border-white/45 bg-white/18 text-aurum shadow-xl backdrop-blur sm:grid"
        animate={{ y: [0, 16, 0], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, delay: 0.7 }}
      >
        <Mic2 className="h-9 w-9" />
      </motion.div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden bg-academy-radial pt-28 text-white">
      <FloatingDecor />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(255,255,255,0.16)_0_1px,transparent_1px_80px)]" />
      <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-aurum/20 blur-3xl" />
      <div className="absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-fuchsia-300/25 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-8 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-16">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-aurum/50 bg-white/15 px-4 py-2 text-sm font-black text-champagne shadow-gold backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-aurum" />
            2026-27 New Season Admissions Open
          </div>
          <h1 className="font-display text-5xl font-black leading-[0.95] tracking-normal sm:text-6xl lg:text-7xl">
            ANT Voice & Dance Talent Academy
          </h1>
          <p className="mt-6 max-w-2xl text-2xl font-extrabold text-champagne sm:text-3xl">
            Discover Your Talent, Shine Your Future
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/86 sm:text-lg">
            Premium singing, dance, and performance training for students ready to grow with confidence,
            creativity, and stage-ready sparkle.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#enroll" className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-aurum via-yellow-300 to-pink-300 px-7 py-4 text-base font-black text-velvet shadow-gold transition hover:-translate-y-1 hover:shadow-glow">
              Enroll Now
              <Sparkles className="h-5 w-5 transition group-hover:rotate-12" />
            </a>
            <a href={contact.phoneLink} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 bg-white/15 px-7 py-4 text-base font-black text-white shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white hover:text-velvet">
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </div>
        </motion.div>

        <motion.div className="relative mx-auto w-full max-w-lg" initial={{ opacity: 0, scale: 0.92, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-aurum/45 via-pink-400/35 to-white/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/35 bg-white/18 p-4 shadow-glow backdrop-blur-2xl sm:p-5">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-white text-velvet shadow-2xl">
              <div className="relative min-h-[520px] overflow-hidden bg-gradient-to-br from-velvet via-royal to-fuchsia-600">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(248,200,76,0.46),transparent_24%),radial-gradient(circle_at_78%_12%,rgba(255,255,255,0.28),transparent_22%),radial-gradient(circle_at_55%_58%,rgba(217,70,239,0.5),transparent_34%)]" />
                <div className="absolute -left-24 top-0 h-full w-44 rotate-12 bg-white/15 blur-2xl" />
                <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-aurum/25 blur-3xl" />
                <div className="absolute left-8 top-24 h-56 w-56 rounded-full border border-white/20" />
                <div className="absolute right-8 top-28 h-36 w-36 rounded-full border border-aurum/40" />
                <motion.div className="absolute left-1/2 top-[46%] grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/35 bg-white/15 text-white shadow-gold backdrop-blur-xl" animate={{ y: [0, -12, 0], rotate: [0, 4, -4, 0] }} transition={{ duration: 5, repeat: Infinity }}>
                  <Mic2 className="h-24 w-24" />
                </motion.div>
                <div className="absolute left-12 top-40 text-5xl font-black text-aurum/80">♪</div>
                <div className="absolute right-16 top-56 text-5xl font-black text-white/60">♫</div>
                <div className="absolute bottom-36 left-16 text-4xl font-black text-white/50">★</div>
                <div className="absolute bottom-24 right-14"><DancerSilhouette /></div>
                <div className="absolute inset-0 bg-gradient-to-t from-velvet via-velvet/5 to-transparent" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-sm font-black text-royal shadow-lg backdrop-blur">
                  <Mic2 className="h-4 w-4 text-fuchsia-600" />
                  Voice | Dance | Stage
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-aurum">Premium academy visual</p>
                  <h3 className="mt-2 font-display text-4xl font-black">Sing. Dance. Shine.</h3>
                  <p className="mt-2 max-w-sm text-sm font-semibold leading-6 text-white/82">
                    A rich stage-inspired composition with glowing spotlights, music notes, dancer energy, and golden sparkle.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 bg-white p-3">
                {[
                  ['Dance', Music2, 'from-fuchsia-500 to-pink-400'],
                  ['Music', Mic2, 'from-aurum to-pink-400'],
                  ['Stage', Trophy, 'from-royal to-fuchsia-600'],
                ].map(([label, Icon, gradient]) => (
                  <div key={label} className="relative aspect-square overflow-hidden rounded-2xl bg-velvet shadow-lg">
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.42),transparent_28%)]" />
                    <div className="absolute inset-0 grid place-items-center text-white/90"><Icon className="h-12 w-12" /></div>
                    <span className="absolute bottom-2 left-2 right-2 text-center text-xs font-black uppercase tracking-[0.12em] text-white">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const points = ['Voice training', 'Dance training', 'Stage confidence', 'Creative learning', 'Personality development'];

  return (
    <section id="about" className="relative overflow-hidden bg-blush py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(248,200,76,0.28),transparent_25%),radial-gradient(circle_at_82%_10%,rgba(217,70,239,0.2),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.7),rgba(255,241,251,0.96))]" />
      <div className="absolute -left-20 bottom-12 h-72 w-72 rounded-full bg-fuchsia-300/20 blur-3xl" />
      <div className="absolute right-10 top-20 text-7xl font-black text-aurum/20">♪</div>
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/70 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Us"
          title="Where Talent Finds Its Spotlight"
          text="ANT Voice & Dance Talent Academy is a premier destination for aspiring singers and dancers. We nurture talent, build confidence, and inspire creativity in a fun and supportive environment."
        />
        <motion.div className="grid gap-5 md:grid-cols-5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
          {points.map((point, index) => (
            <motion.div key={point} variants={fadeUp} className="rounded-3xl border border-white/70 bg-white/70 p-6 text-center shadow-lg backdrop-blur-xl transition hover:-translate-y-2 hover:shadow-glow">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-aurum to-fuchsia-400 text-velvet shadow-gold">
                {index % 2 === 0 ? <Sparkles className="h-7 w-7" /> : <Music2 className="h-7 w-7" />}
              </div>
              <h3 className="text-lg font-black text-velvet">{point}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Courses() {
  return (
    <section id="courses" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Courses"
          title="Signature Training Programs"
          text="Choose a focused path or mix voice, dance, and performance training for a complete stage journey."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <motion.article key={course.title} className="group relative overflow-hidden rounded-3xl bg-white p-1 shadow-xl ring-1 ring-purple-100" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} transition={{ duration: 0.6 }} whileHover={{ y: -10 }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-90`} />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[1.35rem] bg-white/88 backdrop-blur-xl">
                  <div className="p-4 pb-0">
                    <AbstractStageVisual icon={Icon} gradient={course.gradient} label={course.title} />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl font-black text-velvet">{course.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-700">{course.description}</p>
                    <ul className="mt-5 space-y-2">
                      {course.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                          <span className="h-2 w-2 rounded-full bg-fuchsia-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a href="#enroll" className="mt-6 inline-flex items-center justify-center rounded-full bg-velvet px-5 py-3 text-sm font-black text-white transition group-hover:bg-fuchsia-600">Enroll</a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative overflow-hidden bg-gradient-to-br from-velvet via-royal to-fuchsia-700 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_25%,rgba(248,200,76,0.3),transparent_24%),radial-gradient(circle_at_82%_15%,rgba(255,255,255,0.16),transparent_22%),linear-gradient(115deg,rgba(255,255,255,0.1)_0_1px,transparent_1px_88px)]" />
      <div className="absolute -left-20 top-16 h-80 w-80 rounded-full bg-aurum/20 blur-3xl" />
      <div className="absolute right-8 bottom-10 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Why Choose Us" title="Premium Learning, Real Confidence" text="A supportive academy experience designed for skill, stage exposure, discipline, and joy." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} className="rounded-3xl border border-white/20 bg-white/13 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-aurum to-pink-300 text-velvet shadow-gold"><Icon className="h-7 w-7" /></div>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-2 leading-7 text-white/80">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="bg-champagne py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Highlights"
          title="Performance Highlights"
          text="Premium visual moments for singing, dance, stage confidence, music learning, and annual academy celebrations."
        />
        <div className="grid auto-rows-[220px] gap-5 md:grid-cols-3">
          {gallery.map(([title, gradient, Icon], index) => (
            <motion.a key={title} href="#contact" className={`group relative overflow-hidden rounded-3xl bg-velvet p-6 text-white shadow-xl ${index === 0 || index === 3 ? 'md:row-span-2' : ''}`} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} whileHover={{ scale: 1.025 }}>
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(255,255,255,0.38),transparent_24%),radial-gradient(circle_at_76%_20%,rgba(248,200,76,0.28),transparent_28%)]" />
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/20 backdrop-blur" />
              <div className="absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-velvet/20 blur-xl" />
              <div className="absolute right-7 top-7 text-4xl font-black text-white/30">★</div>
              <div className="absolute bottom-4 right-4 text-white/28 transition group-hover:scale-110 group-hover:text-white/45"><Icon className="h-28 w-28" /></div>
              <div className="relative flex h-full flex-col justify-end">
                <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-white/80">ANT Academy</p>
                <h3 className="font-display text-3xl font-black">{title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnrollBanner() {
  return (
    <section id="enroll" className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="relative overflow-hidden rounded-[2rem] bg-academy-radial p-8 text-center text-white shadow-glow sm:p-12 lg:p-16" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.75 }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.28),transparent_32%),radial-gradient(circle_at_16%_70%,rgba(248,200,76,0.28),transparent_24%),radial-gradient(circle_at_86%_74%,rgba(244,114,182,0.32),transparent_28%)]" />
          <div className="absolute left-10 top-10 text-5xl font-black text-aurum/50">♪</div>
          <div className="absolute right-12 bottom-10 text-5xl font-black text-white/35">★</div>
          <div className="relative">
            <p className="text-lg font-black uppercase tracking-[0.24em] text-aurum">Limited Seats Available</p>
            <h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-black sm:text-6xl">Join Today & Be The Star You Are Meant To Be</h2>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a href={contact.phoneLink} className="rounded-full bg-white px-7 py-4 font-black text-velvet shadow-xl transition hover:-translate-y-1">Call Now</a>
              <a href={contact.whatsappLink} className="rounded-full bg-emerald-400 px-7 py-4 font-black text-velvet shadow-xl transition hover:-translate-y-1">WhatsApp Now</a>
              <a href="#contact" className="rounded-full bg-gradient-to-r from-aurum to-pink-300 px-7 py-4 font-black text-velvet shadow-gold transition hover:-translate-y-1">Enroll Now</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-blush py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(248,200,76,0.22),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(217,70,239,0.2),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.68),rgba(255,241,251,0.96))]" />
      <div className="absolute left-8 top-20 text-6xl font-black text-fuchsia-300/20">♫</div>
      <div className="absolute right-10 bottom-16 text-7xl font-black text-aurum/25">♪</div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Contact" title="Start Your Academy Journey" text="Follow us for latest dance videos, singing performances, events, and admission updates." />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div className="rounded-[2rem] border border-white/70 bg-white/75 p-7 shadow-xl backdrop-blur-xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            <h3 className="font-display text-3xl font-black text-velvet">Direct Contact</h3>
            <div className="mt-6 space-y-4">
              <ContactRow icon={Phone} label="Phone" value={contact.phone} />
              <ContactRow icon={Phone} label="WhatsApp" value={contact.phone} />
              <ContactRow icon={Mail} label="Email" value={contact.email} />
              <ContactRow icon={MapPin} label="Location" value={contact.location} />
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <a href={contact.phoneLink} className="rounded-2xl bg-velvet px-4 py-3 text-center font-black text-white transition hover:bg-fuchsia-600">Call Now</a>
              <a href={contact.whatsappLink} className="rounded-2xl bg-emerald-500 px-4 py-3 text-center font-black text-white transition hover:bg-emerald-600">WhatsApp Now</a>
              <a href={contact.emailLink} className="rounded-2xl bg-aurum px-4 py-3 text-center font-black text-velvet transition hover:bg-yellow-300">Send Email</a>
            </div>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a key={social.name} href={social.href} target="_blank" rel="noreferrer" className={`group flex items-center gap-4 rounded-3xl bg-gradient-to-br ${social.gradient} p-6 text-white shadow-xl transition hover:-translate-y-2`} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20 backdrop-blur-xl transition group-hover:scale-110"><Icon className="h-7 w-7" /></span>
                  <span><span className="block text-xl font-black">{social.name}</span><span className="text-sm font-bold text-white/78">Follow ANT Academy</span></span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-4 rounded-3xl bg-white/80 p-4 shadow-sm">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-aurum to-pink-400 text-velvet">
        <Icon className="h-6 w-6" />
      </span>
      <span>
        <span className="block text-xs font-black uppercase tracking-[0.18em] text-fuchsia-600">{label}</span>
        <span className="mt-1 block break-words text-base font-black text-velvet">{value}</span>
      </span>
    </div>
  );
}

function FloatingButtons() {
  const items = [
    { label: 'WhatsApp', href: contact.whatsappLink, icon: Phone, color: 'bg-emerald-500' },
    { label: 'Call', href: contact.phoneLink, icon: Phone, color: 'bg-aurum text-velvet' },
    { label: 'Instagram', href: 'https://instagram.com/antvoiceanddance', icon: Instagram, color: 'bg-fuchsia-600' },
  ];

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 sm:bottom-8 sm:right-6">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className={`grid h-14 w-14 place-items-center rounded-full ${item.color} p-4 text-white shadow-xl transition hover:-translate-y-1 hover:shadow-glow`}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <Icon className="h-6 w-6" />
          </a>
        );
      })}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-velvet px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl font-black">ANT Voice & Dance Talent Academy</h3>
          <p className="mt-4 leading-7 text-white/70">Premium voice, dance, and performance training for bright young stars.</p>
        </div>
        <FooterList title="Quick Links" items={navLinks.map((link) => [`#${sectionId(link)}`, link])} />
        <FooterList title="Courses" items={courses.map((course) => ['#courses', course.title])} />
        <div>
          <h4 className="text-lg font-black text-aurum">Contact</h4>
          <p className="mt-4 text-white/75">{contact.phone}</p>
          <p className="mt-2 break-words text-white/75">{contact.email}</p>
          <div className="mt-5 flex gap-3">
            {socialLinks.slice(0, 4).map((social) => {
              const Icon = social.icon;
              return (
                <a key={social.name} href={social.href} target="_blank" rel="noreferrer" aria-label={social.name} className="rounded-full bg-white/10 p-3 transition hover:bg-aurum hover:text-velvet">
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-white/60">
        Copyright © 2026 ANT Voice & Dance Talent Academy. All rights reserved.
      </div>
    </footer>
  );
}

function FooterList({ title, items }) {
  return (
    <div>
      <h4 className="text-lg font-black text-aurum">{title}</h4>
      <div className="mt-4 grid gap-2">
        {items.map(([href, label]) => (
          <a key={label} href={href} className="text-white/75 transition hover:text-aurum">
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden font-body text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <WhyChooseUs />
        <Gallery />
        <EnrollBanner />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}



