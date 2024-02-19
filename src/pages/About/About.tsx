import Principle from "components/Principle/Principle"
import TeamMember from "components/TeamMember/TeamMember"
import { Helmet } from "react-helmet";
import PrincipleType from "types/PrincipleType"
import TeamMemberType from "types/TeamMemberType"

export default function About() {
  return (
    <main className='page'>
      <Helmet>
        <title>About Us - Code Obsidian</title>
        <meta name="description" content="Learn about Code Obsidian's core principles, mission, and the innovative team behind our technology solutions." />
      </Helmet>
      <div className='container'>
        <h1 className='animate-in'>About Us</h1>
      </div>
      <Principles />
      <Team />
    </main>
  );
}
const Principles = () => {
  const principles : PrincipleType[] = [
    {
      title: 'Innovation-Driven Solutions',
      content: 'At Code Obsidian, we thrive on innovation. We constantly push the boundaries of technology to craft unique and forward-thinking solutions for our clients. We believe in leveraging the latest tools and methodologies to create software that not only meets but exceeds your expectations.'
    },
    {
      title: 'Client-Centric Approach',
      content: "Your success is our top priority. We work closely with you to understand your vision, objectives, and challenges. Our client-centric approach ensures that every line of code we write is aligned with your goals. We're not just developers; we're your partners in achieving digital excellence."
    },
    {
      title: 'Quality Without Compromise',
      content: 'Quality is the cornerstone of everything we do. We adhere to industry best practices and rigorous testing standards to deliver software that is robust, secure, and reliable. Our commitment to excellence is unwavering, ensuring your application performs flawlessly, even under the most demanding conditions.'
    },
    {
      title: 'Transparent Communication',
      content: 'Open and transparent communication is fundamental to our work ethic. We keep you informed at every stage of the development process, providing regular updates and seeking your feedback. Our goal is to foster a collaborative partnership built on trust and mutual understanding.'
    }
    ,
    {
      title: 'Scalability and Future-Proofing',
      content: "We don't just build for today; we architect for tomorrow. Our solutions are designed with scalability and adaptability in mind. Whether your project is a startup venture or a large enterprise application, we ensure it can evolve and grow seamlessly as your business does."
    }
  ]

  const principlesRender = principles.map((p, i) => {
    return (
      <Principle key={i} title={p.title} content={p.content} />
    )
  })

  return (
    <section>
      <div className='container'>
        <h2 className='animate-in text-primary text-3xl font-[600] mb-6 md:text-4xl'>Our Principles</h2>
        <div className='flex flex-col gap-4'>
          {principlesRender}
        </div>
      </div>
    </section>
  )
}

const Team = () => {
  const teamMembers : TeamMemberType[] = [
    {
      imgSrc: 'assets/images/team/placeholder-person.jpg',
      name: 'Tory Redner',
      position: 'CEO & Founder',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    },
    {
      imgSrc: 'assets/images/team/placeholder-person.jpg',
      name: 'Nathanael Hauser',
      position: 'CTO & Co-Founder',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    },
    {
      imgSrc: 'assets/images/team/placeholder-person.jpg',
      name: 'Harry Gray',
      position: 'Sr. Software Engineer',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    }
  ]

  const teamMembersRender = teamMembers.map((m, i) => {
    return (
      <TeamMember key={i} imgSrc={m.imgSrc}  name={m.name} position={m.position} bio={m.bio} />
    )
  })

  return (
    <section>
      <div className='container'>
        <h2 className='animate-in-screen text-primary text-3xl font-[600] mb-6 md:text-4xl'>Our Team</h2>
        <div className='flex flex-wrap gap-6 justify-center'>
          {teamMembersRender}
        </div>
      </div>
    </section>
  )
}