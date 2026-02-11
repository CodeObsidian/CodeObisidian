import TeamMemberType from 'types/TeamMemberType'

export default function TeamMember({ imgSrc, name, position }: TeamMemberType) {
  return (
    <div className="animate-in-screen rounded-2xl border border-border bg-bg-card p-6 text-center flex flex-col items-center transition-all duration-300 hover:border-border-hover hover:bg-bg-card-hover sm:basis-[calc(50%-0.75rem)] md:basis-[calc(33.333%-1rem)]">
      <img
        src={imgSrc}
        alt={name}
        className="w-28 h-28 min-w-[112px] aspect-square object-cover mb-4 rounded-2xl ring-2 ring-border"
      />
      <h3 className="font-display text-primary text-xl font-semibold">{name}</h3>
      <span className="text-accent text-sm font-medium">{position}</span>
    </div>
  )
}
