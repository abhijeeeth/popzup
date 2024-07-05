import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import TopCatagories from './Components/TopCatagories';

function App() {
  return (
    <div className="bg-gray-100/10">
     <Navbar/>
      <Hero/>
    <TopCatagories/>
    </div>
  );
}

export default App;
