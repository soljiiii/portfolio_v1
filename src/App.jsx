import './App.css'
import HelloPage from './page/HelloPage'
import IntroPage from './page/IntroPage'
import SkillPage from './page/SkillPage';
import ProjectPage from './page/ProjectPage';
import { useRef } from 'react';

function App() {

  const helloRef = useRef(null);
  const introRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);


  function handleScroll (ref) {
    ref.current.scrollIntoView({behavior:'smooth'});
  }

  return (
    <>
      <div className='bodyContainer'>
        <div className='headContainer'>
          <div className="aboutmeNav" onClick={()=>handleScroll(introRef)}>
              ABOUT ME
          </div>
          <div className="skillNav" onClick={()=>handleScroll(skillRef)}>
              SKILL
          </div>
          <div className="projectNav" onClick={()=>handleScroll(projectRef)}>
              PROJECT
          </div>
        </div>
        <div className='helloContainer' ref={helloRef}>
          <HelloPage/>
        </div>
        <div className='introContainer' ref={introRef}>
          <IntroPage/>
        </div>
        <div className='skillContainer' ref={skillRef}>
          <SkillPage/>
        </div>
        <div className='projectContainer' ref={projectRef}>
          <ProjectPage/>
        </div>
        <div className='endContainer'>
          <div className='endcomment'>
            THANK YOU !
          </div>
        </div>
      </div>
    </>
  )
}

export default App
