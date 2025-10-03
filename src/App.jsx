import Header from './components/Header'
import Footer from './components/Footer'
import Pine from './components/Pine'
import Redwood from './components/Redwood'
import Sunflower from './components/Sunflower'
import Cosmos from './components/Cosmos'
import Rose from './components/Rose'
import Spacer from './components/Spacer'
import Logo from './components/Logo'
import Nav from './components/Nav'
import './App.css'

function App() {

  return (
    <>
      <Logo />
      <Header/>
      <Nav />
      <Spacer/>
      <Pine />
      <Spacer/>
      <Redwood />
      <Spacer/>
      <Sunflower />
      <Spacer />
      <Cosmos />
      <Spacer />
      <Rose />
      <Spacer />
      <Footer/>
      <Logo />
    </>
  )
}

export default App