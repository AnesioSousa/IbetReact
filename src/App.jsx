import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Adverts from "./components/pages/Adverts";
import MyData from "./components/pages/MyData";
import NewMatchFrame from "./components/pages/NewMatch";
import Teams from "./components/pages/Teams";
import "./scss/main.scss";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/adverts" element={<Adverts />} />
          <Route exact path="/newMatch" element={<NewMatchFrame />} />
          <Route exact path="/teams" element={<Teams />} />
          <Route exact path="/mydata" element={<MyData />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
