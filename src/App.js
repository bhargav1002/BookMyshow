import './App.css';
import Display from './Components/Display';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Display/>}></Route>
          <Route path="/movie/:id" element={<Display />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
