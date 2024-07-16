import './App.css'
import Arrow from './component/Arrow'
import HelloPage from './page/HelloPage'
import IntroPage from './page/IntroPage'
import Head from './page/Head';

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
        {/* <div className='arrowContainer'>
          <Arrow/>
        </div> */}
        <div className='introContainer'>
          <IntroPage/>
        </div>
        <div className='skillContainer'>

        </div>
        <div className='projectContainer'>

        </div>
        <div className='projectButtonContainer'>
          
        </div>
      </div>
    </>
  )
}

export default App
