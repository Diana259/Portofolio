import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: false, 
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: ['Front-End Developer'],
     });
  }, []);
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/woman.png' alt='woman'></img>
        </div>
      </div>
      <div className='right'>
      <div className='wrapper'>
        <h2>Hi There, I'm</h2>
        <h1>Diana Popa</h1>
        <h3>Junior <span ref={textRef}></span></h3>
      </div>
      <a href='#portofolio'>
      <img src='assets/down.png' alt="down" />
      </a>
      </div>
    </div>
  )
}
