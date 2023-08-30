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

  return (
    <div className="main-container">
      <MissionsListElements
        missions={missions}
      />
    </div>
  );
}

export default MissionsList;
