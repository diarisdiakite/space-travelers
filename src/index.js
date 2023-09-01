import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './features/store';
import './index.css';
import App from './App';
import {
  fetchMissions, setFetchedMissions,
} from './features/missions/missionsSlice';
import 'bootstrap/dist/css/bootstrap.css';
import { fetchRockets } from './features/rockets/rocketsSlice';

store.dispatch(fetchMissions());
store.dispatch(setFetchedMissions());
store.dispatch(fetchRockets());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
