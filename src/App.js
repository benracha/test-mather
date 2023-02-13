import Banner from './components/Banner';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import Grow from './components/Grow';
import Team from './components/Team';
import Mather from './components/Mather';
import Vdo from './components/Vdo';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
    <Header />
    <Banner />
    <Service />
    <Portfolio />
    <Grow />
    <Team />
    <Mather />
    <Vdo />
    <Testimonials />
    <Clients />
    <Contact />
    </div>
  )
}

export default App;
