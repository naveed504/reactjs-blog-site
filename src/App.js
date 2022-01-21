import logo from './logo.svg';
import './App.css';
import Header from './App/components/Header';
import Slider from './App/components/Slider';
import Blog from './App/components/Blog';
import Footer from './App/components/Footer';
import LandingPage from './App/components/LandingPage';
import About from './App/components/About';
import {
  BrowserRouter ,
  Routes,
  Route,
  Link,
  Switch
  
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        
          <Route path="/" component={<LandingPage/>} />
          <Route path="/about" component={<About/>}/>
          <Route path="/blog" component={<Blog/>} />
    </Routes>
  </BrowserRouter>
  

    
  );
}

export default App;
