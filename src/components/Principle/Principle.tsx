import PrincipleType from "types/PrincipleType";

export default function Principle({ title, content } : PrincipleType) {
  return (
    <div className='animate-in bg-shade p-4 flex flex-col gap-2 rounded-xl border border-[transparent] transition-colors md:p-6 md:flex-row md:gap-8 hover:border-opacity-10 hover:border-primary hover:bg-shade-hover group'>
      <h3 className='text-primary text-2xl transition-colors md:min-w-[250px] md:max-w-[250px] group-hover:text-accent'>{title}</h3>
      <p className='text-secondary'>{content}</p>
    </div>
  )
}
