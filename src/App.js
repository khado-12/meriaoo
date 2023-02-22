import './App.css';
import LandingPage from './Pages/Landingpage';
import ProjectPage from './Pages/Projectpage';
import Projectphases from './Pages/Projectphases';
import { Route,BrowserRouter ,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
       <Routes>

        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/projectpage" element={<ProjectPage/>}/>
        <Route exact path="/projectphase" element={<Projectphases/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
