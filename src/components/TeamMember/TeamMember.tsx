import TeamMemberType from "types/TeamMemberType";

export default function TeamMember({ imgSrc, name, position, bio } : TeamMemberType) {
  return (
    <div className='animate-in-screen bg-shade p-6 rounded-xl text-center flex flex-col items-center border border-[transparent] transition-colors sm:basis-[calc(50%-0.75rem)] md:basis-[calc(33.33333%-1rem)] hover:border-opacity-10 hover:border-primary hover:bg-shade-hover'>
      <img 
        src={imgSrc} 
        alt={name}
        className='w-[50%] min-w-[125px] aspect-square object-cover mb-2 rounded-md'
      />
      <h3 className='text-primary text-2xl font-[600] lg:text-3xl'>{name}</h3>
      <span className='text-accent text-lg'>{position}</span>
      {/* <p className='text-secondary mt-2'>{bio}</p> */}
    </div>
  )
}
