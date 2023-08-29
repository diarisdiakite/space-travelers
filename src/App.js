import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import RocketsList from './features/rockets/RocketsList';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/Rockets" element={<RocketsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
