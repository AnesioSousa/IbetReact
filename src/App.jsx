import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"
import Container from "./components/layout/Container"
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import MyData from './components/pages/MyData'
import Wallet from './components/pages/Wallet'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/wallet" element={<Wallet />} />
          <Route exact path="/mydata" element={<MyData />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
