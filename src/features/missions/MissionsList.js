import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectAllMissions,
  reserveMission, cancelMissionReservation,
} from './missionsSlice';
import MissionsListElements from './childComponents/MissionsListElements';

function MissionsList() {
  const missions = useSelector(selectAllMissions);
  console.log(missions);

  const HandleReservation = (id) => {
    reserveMission(id);
  };

  const HandleCancellation = (id) => {
    cancelMissionReservation(id);
  };

  return (
    <div className="main-container">
      <p><Link to="/missions/new">Add a new Mission</Link></p>
      <hr />
      <MissionsListElements
        missions={missions}
        HandleReservation={HandleReservation}
        HandleCancellation={HandleCancellation}
      />
    </div>
  );
}

export default MissionsList;
