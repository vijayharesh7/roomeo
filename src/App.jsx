import './App.css'
import Navbar from './components/navbar/navbar'
import './layout.scss'
import HomePage from './routes/homePage/homePage'


function App() {

  return (
    <>  
      <div className="layout">

        <div className="Navbar">
          <Navbar/>
        </div>

        <div className='content'>
          <HomePage/>
        </div>

        </div>
    </>
  
  )
}

export default App
