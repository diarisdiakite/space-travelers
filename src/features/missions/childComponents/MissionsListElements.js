import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { joinMission, cancelMissionParticipation } from '../missionsSlice';

function MissionsListElements({ missions }) {
  const dispatch = useDispatch();

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
            <td><Link to={`/missions/${mission.mission_id}`} className="no-style bolded">{mission.mission_name}</Link></td>
            <td>{mission.description}</td>
            <td className="fixed-width">
              {!mission.reserved && (
              <Badge bg="secondary">
                NOT A MEMBER
              </Badge>
              )}
              {mission.reserved && (
              <Badge bg="success">
                Active Member
              </Badge>
              )}
            </td>
            <td className="fixed-width">
              {!mission.reserved && (
              <Button
                type="button"
                variant="outline-secondary"
                aria-label="Join mission"
                onClick={() => dispatch(joinMission(mission.mission_id))}
              >
                Join Mission
              </Button>
              )}
              {mission.reserved && (
              <Button
                type="button"
                variant="outline-danger"
                aria-label="cancel mission participation"
                onClick={() => dispatch(cancelMissionParticipation(mission.mission_id))}
              >
                Leave Mission
              </Button>
              )}
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
