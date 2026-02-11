import Principle from 'components/Principle/Principle'
import TeamMember from 'components/TeamMember/TeamMember'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import PrincipleType from 'types/PrincipleType'
import TeamMemberType from 'types/TeamMemberType'

export default function About() {
  return (
    <main className="page">
      <Helmet>
        <title>About Us - Code Obsidian</title>
        <meta
          name="description"
          content="Learn about Code Obsidian's core principles, mission, and the innovative team behind our technology solutions."
        />
      </Helmet>
      <Hero />
      <Principles />
      <Team />
      <Culture />
    </main>
  )
}

const Hero = () => {
  const stats = [
    { label: 'Projects delivered', value: '120+' },
    { label: 'Avg. response time', value: '~1 business day' },
    { label: 'Stack coverage', value: 'Web • Mobile • API' },
  ]

  return (
    <section className="relative pt-4 pb-8">
      <div className="container grid gap-12 md:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="flex flex-col gap-6 z-10">
          <h1 className="animate-in font-display text-4xl md:text-5xl font-semibold leading-[1.08] tracking-tight text-primary">
            We build the products we want to use.
          </h1>
          <p className="animate-in text-secondary text-lg md:text-xl max-w-[640px] leading-relaxed">
            Code Obsidian is a lean team of builders who blend product thinking with engineering rigor. We craft modern experiences, keep them performant, and stay close to the people who rely on them every day.
          </p>
          <div className="animate-in flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/contact" className="primary-button text-sm">
              Book a consult
            </Link>
            <Link to="/contact" className="secondary-button text-sm">
              Get in touch
            </Link>
          </div>
          <div className="animate-in grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-[640px]">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-bg-card p-4 transition-colors hover:border-border-hover"
              >
                <p className="text-muted uppercase tracking-wider text-xs font-medium mb-1">{stat.label}</p>
                <p className="font-display text-primary text-xl font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="animate-in rounded-3xl border border-border bg-bg-card p-6 shadow-card">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="text-muted text-xs font-semibold uppercase tracking-wider">Code Obsidian</span>
                <span className="rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs text-secondary font-medium">
                  Remote-first
                </span>
              </div>
              <p className="font-display text-primary text-2xl md:text-3xl font-semibold leading-snug">
                We partner with teams of all sizes to ship polished experiences, keep them stable, and iterate with confidence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Product strategy with design + engineering in the room',
                  'Roadmap-friendly delivery with measurable milestones',
                  'Motion, accessibility, and performance baked into every release',
                  'Transparent communication, weekly demos, and async updates',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-xl border border-border bg-bg-elevated/50 p-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                    <p className="text-secondary text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-border bg-bg-elevated/50 p-4 flex flex-col gap-1">
                <p className="text-muted text-xs font-semibold uppercase tracking-wider">Engagement models</p>
                <p className="font-display text-primary text-lg font-semibold">New builds • Revamps • Ongoing optimization</p>
                <p className="text-secondary text-sm leading-relaxed">
                  Pick a sprint cadence or retain us to keep shipping updates after launch.
                </p>
              </div>
            </div>
          </div>
          <div className="glow absolute -left-20 top-1/2 -z-10 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-accent/15 blur-[100px] hidden md:block" />
        </div>
      </div>
    </section>
  )
}

const Principles = () => {
  const principles: PrincipleType[] = [
    {
      title: 'Innovation-Driven Solutions',
      content:
        'At Code Obsidian, we thrive on innovation. We constantly push the boundaries of technology to craft unique and forward-thinking solutions for our clients. We believe in leveraging the latest tools and methodologies to create software that not only meets but exceeds your expectations.',
    },
    {
      title: 'Client-Centric Approach',
      content:
        "Your success is our top priority. We work closely with you to understand your vision, objectives, and challenges. Our client-centric approach ensures that every line of code we write is aligned with your goals. We're not just developers; we're your partners in achieving digital excellence.",
    },
    {
      title: 'Quality Without Compromise',
      content:
        'Quality is the cornerstone of everything we do. We adhere to industry best practices and rigorous testing standards to deliver software that is robust, secure, and reliable. Our commitment to excellence is unwavering, ensuring your application performs flawlessly, even under the most demanding conditions.',
    },
    {
      title: 'Transparent Communication',
      content:
        'Open and transparent communication is fundamental to our work ethic. We keep you informed at every stage of the development process, providing regular updates and seeking your feedback. Our goal is to foster a collaborative partnership built on trust and mutual understanding.',
    },
    {
      title: 'Scalability and Future-Proofing',
      content:
        "We don't just build for today; we architect for tomorrow. Our solutions are designed with scalability and adaptability in mind. Whether your project is a startup venture or a large enterprise application, we ensure it can evolve and grow seamlessly as your business does.",
    },
  ]

  return (
    <section>
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="animate-in text-muted uppercase tracking-wider text-xs font-semibold">How we deliver</p>
          <h2 className="animate-in font-display text-3xl md:text-4xl text-primary font-semibold tracking-tight">
            Principles that keep projects moving
          </h2>
          <p className="animate-in text-secondary max-w-[720px] leading-relaxed">
            From the first discovery call to post-launch iteration, we anchor every decision to these values so you always know what to expect when you build with us.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {principles.map((p, i) => (
            <Principle key={i} title={p.title} content={p.content} />
          ))}
        </div>
      </div>
    </section>
  )
}

const Team = () => {
  const teamMembers : TeamMemberType[] = [
    {
      imgSrc: 'https://res.cloudinary.com/ddumljyu6/image/upload/v1717052932/tbr1elzoatkihijnsrv9.jpg',
      name: 'Tory Redner',
      position: 'CEO & Founder',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    },
    {
      imgSrc: 'https://res.cloudinary.com/ddumljyu6/image/upload/v1717051845/vclojnsdngkcejes9os1.jpg',
      name: 'Nathanael Hauser',
      position: 'CTO & Co-Founder',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    },
    { 
      imgSrc: 'https://res.cloudinary.com/ddumljyu6/image/upload/v1717051814/i4ermzhamsgxi2aeydvq.jpg',
      name: 'Maleka Redner',
      position: 'Interim COO',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    },
    {
      imgSrc: 'https://res.cloudinary.com/ddumljyu6/image/upload/v1717292504/HarryHeadShot_ox9j3w.png',
      name: 'Harry Gray',
      position: 'Sr. Software Engineer',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    },
    {
      imgSrc: 'https://res.cloudinary.com/ddumljyu6/image/upload/v1717292417/kzdpzkn48ofwa8vttaah.jpg',
      name: 'Zack Campanelli',
      position: 'Jr. Software Engineer',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    }
  ]

  // const teamMembersRender = teamMembers.map((m, i) => {
  //   return (
  //     <TeamMember key={i} imgSrc={m.imgSrc}  name={m.name} position={m.position}  />
  //   )
  // })

  return (
    <section>
      <div className="container">
        <div className="animate-in-screen flex flex-col gap-2 mb-10">
          <p className="text-muted uppercase tracking-wider text-xs font-semibold">People first</p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-semibold tracking-tight">
            Small, senior team — big outcomes
          </h2>
          <p className="text-secondary max-w-[640px] leading-relaxed">
            You work directly with the people designing, architecting, and shipping your product. No telephone game, just clear communication and consistent delivery.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          {teamMembers.map((m, i) => (
            <TeamMember key={i} imgSrc={m.imgSrc} name={m.name} position={m.position} bio={m.bio} />
          ))}
        </div>
      </div>
    </section>
  )
}

const Culture = () => {
  const highlights = [
    {
      title: 'Build and measure',
      copy: 'We prototype fast, validate with real users, and tighten the feedback loops that keep products relevant after launch.',
    },
    {
      title: 'Momentum over bureaucracy',
      copy: 'Lean rituals, async updates, and weekly demos ensure stakeholders always see progress without slowing the work down.',
    },
    {
      title: 'Partners, not vendors',
      copy: 'We embed with your team, understand your roadmap, and stay accountable to the outcomes you care about.',
    },
  ]

  return (
    <section>
      <div className="container rounded-3xl border border-border bg-bg-card p-8 md:p-12 shadow-card">
        <div className="animate-in-screen flex flex-col gap-2 mb-8">
          <p className="text-muted uppercase tracking-wider text-xs font-semibold">How we work</p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-semibold tracking-tight">
            Culture that keeps projects healthy
          </h2>
          <p className="text-secondary max-w-[680px] leading-relaxed">
            Our team blends design sensibility, engineering discipline, and product empathy to deliver resilient experiences that feel as good to use as they are to maintain.
          </p>
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
        <div className="flex flex-wrap items-center gap-4">
          <Link to="/contact" className="primary-button text-sm">
            Start a conversation
          </Link>
          <span className="text-secondary text-sm">
            Need something specific? Tell us about your build, refresh, or ongoing needs.
          </span>
        </div>
      </div>
    </section>
  )
}
