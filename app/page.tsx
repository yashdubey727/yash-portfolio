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
  title: "AI Launch Copilot",
  subtitle: "AI Product Strategy and Go-to-Market Prototype",
  featured: true,
  problem:
    "Product teams often struggle to turn messy launch inputs into clear positioning, messaging, rollout plans, and cross-functional execution.",
  impact:
    "Improved launch planning clarity and reduced planning friction through an AI-assisted GTM workflow prototype.",
  points: [
    "Built an AI-powered launch planning copilot to structure positioning, customer segmentation, messaging, and rollout decisions for product teams.",
    "Designed workflows for launch planning, cross-functional alignment, and execution tracking to improve decision speed and team coordination.",
    "Combined product strategy, AI-assisted content generation, and structured planning to simulate a scalable launch management experience.",
  ],
  tags: ["Product Strategy", "Go-to-Market", "AI Workflow", "Launch Planning"],
  image: "/launch-copilot.png",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/yashdubey727/ai-launch-copilot",
    },
    {
      label: "Live Demo",
      href: "https://ai-launch-copilot.vercel.app",
    },
  ],
},
  {
    title: "AI Dispute Resolution Engine",
    subtitle: "Enterprise Fintech Concept inspired by Stripe",
    problem:
      "Dispute operations are slow, manual, and expensive, making it hard for teams to triage cases efficiently and protect margin.",
    impact: "$325M simulated annual net value with 64% automated triage and AUC 0.80 model validation.",
    points: [
      "Designed an AI-powered dispute workflow using NLP classification, logistic regression, threshold optimization, and workflow orchestration across 1M+ dispute records.",
      "Achieved 64% automated triage at t1=0.055, with AUC 0.80 validation and a simulated $325M annual net value impact.",
      "Built an end-to-end ML pipeline with synthetic data modeling, feature engineering, economic simulation, and product logic for operational decisioning.",
    ],
    tags: ["NLP", "Logistic Regression", "ML Pipeline", "Workflow Automation"],
    image: "/dispute-engine.png",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/yashdubey727/ai-dispute-resolution-engine",
      },
      {
        label: "Live Demo",
        href: "https://ai-dispute-resolution-engine-zho3kcfunlajv7jep9b7bs.streamlit.app/",
      },
    ],
  },
  {
    title: "AI EV Mobility Copilot",
    subtitle: "AI Product Prototype inspired by Mercedes-Benz",
    problem:
      "EV drivers face fragmented planning across charging, routing, battery constraints, and personal preferences.",
    impact: "Improved charging efficiency by 15 to 20% and reduced planning friction by about 40% in the prototype experience.",
    points: [
      "Built a RAG-powered EV planning copilot using ChromaDB, SentenceTransformers, optimization algorithms, and a Streamlit prototype.",
      "Delivered battery-aware charging recommendations that improved charging efficiency by 15 to 20% across modeled journeys.",
      "Translated natural-language preferences into route-aware optimization, reducing trip planning friction by about 40% in the prototype experience.",
    ],
    tags: ["RAG", "ChromaDB", "SentenceTransformers", "Streamlit"],
    image: "/ev-copilot.png",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/yashdubey727/ai-ev-mobility-copilot?tab=readme-ov-file",
      },
      {
        label: "Live Demo",
        href: "https://ai-ev-mobility-copilot.streamlit.app",
      },
    ],
  },
  {
    title: "Reimagining Digital Childhoods",
    subtitle: "Product Strategy Initiative",
    problem:
      "Digital experiences for children often lack clear monetization logic, durable engagement strategy, and thoughtful experience trade-off design.",
    impact: "$10B TAM framing with strategic roadmap, KPI definition, and monetization analysis for product decision-making.",
    points: [
      "Conducted $10B TAM analysis, competitive benchmarking, and KPI definition to evaluate monetization and positioning opportunities.",
      "Developed feature concepts, engagement hypotheses, and roadmap prioritization tied to experimentation and growth planning.",
      "Created an executive strategy deck on revenue potential, user experience trade-offs, and cross-functional decision support.",
    ],
    tags: ["Product Strategy", "Market Sizing", "Monetization", "KPIs"],
    image: "/digital-childhood.png",
    links: [{ label: "Case Study", href: "/digital-childhood.pdf" }],
  },
  {
    title: "Operational Risk Event Prediction",
    subtitle: "Machine Learning Risk Analytics",
    problem:
      "Operational risk teams need earlier detection of enterprise risk patterns without relying only on reactive review.",
    impact: "Improved reliability of structured risk detection through validated ML-based decision support.",
    points: [
      "Built Random Forest and Logistic Regression models to identify operational risk patterns across structured enterprise datasets.",
      "Validated model quality using ROC-AUC, precision-recall evaluation, cross-validation, and bias testing for reliable decision support.",
    ],
    tags: ["Random Forest", "Logistic Regression", "ROC-AUC", "Bias Testing"],
    image: "/risk-prediction.png",
    links: [],
  },
];

const experience = [
  {
    title: "ICICI Bank",
    role: "Fintech Payments Operations",
    points: [
      "Managed $119M+ in daily Card Acquiring and PayFac flows, improving revenue realization by 20%.",
      "Supported Dynamic Currency Conversion expansion across 10K+ cross-border merchants.",
      "Worked across payments infrastructure with 15+ aggregator partners including Razorpay, Paytm, Amazon Pay, Visa, and American Express.",
    ],
    tags: ["PayFac", "DCC", "Payments", "Settlement"],
  },
  {
    title: "IIM Ahmedabad",
    role: "Product & Analytics Intern",
    points: [
      "Processed 200GB+ of Twitter data using Python and the Twitter API to analyze sentiment and consumer behavior trends.",
      "Built NLP pipelines and a hybrid CNN-LSTM model using NLTK, Scikit-learn, and Keras, achieving 94% accuracy.",
    ],
    tags: ["NLP", "CNN-LSTM", "Python", "Analytics"],
  },
  {
    title: "VNIT Nagpur",
    role: "Machine Learning Research Intern",
    points: [
      "Improved medical imaging classification pipelines through feature engineering, experimentation, and model tuning.",
      "Used HoG, LBP, and OpenCV workflows for feature extraction, evaluation, and performance optimization.",
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
      impactCard: dark
        ? "border-cyan-400/20 bg-cyan-400/10"
        : "border-cyan-200 bg-cyan-50",
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
          className="grid gap-10 pb-16 pt-8 md:grid-cols-[1.2fr_0.8fr] md:items-center md:pb-24"
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
              className={`max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl ${
                dark
                  ? "bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-slate-950 via-slate-800 to-slate-600 bg-clip-text text-transparent"
              }`}
            >
              Building product experiences at the intersection of user insight, business strategy, fintech, and AI.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className={`mt-6 max-w-2xl text-base leading-7 md:text-lg ${theme.textSoft}`}
            >
              I am an NYU graduate student with experience across payments, analytics, research, and AI product concepts. I build products and case studies grounded in user needs, measurable business outcomes, and operational scale.
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
                href="/resume-v2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full px-5 py-3 text-sm font-medium ${theme.buttonAlt}`}
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
              className={`relative w-full max-w-[280px] overflow-hidden rounded-[28px] border p-3 shadow-[0_0_60px_rgba(56,189,248,0.08)] ${theme.border} ${theme.bgSoft}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-violet-400/15 to-transparent" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] border border-white/10">
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
                  ["5", "Product case studies"],
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
                className={`rounded-[28px] border p-6 md:p-7 shadow-[0_10px_30px_rgba(2,8,23,0.08)] transition-all duration-300 ${theme.border} ${theme.hover} ${theme.bgSoft} ${
                  project.featured ? "lg:col-span-2" : ""
                }`}
              >
                <div className="mb-4">
                  {project.featured ? (
                    <div className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                      Featured project
                    </div>
                  ) : null}
                  <div className={`mb-2 text-sm ${theme.textSoft}`}>{project.subtitle}</div>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                </div>

                <div className={`mb-5 rounded-2xl border p-4 ${theme.border}`}>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    Problem
                  </div>
                  <p className={`text-sm leading-6 md:text-[15px] ${theme.textSoft}`}>
                    {project.problem}
                  </p>
                </div>

                <div className="mb-5 overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={project.image}
                    alt={`${project.title} visual`}
                    className="h-[220px] w-full object-cover"
                  />
                </div>

                <div className={`mb-5 rounded-2xl border p-4 ${theme.impactCard}`}>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-[0.18em]">
                    Impact
                  </div>
                  <p className="text-sm leading-6 md:text-[15px]">
                    {project.impact}
                  </p>
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