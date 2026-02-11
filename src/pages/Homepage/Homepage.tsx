import ServiceType from 'types/ServiceType'
import {
  HiCode,
  HiLightningBolt,
  HiRefresh,
  HiShieldCheck,
  HiSparkles,
  HiOutlineBadgeCheck,
} from 'react-icons/hi'
import Service from 'components/Service/Service'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <>
      <Helmet>
        <title>Code Obsidian - Elevate Your Software Experience</title>
        <meta
          name="description"
          content="Discover cutting-edge tech and elevate your software experience with Code Obsidian. Specializing in full-stack web application development, API integration, and React Native mobile apps."
        />
        <meta property="og:title" content="Code Obsidian - Elevate Your Software Experience" />
        <meta
          property="og:description"
          content="Discover cutting-edge tech and elevate your software experience with Code Obsidian. Specializing in full-stack web and mobile development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.codeobsidian.com" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <main>
        <Hero />
        <Services />
        <Delivery />
        <Process />
        <ConsultCta />
      </main>
    </>
  )
}

const Hero = () => {
  return (
    <section className="relative pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent pointer-events-none" />
      <div className="container relative grid gap-14 md:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="flex flex-col gap-6 z-10">
          <div className="animate-in inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-2 w-fit">
            <HiSparkles className="text-accent w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Custom builds & site revamps
            </span>
          </div>
          <h1 className="animate-in font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight">
            <span className="text-primary">Modern experiences</span>
            <span className="block text-secondary mt-1">designed to convert & scale.</span>
          </h1>
          <p className="animate-in text-secondary text-lg md:text-xl max-w-[560px] leading-relaxed">
            We craft sleek, high-performing web and mobile experiences—whether you need a brand-new build or a future-proof refresh that keeps customers engaged.
          </p>
          <div className="animate-in flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/contact" className="primary-button text-sm">
              Book a consult
            </Link>
            <a href="#services" className="secondary-button text-sm">
              View capabilities
            </a>
          </div>
          <div className="animate-in grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-[600px]">
            {[
              'Full-stack builds with modern tooling',
              'Site updates that lift speed & UX',
              'Secure deployments with ongoing care',
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-border bg-bg-card/50 p-3"
              >
                <HiOutlineBadgeCheck className="text-accent w-5 h-5 mt-0.5 shrink-0" />
                <span className="text-sm leading-snug text-primary/90">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="animate-in w-full max-w-[480px] rounded-3xl border border-border bg-bg-card p-4 shadow-card">
            <div className="rounded-2xl bg-bg-elevated/80 p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-error" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-success" />
                </div>
                <span className="text-muted text-xs font-medium">Live builds • 24/7 uptime</span>
              </div>
              <img
                src="assets/images/hero.svg"
                alt=""
                className="w-full min-w-0 rounded-xl bg-bg/50 p-4"
              />
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-bg-card/50 p-3">
                  <p className="text-muted text-xs uppercase tracking-wider font-medium">Performance</p>
                  <p className="text-primary text-lg font-semibold font-display">99.9%</p>
                  <p className="text-secondary text-xs">Core Web Vitals tuned</p>
                </div>
                <div className="rounded-xl border border-border bg-bg-card/50 p-3">
                  <p className="text-muted text-xs uppercase tracking-wider font-medium">Delivery</p>
                  <p className="text-primary text-lg font-semibold font-display">Lightning-fast</p>
                  <p className="text-secondary text-xs">CI/CD & observability</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node/Express', 'API Design', 'Mobile', 'Cloud Ready'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-accent-muted px-3 py-1 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="glow absolute right-0 top-1/2 -z-10 h-[400px] w-[400px] -translate-y-1/2 translate-x-1/3 rounded-full bg-accent/20 blur-[100px] hidden md:block" />
        </div>
      </div>
    </section>
  )
}

const Services = () => {
  const services: ServiceType[] = [
    {
      icon: <HiCode />,
      title: 'Full-Stack Web Application Development',
      content:
        'Sleek, scalable builds using the MERN stack. From architecture to launch, we engineer experiences that move fast and convert.',
    },
    {
      icon: <HiLightningBolt />,
      title: 'API Development & Integration',
      content:
        'High-trust APIs for web and mobile. Secure auth, third-party integrations, and resilient data flows that keep your product connected.',
    },
    {
      icon: <HiRefresh />,
      title: 'Site Revamps & Performance Upgrades',
      content:
        'Future-proof your existing site with modern UI, accessibility, and speed optimizations that keep customers engaged and coming back.',
    },
    {
      icon: <HiShieldCheck />,
      title: 'Reliability, Security & Compliance',
      content:
        'Hardened deployments, observability, and security-first practices so your experiences stay stable under real-world traffic.',
    },
    {
      icon: <HiSparkles />,
      title: 'Design Systems & Microinteractions',
      content:
        'Cohesive component libraries, motion systems, and on-brand microinteractions that make your product feel polished and premium.',
    },
    {
      icon: <HiOutlineBadgeCheck />,
      title: 'Lifecycle Support & Iteration',
      content:
        'Continuous improvements, A/B testing, and roadmap-aligned updates to keep your product evolving with your customers.',
    },
  ]

  return (
    <section id="services">
      <div className="container flex flex-col gap-10">
        <div className="animate-in-screen flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-accent text-xs font-semibold uppercase tracking-wider">What we ship</p>
            <h2 className="font-display text-3xl md:text-4xl text-primary font-semibold tracking-tight">
              Built for performance & scale
            </h2>
            <p className="text-secondary max-w-[640px] leading-relaxed">
              Full-stack delivery, performance upgrades, and ongoing improvements designed to keep your digital experience sharp.
            </p>
          </div>
          <Link to="/contact" className="secondary-button w-fit">
            Book a consult
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Service key={i} icon={s.icon} title={s.title} content={s.content} />
          ))}
        </div>
      </div>
    </section>
  )
}

const Delivery = () => {
  const highlights = [
    {
      title: 'Custom builds for any industry',
      copy: 'Productized service? SaaS? Content-driven brand site? We tailor the stack and workflows to your goals.',
    },
    {
      title: 'Site refreshes that feel brand new',
      copy: 'Modern layouts, motion, and accessibility-minded polish that breathe life into your existing presence.',
    },
    {
      title: 'Speed & reliability baked in',
      copy: 'CI/CD pipelines, observability, and performance budgets keep every release stable and measurable.',
    },
  ]

  return (
    <section>
      <div className="container rounded-3xl border border-border bg-bg-card p-8 md:p-12 shadow-card">
        <div className="animate-in-screen flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
          <div className="flex flex-col gap-2">
            <p className="text-muted uppercase tracking-wider text-xs font-semibold">
              For custom projects & continuous updates
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-primary font-semibold tracking-tight">
              Build new. Refresh fast. Iterate often.
            </h2>
            <p className="text-secondary max-w-[680px] leading-relaxed">
              We pair product thinking with engineering discipline. Expect purposeful design, thoughtful motion, and delivery pipelines that keep momentum high.
            </p>
          </div>
          <Link to="/contact" className="primary-button w-fit">
            Start a project
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="animate-in-screen rounded-2xl border border-border bg-bg-elevated/50 p-5 transition-colors hover:border-border-hover"
            >
              <h3 className="font-display text-primary text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{item.copy}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { label: 'Launch speed', value: '2-4 week sprints', note: 'Lean roadmaps that keep stakeholders aligned.' },
            { label: 'Collaboration', value: 'Async & live touchpoints', note: 'Demos, changelogs, and transparent comms.' },
            { label: 'Quality', value: 'Reviews + automation', note: 'Linting, testing, and performance checks in CI.' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="animate-in-screen rounded-2xl border border-border bg-bg-elevated/80 p-5 flex flex-col gap-1"
            >
              <p className="text-muted uppercase text-xs tracking-wider font-medium">{stat.label}</p>
              <p className="font-display text-primary text-xl font-semibold">{stat.value}</p>
              <p className="text-secondary text-sm">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Process = () => {
  const steps = [
    {
      title: 'Strategy & scoping',
      copy: 'We align on outcomes, key audiences, and success metrics before writing a single line of code.',
    },
    {
      title: 'Design & motion system',
      copy: 'Modern UI, accessible patterns, and purposeful microinteractions that highlight your brand story.',
    },
    {
      title: 'Build, integrate, validate',
      copy: 'MERN builds, API integrations, and mobile-ready experiences with quality gates in place.',
    },
    {
      title: 'Launch & continuous improvement',
      copy: 'Observability, performance tuning, and iterative releases based on real user feedback.',
    },
  ]

  return (
    <section>
      <div className="container grid gap-10 md:grid-cols-[0.5fr_1.5fr] items-start">
        <div className="animate-in-screen flex flex-col gap-2">
          <p className="text-muted uppercase tracking-wider text-xs font-semibold">How we deliver</p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-semibold tracking-tight">
            A process built for momentum
          </h2>
          <p className="text-secondary leading-relaxed">
            Transparent checkpoints, proactive communication, and measurable releases keep your project on track.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="animate-in-screen relative rounded-2xl border border-border bg-bg-card p-5 md:p-6 overflow-hidden transition-colors hover:border-border-hover"
            >
              <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-muted font-display text-sm font-semibold text-accent">
                {idx + 1}
              </div>
              <div className="pl-[72px]">
                <h3 className="font-display text-primary text-lg font-semibold mb-1">{step.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{step.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ConsultCta = () => {
  return (
    <section className="mb-24 md:mb-32">
      <div className="container">
        <div className="animate-in-screen relative overflow-hidden rounded-3xl border border-border bg-bg-card px-6 py-12 md:px-12 md:py-16 shadow-card">
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2 max-w-[640px]">
              <p className="text-accent text-xs font-semibold uppercase tracking-wider">Ready when you are</p>
              <h2 className="font-display text-3xl md:text-4xl text-primary font-semibold tracking-tight">
                Let's design the next release together.
              </h2>
              <p className="text-secondary leading-relaxed">
                Tell us about your custom build or site update. We'll propose a roadmap, timeline, and motion-rich experience that keeps users engaged.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to="/contact" className="primary-button text-sm">
                Book a consult
              </Link>
              <Link to="/about" className="secondary-button text-sm">
                Meet the team
              </Link>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/10 blur-[100px] pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
