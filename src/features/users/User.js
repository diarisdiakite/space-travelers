import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { selectUserById } from './usersSlice';
import { selectAllJoinedMissions } from '../missions/missionsSlice';
import { getAllReservedRockets } from '../rockets/rocketsSlice';

function User() {
  const { userId } = useParams();

  const user = useSelector((state) => selectUserById(state, Number(userId)));

  const userJoinedMissions = useSelector(selectAllJoinedMissions);
  const userReservedRockets = useSelector(getAllReservedRockets);

  const content = (
    <div>
      <div className="myTable">
        <h3 key={userId}>
          {user?.name}
        </h3>
      </div>
      <div className="my-profile-tables">
        <div className="myTables">
          <Table striped bordered hover>
            <thead>
              <th>
                Missions
                (
                {userJoinedMissions.length}
                )
              </th>
            </thead>
            <tbody>
              {userJoinedMissions.map((mission) => (
                <tr key={mission.id}>
                  <td><Link to={`/missions/${mission.mission_id}`}>{mission.mission_name}</Link></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <div className="myTables">
          <Table striped bordered hover>
            <thead>
              <th>
                My Rockets
                (
                {userReservedRockets.length}
                )
              </th>
            </thead>
            <tbody>
              {userReservedRockets.map((rocket) => (
                <tr key={rocket.id}>
                  <td>{rocket.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="main-container" key={`user-${userId}`}>
      {content}
    </div>
  );
}

export default User;
