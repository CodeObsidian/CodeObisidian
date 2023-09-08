import ServiceType from "types/ServiceType";

export default function Service({ icon, title, content } : ServiceType) {
  return (
    <div className='animate-in-screen service transition-colors border border-[transparent] hover:border-opacity-10 hover:border-primary hover:bg-shade-hover'>
      {icon}
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}
