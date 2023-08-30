import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { selectMissionsById, joinMission, cancelMissionParticipation } from './missionsSlice';

function Mission() {
  const dispatch = useDispatch();
  const { missionId } = useParams();
  const mission = useSelector((state) => selectMissionsById(state, missionId));

  return (
    <div className="main-container">
      <div className="mission-card">
        <div className="mission" key={`mission-${missionId}`}>
          <h3>{mission?.mission_name}</h3>
          <p>{mission?.description}</p>
          <p><Link to={mission?.website}>{mission?.website}</Link></p>
          <button
            type="button"
            aria-label="Update mission"
            onClick={() => dispatch(joinMission())}
          >
            Reserve Mission
          </button>
          <button
            type="button"
            aria-label="Remove mission"
            onClick={() => dispatch(cancelMissionParticipation())}
          >
            Cancel Reservation
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mission;
