import Header from './components/Header'
import Footer from './components/Footer'
import Pine from './components/Pine'
import Redwood from './components/Redwood'
import Spacer from './components/Spacer'
import Logo from './components/Logo'
import './App.css'

function App() {

  return (
    <>
      <Logo />
      <Header/>
      <Spacer/>
      <Pine />
      <Spacer/>
      <Redwood />
      <Spacer/>
      <Footer/>
      <Logo />
    </>
  )
}

export default App