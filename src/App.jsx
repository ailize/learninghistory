import { Suspense } from 'react'
// import RoutesConfig from './route'
import Header from './components/Header'
import Footer from './components/Footer'
import RoutesConfig from './router'
import "./App.css";

function App(props) {

  return (
    <div className="App">
      <Header/>
      {/* <div className='list-view'> */}
      <Suspense fallback={<div>loading...</div>}>
        <RoutesConfig />
      </Suspense>
      <Footer />
      {/* </div> */}
    </div>
  )
}

export default App
