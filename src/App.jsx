import Header from './components/Header'
import Footer from './components/Footer'
import Pine from './components/Pine'
import Redwood from './components/Redwood'
import Spacer from './components/Spacer'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <Spacer/>
      <Pine />
      <Spacer/>
      <Redwood />
      <Spacer/>
      <Footer/>
    </>
  )
}

export default App