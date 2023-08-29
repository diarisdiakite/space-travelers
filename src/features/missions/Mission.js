import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectMissionsById, reserveMission, cancelMissionReservation } from './missionsSlice';

function Mission() {
  const dispatch = useDispatch();
  const { missionId } = useParams();
  const mission = useSelector((state) => selectMissionsById(state, missionId));
  console.log(mission);

  return (
    <div className="main-container">
      <div className="mission-card">
        <div className="mission" key={`mission-${missionId}`}>
          <h2>{mission?.mission_name}</h2>
          <p>{mission?.description}</p>
          <p>{mission?.website}</p>
          <button
            type="button"
            aria-label="Update mission"
            onClick={() => dispatch(reserveMission())}
          >
            Reserve Mission
          </button>
          <button
            type="button"
            aria-label="Remove mission"
            onClick={() => dispatch(cancelMissionReservation())}
          >
            Cancel Reservation
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mission;
