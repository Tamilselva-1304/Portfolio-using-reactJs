
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project';
import Contact from './pages/contact'



function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
