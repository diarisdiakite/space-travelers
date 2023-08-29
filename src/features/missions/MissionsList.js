import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectAllMissions,
  // joinMission, cancelMissionParticipation,
} from './missionsSlice';
import MissionsListElements from './childComponents/MissionsListElements';

function MissionsList() {
  const missions = useSelector(selectAllMissions);
  console.log(missions);

  /* const HandleReservation = (id) => {
    joinMission(id);
  };

  const HandleCancellation = (id) => {
    cancelMissionParticipation(id);
  }; */

  return (
    <div className="main-container">
      <MissionsListElements
        missions={missions}
        /* HandleReservation={HandleReservation}
        HandleCancellation={HandleCancellation} */
      />
    </div>
  );
}

export default MissionsList;
