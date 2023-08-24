import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact Component={Home}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
