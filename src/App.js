import './App.css';
import AdsList from './Components/AdsList';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import TopCatagories from './Components/TopCatagories';
import TopLists from './Components/TopLists';

function App() {
  return (
    <div className="bg-gray-100/10">
     <Navbar/>
      <Hero/>
    <TopCatagories/>
      <AdsList/>
      <TopLists/>
      <Footer/>
    </div>
  );
}

export default App;
