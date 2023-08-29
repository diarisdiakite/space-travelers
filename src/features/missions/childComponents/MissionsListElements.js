import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import { reserveMission, cancelMissionReservation } from '../missionsSlice';

function MissionsListElements({ missions }) {
  const dispatch = useDispatch();
  console.log(missions);

  if (!missions) {
    return (
      <div>
        Missions not found
      </div>
    );
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td><Link to={`/missions/${mission.mission_id}`}>{mission.mission_name}</Link></td>
            <td>{mission.description}</td>
            <td>
              {/* Status */}
            </td>
            <td>
              <button
                type="button"
                aria-label="Remove mission"
                onClick={() => dispatch(reserveMission(mission.id))}
              >
                Reserve participation
              </button>
              <button
                type="button"
                aria-label="Remove mission"
                onClick={() => dispatch(cancelMissionReservation(mission.id))}
              >
                Cancel Reservation
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

MissionsListElements.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      mission_id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      mission_name: PropTypes.string.isRequired,
      website: PropTypes.string,
    }),
  ).isRequired,
};

export default MissionsListElements;
