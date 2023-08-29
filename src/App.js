import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
// import './assets/css/missions.css';
import Mission from './features/missions/Mission';
import MissionsList from './features/missions/MissionsList';
import UsersList from './features/users/UsersList';
import User from './features/users/User';
// import NotFoundPage from './components/pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MissionsList />} />
        {' '}
        {/* This should be the rocketsLit, we may change it */}
        <Route path="/missions">
          <Route index element={<MissionsList />} />
          <Route path=":missionId" element={<Mission />} />
        </Route>
        <Route path="/users">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
