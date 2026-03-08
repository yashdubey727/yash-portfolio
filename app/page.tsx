"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Moon,
  Sun,
  ArrowUpRight,
  Github,
  Linkedin,
  FileText,
  Sparkles,
  BrainCircuit,
  ChartNoAxesCombined,
  Music4,
  Plane,
  Trophy,
  FolderKanban,
  BriefcaseBusiness,
  BookOpen,
  Mail,
  GraduationCap,
  BadgeCheck,
} from "lucide-react";

const projects = [
  {
    title: "Reimagining Digital Childhoods",
    subtitle: "Product Strategy Initiative",
    points: [
      "$10B TAM analysis, competitive benchmarking, and KPI definition for monetization and positioning.",
      "Feature definitions, engagement hypotheses, and roadmap prioritization tied to experimentation planning.",
      "Executive strategy deck on revenue potential, experience trade-offs, and cross-functional decision support.",
    ],
    tags: ["Product Strategy", "Market Sizing", "Monetization", "KPIs"],
    links: [{ label: "Case Study", href: "/digital-childhood.pdf" }],
  },
  {
    title: "AI Dispute Resolution Engine",
    subtitle: "Enterprise Fintech Concept, inspired by Stripe",
    points: [
      "NLP classification, logistic regression, threshold optimization, and workflow orchestration on 1M+ dispute records.",
      "64% automated triage at t1=0.055 with $325M annual net value and AUC 0.80 validation.",
      "End-to-end ML pipeline with synthetic data modeling, feature engineering, and economic simulation.",
    ],
    tags: ["NLP", "Logistic Regression", "ML Pipeline", "Workflow Automation"],
    links: [{ label: "GitHub", href: "https://github.com/yashdubey727/ai-dispute-resolution-engine" },
            { label: "Live Demo", href: "https://ai-dispute-resolution-engine-zho3kcfunlajv7jep9b7bs.streamlit.app/" },
    ],
  },
  {
    title: "AI EV Mobility Copilot",
    subtitle: "AI Product Prototype, inspired by Mercedes-Benz",
    points: [
      "RAG stack with ChromaDB, SentenceTransformers, optimization algorithms, and Streamlit prototype.",
      "Battery-aware charging recommendations improved charging efficiency by 15 to 20%.",
      "Natural-language preference parsing and route-aware optimization cut planning friction by about 40%.",
    ],
    tags: ["RAG", "ChromaDB", "SentenceTransformers", "Streamlit"],
    links: [
      { label: "GitHub", href: "https://github.com/yashdubey727/ai-ev-mobility-copilot?tab=readme-ov-file" },
      { label: "Live Demo", href: "https://ai-ev-mobility-copilot.streamlit.app" },
    ],
  },
  {
    title: "Operational Risk Event Prediction",
    subtitle: "Machine Learning Risk Analytics",
    points: [
      "Random Forest and Logistic Regression models to detect operational risk patterns in structured datasets.",
      "ROC-AUC, precision-recall, and bias testing for reliable and fair risk prediction.",
    ],
    tags: ["Random Forest", "Logistic Regression", "ROC-AUC", "Bias Testing"],
    links: [],
  },
];

const experience = [
  {
    title: "ICICI Bank",
    role: "Fintech Payments Operations",
    points: [
      "$119M+ daily Card Acquiring and PayFac flows, improving revenue realization by 20%.",
      "DCC expansion across 10K+ cross-border merchants.",
      "Payments infrastructure with 15+ aggregator partners including Razorpay, Paytm, Amazon Pay, Visa, and American Express.",
    ],
    tags: ["PayFac", "DCC", "Payments", "Settlement"],
  },
  {
    title: "IIM Ahmedabad",
    role: "Product & Analytics Intern",
    points: [
      "200GB+ Twitter data processed with Python and Twitter API for sentiment and consumer trend analysis.",
      "NLP pipelines and hybrid CNN-LSTM model using NLTK, Scikit-learn, and Keras achieved 94% accuracy.",
    ],
    tags: ["NLP", "CNN-LSTM", "Python", "Analytics"],
  },
  {
    title: "VNIT Nagpur",
    role: "Machine Learning Research Intern",
    points: [
      "Medical imaging classification pipelines improved through feature engineering and model tuning.",
      "HoG, LBP, and OpenCV workflows for feature extraction, evaluation, and performance optimization.",
    ],
    tags: ["Computer Vision", "OpenCV", "Feature Engineering"],
    links: [{ label: "Publication", href: "/publication.pdf" }],
  },
];

const leadership = [
  {
    title: "GISA Sub-Committee Member, NYU",
    meta: "Sept 2025 to Present",
    point: "Coordinated 600+ attendee university events across logistics, vendors, scheduling, and cross-team execution.",
  },
  {
    title: "Treasurer, MME Department, VNIT",
    meta: "Aug 2022 to May 2023",
    point: "Managed department budgets and operational documentation using Excel and Google Sheets for procurement and stakeholder coordination.",
  },
];

const books = [
  "The Almanack of Naval Ravikant",
  "Atomic Habits",
  "Sapiens",
  "Behave",
  "Antifragile",
];

const quickFocus = [
  { icon: BrainCircuit, label: "AI-enabled product systems" },
  { icon: ChartNoAxesCombined, label: "Analytics and monetization" },
  { icon: Sparkles, label: "User-first product strategy" },
  { icon: BadgeCheck, label: "Fintech and payment systems" },
];

export default function Home() {
  const [dark, setDark] = useState(true);

  const theme = useMemo(
    () => ({
      bg: dark ? "bg-[#060816]" : "bg-slate-50",
      bgSoft: dark ? "bg-white/6" : "bg-white/80 backdrop-blur-xl",
      text: dark ? "text-white" : "text-slate-950",
      textSoft: dark ? "text-slate-300" : "text-slate-600",
      border: dark ? "border-white/10" : "border-slate-200",
      hover: dark
        ? "hover:border-cyan-400/40 hover:bg-white/[0.08]"
        : "hover:border-slate-400 hover:bg-white",
      pill: dark ? "bg-white/8 text-slate-200" : "bg-slate-100 text-slate-700",
      glow: dark
        ? "from-cyan-500/20 via-violet-500/15 to-emerald-500/10"
        : "from-cyan-200/70 via-violet-200/60 to-emerald-200/40",
      button: dark
        ? "bg-gradient-to-r from-cyan-300 to-violet-300 text-slate-950 hover:opacity-90"
        : "bg-slate-950 text-white hover:bg-slate-800",
      buttonAlt: dark
        ? "bg-white/6 text-white hover:bg-white/12"
        : "bg-slate-100 text-slate-950 hover:bg-slate-200",
    }),
    [dark]
  );

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.7, ease: "easeOut" as const },
  };

  return (
    <main className={`${theme.bg} ${theme.text} min-h-screen transition-colors duration-500`}>
      <div className="fixed inset-0 -z-10 overflow-hidden transition-colors duration-500">
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.glow}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.16),transparent_24%),radial-gradient(circle_at_80%_12%,rgba(168,85,247,0.14),transparent_24%),radial-gradient(circle_at_50%_88%,rgba(16,185,129,0.12),transparent_22%)]" />

        <motion.div
          animate={{ x: [0, 36, 0], y: [0, 24, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] top-[10%] h-72 w-72 rounded-full bg-cyan-400/18 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -34, 0], y: [0, -18, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[8%] top-[10%] h-80 w-80 rounded-full bg-violet-400/18 blur-[130px]"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -28, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[8%] left-[28%] h-72 w-72 rounded-full bg-emerald-400/14 blur-[120px]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-6 md:px-10 lg:px-12">
        <nav
          className={`sticky top-0 z-30 mb-12 flex items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-500 ${theme.border} ${theme.bgSoft}`}
        >
          <div className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.18em] uppercase">
            <GraduationCap size={16} /> Yash Dubey
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#projects"
              className={`hidden rounded-full px-4 py-2 text-sm md:inline ${theme.textSoft} hover:text-current`}
            >
              Work
            </a>
            <a
              href="#experience"
              className={`hidden rounded-full px-4 py-2 text-sm md:inline ${theme.textSoft} hover:text-current`}
            >
              Experience
            </a>
            <a
              href="#contact"
              className={`hidden rounded-full px-4 py-2 text-sm md:inline ${theme.textSoft} hover:text-current`}
            >
              Contact
            </a>

            <button
              onClick={() => setDark((v) => !v)}
              className={`rounded-full border px-3 py-3 transition-all duration-300 ${theme.border} ${theme.bgSoft}`}
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </nav>

        <motion.section
          {...fadeUp}
          className="grid gap-10 pb-16 pt-8 md:grid-cols-[1.18fr_0.82fr] md:items-center md:pb-24"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`mb-5 inline-flex rounded-full border px-4 py-2 text-sm ${theme.border} ${theme.bgSoft}`}
            >
              Product, fintech, analytics, and emerging AI
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className={`mb-5 inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm ${theme.border} ${theme.bgSoft}`}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#57068c] text-white text-xs font-semibold">
                NYU
              </div>
              New York University
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className={`max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl ${
                dark
                  ? "bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-slate-950 via-slate-800 to-slate-600 bg-clip-text text-transparent"
              }`}
            >
              Product manager working at the intersection of user needs, business strategy, and emerging AI.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className={`mt-6 max-w-2xl text-base leading-7 md:text-lg ${theme.textSoft}`}
            >
              NYU graduate student building products that drive business impact, operational efficiency, and user value.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              {quickFocus.map(({ icon: Icon, label }) => (
                <motion.div
                  whileHover={{ y: -2, scale: 1.02 }}
                  key={label}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs transition-all duration-300 ${theme.border} ${theme.bgSoft}`}
                >
                  <Icon size={14} />
                  {label}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className={`rounded-full px-5 py-3 text-sm font-medium shadow-[0_0_35px_rgba(56,189,248,0.18)] transition-all duration-300 ${theme.button}`}
              >
                View case studies
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${theme.buttonAlt}`}
              >
                <span className="inline-flex items-center gap-2">
                  <FileText size={16} /> Resume
                </span>
              </a>

              <a
                href="https://github.com/yashdubey727?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${theme.buttonAlt}`}
              >
                <span className="inline-flex items-center gap-2">
                  <Github size={16} /> GitHub
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/dubeyyash/"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${theme.buttonAlt}`}
              >
                <span className="inline-flex items-center gap-2">
                  <Linkedin size={16} /> LinkedIn
                </span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16 }}
            className="grid gap-6 justify-items-end"
          >
            <div
              className={`relative w-full max-w-[320px] overflow-hidden rounded-[32px] border p-3 shadow-[0_0_60px_rgba(56,189,248,0.08)] ${theme.border} ${theme.bgSoft}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-violet-400/15 to-transparent" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10">
                <img
                  src="/profile.jpeg"
                  alt="Yash Dubey"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            <div className={`w-full rounded-[28px] border p-6 md:p-7 ${theme.border} ${theme.bgSoft}`}>
              <div className="grid grid-cols-2 gap-5">
                {[
                  ["4", "Product case studies"],
                  ["$119M+", "Daily payments exposure"],
                  ["$325M", "Simulated product impact"],
                  ["600+", "Event operations scale"],
                ].map(([value, label]) => (
                  <motion.div key={label} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    <div className="text-3xl font-semibold md:text-4xl">{value}</div>
                    <div className={`mt-1 text-sm ${theme.textSoft}`}>{label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section {...fadeUp} id="projects" className="py-12 md:py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className={`mb-2 text-sm uppercase tracking-[0.2em] ${theme.textSoft}`}>Selected work</p>
              <h2 className="inline-flex items-center gap-3 text-3xl font-semibold md:text-4xl">
                <FolderKanban size={28} /> Product case studies
              </h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <motion.article
  key={project.title}
  whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className={`rounded-[28px] border p-6 md:p-7 shadow-[0_10px_30px_rgba(2,8,23,0.08)] transition-all duration-300 ${theme.border} ${theme.hover} ${theme.bgSoft}`}
              >
                <div className="mb-4">
                  <div className={`mb-2 text-sm ${theme.textSoft}`}>{project.subtitle}</div>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                </div>

                <div className="space-y-3">
                  {project.points.map((point) => (
                    <p key={point} className={`text-sm leading-6 md:text-[15px] ${theme.textSoft}`}>
                      {point}
                    </p>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`rounded-full px-3 py-1.5 text-xs ${theme.pill}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {project.links?.length ? (
                  <div className="mt-6 flex flex-wrap gap-4 text-sm">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium hover:opacity-80"
                      >
                        {link.label} <ArrowUpRight size={14} />
                      </a>
                    ))}
                  </div>
                ) : null}
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="experience" className="py-12 md:py-16">
          <p className={`mb-2 text-sm uppercase tracking-[0.2em] ${theme.textSoft}`}>Experience</p>
          <h2 className="mb-8 inline-flex items-center gap-3 text-3xl font-semibold md:text-4xl">
            <BriefcaseBusiness size={28} /> Fintech, analytics, and research
          </h2>

          <div className="grid gap-6">
            {experience.map((item) => (
              <div
                key={item.title}
                className={`rounded-[28px] border p-6 md:p-7 shadow-[0_10px_30px_rgba(2,8,23,0.06)] ${theme.border} ${theme.bgSoft}`}
              >
                <div className="mb-4 md:flex md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className={`mt-1 text-sm ${theme.textSoft}`}>{item.role}</p>
                  </div>

                  {item.links?.length ? (
                    <div className="mt-3 flex gap-4 md:mt-0">
                      {item.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium hover:opacity-80"
                        >
                          {link.label} <ArrowUpRight size={14} />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="space-y-3">
                  {item.points.map((point) => (
                    <p key={point} className={`text-sm leading-6 md:text-[15px] ${theme.textSoft}`}>
                      {point}
                    </p>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className={`rounded-full px-3 py-1.5 text-xs ${theme.pill}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="grid gap-6 py-12 md:grid-cols-2 md:py-16">
          <div className={`rounded-[28px] border p-6 md:p-7 ${theme.border} ${theme.bgSoft}`}>
            <p className={`mb-2 text-sm uppercase tracking-[0.2em] ${theme.textSoft}`}>Leadership</p>
            <h2 className="mb-6 text-3xl font-semibold">Execution beyond the classroom</h2>

            <div className="space-y-5">
              {leadership.map((item) => (
                <div key={item.title}>
                  <div className="text-lg font-medium">{item.title}</div>
                  <div className={`mb-2 text-sm ${theme.textSoft}`}>{item.meta}</div>
                  <p className={`text-sm leading-6 md:text-[15px] ${theme.textSoft}`}>{item.point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-[28px] border p-6 md:p-7 ${theme.border} ${theme.bgSoft}`}>
            <p className={`mb-2 text-sm uppercase tracking-[0.2em] ${theme.textSoft}`}>How I think</p>
            <h2 className="mb-6 text-3xl font-semibold">Product principles</h2>

            <div className="space-y-4 text-sm leading-6 md:text-[15px]">
              <p>
                <span className="font-medium">User first.</span> Understand behavior and pain points before designing features.
              </p>
              <p>
                <span className="font-medium">Systems thinking.</span> Products operate within data, operational, and ecosystem constraints.
              </p>
              <p>
                <span className="font-medium">Technology as a lever.</span> AI enables scalable decision systems and new product capability.
              </p>
              <p>
                <span className="font-medium">Business impact.</span> Strong products drive revenue growth, monetization, and operational efficiency.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="grid gap-6 py-12 md:grid-cols-[0.9fr_1.1fr] md:py-16">
          <div className={`rounded-[28px] border p-6 md:p-7 ${theme.border} ${theme.bgSoft}`}>
            <p className={`mb-2 text-sm uppercase tracking-[0.2em] ${theme.textSoft}`}>Beyond work</p>
            <h2 className="mb-5 text-3xl font-semibold">What keeps me curious</h2>

            <div className={`space-y-3 text-sm leading-6 md:text-[15px] ${theme.textSoft}`}>
              <p className="inline-flex items-center gap-2">
                <Music4 size={16} className="shrink-0" />
                <span>
                  <span className="font-medium text-current">DJing.</span> Mixing music and rhythm as a creative outlet.
                </span>
              </p>
              <p className="inline-flex items-center gap-2">
                <Trophy size={16} className="shrink-0" />
                <span>
                  <span className="font-medium text-current">Sports.</span> Badminton and soccer.
                </span>
              </p>
              <p className="inline-flex items-center gap-2">
                <Plane size={16} className="shrink-0" />
                <span>
                  <span className="font-medium text-current">Dance and travel.</span> Movement, culture, and new perspectives.
                </span>
              </p>
            </div>
          </div>

          <div className={`rounded-[28px] border p-6 md:p-7 ${theme.border} ${theme.bgSoft}`}>
            <p className={`mb-2 text-sm uppercase tracking-[0.2em] ${theme.textSoft}`}>Books</p>
            <h2 className="mb-5 inline-flex items-center gap-3 text-3xl font-semibold">
              <BookOpen size={26} /> Reading list
            </h2>

            <div className="grid gap-3 sm:grid-cols-2">
              {books.map((book) => (
                <div key={book} className={`rounded-2xl border px-4 py-4 text-sm ${theme.border}`}>
                  {book}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="contact" className="py-12 md:py-20">
          <div className={`rounded-[32px] border p-8 md:p-10 ${theme.border} ${theme.bgSoft}`}>
            <p className={`mb-2 text-sm uppercase tracking-[0.2em] ${theme.textSoft}`}>Contact</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Let’s build meaningful products.</h2>
            <p className={`mt-4 max-w-2xl text-sm leading-6 md:text-[15px] ${theme.textSoft}`}>
              I am interested in product, fintech, AI, analytics, and opportunities that sit close to users and measurable business outcomes.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:yad3763@nyu.edu?subject=Connecting%20from%20your%20portfolio"
                className={`rounded-full px-5 py-3 text-sm font-medium ${theme.button}`}
              >
                <span className="inline-flex items-center gap-2">
                  <Mail size={16} /> Email me
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/dubeyyash/"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full px-5 py-3 text-sm font-medium ${theme.buttonAlt}`}
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/yashdubey727?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full px-5 py-3 text-sm font-medium ${theme.buttonAlt}`}
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}