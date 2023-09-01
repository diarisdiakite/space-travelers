import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectAllMissions,
} from './missionsSlice';
import MissionsListElements from './childComponents/MissionsListElements';

function MissionsList() {
  const missions = useSelector(selectAllMissions);

  return (
    <div className="main-container">
      <MissionsListElements
        missions={missions}
      />
    </div>
  );
}

export default MissionsList;
