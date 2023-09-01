import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Mission from './features/missions/Mission';
import MissionsList from './features/missions/MissionsList';
import UsersList from './features/users/UsersList';
import User from './features/users/User';
import RocketsList from './features/rockets/RocketsList';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<RocketsList />} />
        {' '}
        <Route path="/rockets" element={<RocketsList />} />
        <Route path="/missions">
          <Route index element={<MissionsList />} />
          <Route path=":missionId" element={<Mission />} />
        </Route>
        <Route path="/users">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<User />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
