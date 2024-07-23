import './App.css'
import HelloPage from './page/HelloPage'
import IntroPage from './page/IntroPage'
import Head from './page/Head';
import SkillPage from './page/SkillPage';
import ProjectPage from './page/ProjectPage';

function App() {

  return (
    <>
      <div className='bodyContainer'>
        <div className='headContainer'>
          <Head/>
        </div>
        <div className='helloContainer'>
          <HelloPage/>
        </div>
        <div className='introContainer'>
          <IntroPage/>
        </div>
        <div className='skillContainer'>
          <SkillPage/>
        </div>
        <div className='projectContainer'>
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
