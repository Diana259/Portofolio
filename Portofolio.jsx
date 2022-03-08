import { useEffect, useState} from 'react';
import './portofolio.scss';
import PortofolioList from '../portofolioList/PortofolioList';
import {
  simplePortofolio,
  bootstrapPortofolio,
  reactPortofolio
} from '../../data';

export default function Portofolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "simple",
      title: "Simple App"
    },
    {
      id: "bootstrap",
      title: "Bootstrap App"
    },
    {
      id: "react",
      title: "React App"
    },
  ];

  useEffect(()=> {
     switch(selected){
       case "simple":
         setData(simplePortofolio);
         break;
          case "bootstrap":
            setData(bootstrapPortofolio);
            break;
            case "react":
              setData(reactPortofolio);
              break;
              default:
              setData(simplePortofolio);
     }
  },[selected])
  return (
    <div className='portofolio' id='portofolio'>
      <h1>Portofolio</h1>
      <ul>
        {list.map((item) => (
          <PortofolioList 
          key={item.id}
          title={item.title} 
          active={selected === item.id}
          setSelected={setSelected}
          id={item.id}
          />
        ))}
      </ul>
      <div className='container'>
      {data.map(d=>(
        <div className='item'>
        <img src={d.img} alt='banking app' width={250} height={150}/>
        <h3>{d.title}</h3>
      </div>
      ))}
      </div>
    </div>
  )
}
