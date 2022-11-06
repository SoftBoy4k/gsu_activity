import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/LoginPage';


function App() {
  return (
    <Routes>
          <Route path="/" element={<HomePage/>} exact={true} />
          <Route path="/login" element={<LoginPage/>} />
          {/* <Route path="/projects" element={<MyProjects/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/contact" element={<Contact/>} /> */}
    </Routes>
  );
}

export default App;
