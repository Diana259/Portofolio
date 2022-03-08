import './portofolioList.scss'

export default function PortofolioList({id,item, title, active, setSelected}) {
  return (
    <li className={active ? "portofolioList active" : "portofolioList"}
    onClick={()=>setSelected(id)}>
      {title}
    </li>
  )
}
