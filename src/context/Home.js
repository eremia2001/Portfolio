import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import ContactBar from '../components/ContactBar';
import reactLogo from '../media/reactLogo.png';
import '../styles/homeContainer.css';

function Home() {
  return (
    <div className="page Home" id="home">
      <NavBar />
      <HeroSection />
      <img src={reactLogo} className="reactLogo" />
    </div>
  );
}
export default Home;
