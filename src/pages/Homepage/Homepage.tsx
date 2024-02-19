import ServiceType from 'types/ServiceType'
import { HiCode } from 'react-icons/hi'
import Service from 'components/Service/Service'
import { Helmet } from 'react-helmet'

export default function Homepage() {
  return (
    <>
      <Helmet>
        <title>Code Obsidian - Elevate Your Software Experience</title>
        <meta name="description" content="Discover cutting-edge tech and elevate your software experience with Code Obsidian. Specializing in full-stack web application development, API integration, and React Native mobile apps." />
        <meta property="og:title" content="Code Obsidian - Elevate Your Software Experience" />
        <meta property="og:description" content="Discover cutting-edge tech and elevate your software experience with Code Obsidian. Specializing in full-stack web application development, API integration, and React Native mobile apps." />
        <meta property="og:image" content="https://www.codeobsidian.com/assets/images/colorLogoNoBackground.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.codeobsidian.com" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <main>
        <Hero />
        <Services />
      </main>
    </>
  );
}


const Hero = () => {
  return (
    <section className='relative mb-0'>
      <div className='container relative py-[60px] flex flex-col gap-[60px] justify-center md:gap-5 md:flex-row md:justify-between md:items-center md:min-h-[85vh]'>
        <div className='flex flex-col gap-3 flex-[1.5] items-center text-center md:items-start md:text-left'>
          <h1 className='animate-in h1 text-2xl sm:text-4xl md:text-5xl'><span>Discover cutting-edge tech.</span></h1>
          <p className='animate-in text-secondary text-lg md:text-xl'>Elevate your software experience with Code Obsidian.</p>
          <button className='animate-in primary-button text-lg'>Learn More</button>
        </div>
        <img 
          src='assets/images/hero.svg' 
          className='animate-in w-full min-w-0 md:max-w-[500px] flex-1 backdrop-blur-3xl' />
      </div>
      <div className='glow absolute right-0 top-[50%] -z-10 translate-x-[50%] translate-y-[-50%] w-[40%] min-w-[450px] aspect-square bg-gradient-radial from-accent to-[#1D1D1D00] opacity-30 hidden md:block' />
    </section>
  )
}

const Services = () => {
  const services : ServiceType[] = [
    {
      icon: <HiCode />,
      title: 'Full-Stack Web Application Development',
      content: 'At Code Obsidian, we specialize in crafting cutting-edge web applications using the powerful MERN stack. Our team of experts seamlessly combines MongoDB, Express.js, React, and Node.js to bring your ideas to life. From concept to deployment, we create robust and interactive web solutions tailored to your unique needs, ensuring a user experience that captivates and converts.'
    },
    {
      icon: <HiCode />,
      title: 'API Development and Integration',
      content: "Unlock the full potential of your digital ecosystem with Code Obsidian's API development and integration services. Our Node.js and Express.js experts build custom APIs that power your web and mobile applications, providing secure data access, authentication, and seamless user interactions. We seamlessly integrate third-party APIs, enhancing your applications capabilities and extending its reach."
    },
    {
      icon: <HiCode />,
      title: 'React Native Mobile App Development',
      content: "Extend your brand's reach to mobile users with Code Obsidian's React Native expertise. Our developers create cross-platform mobile applications that deliver a consistent and engaging user experience on both iOS and Android. By leveraging the power of React Native, we maximize code reuse, reduce development time, and provide your audience with feature-rich mobile apps that drive engagement and growth."
    },
  ]

  const servicesRender = services.map((s, i) => {
    return (
      <Service key={i} icon={s.icon} title={s.title} content={s.content} />
    )
  })

  return (
    <section>
      <div className='container'>
        <h2 className='animate-in-screen text-3xl md:text-4xl text-primary font-bold mb-8'>Our Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {servicesRender}
        </div>
      </div>
    </section>
  )
}
