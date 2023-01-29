import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Jumbotron from './Jumbotron';
import Cards from './Cards';
import Carousel from './Carousel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Jumbotron />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
