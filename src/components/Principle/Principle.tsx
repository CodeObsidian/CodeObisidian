import PrincipleType from 'types/PrincipleType'

export default function Principle({ title, content }: PrincipleType) {
  return (
    <div className="animate-in-screen rounded-2xl border border-border bg-bg-card p-5 md:p-6 flex flex-col gap-4 md:flex-row md:gap-8 transition-all duration-300 hover:border-border-hover hover:bg-bg-card-hover group">
      <h3 className="font-display text-primary text-xl font-semibold md:min-w-[220px] md:max-w-[220px] group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-secondary leading-relaxed">{content}</p>
    </div>
  )
}
