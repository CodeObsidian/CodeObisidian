import ServiceType from 'types/ServiceType'

export default function Service({ icon, title, content }: ServiceType) {
  return (
    <div className="animate-in-screen service">
      {icon}
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}
