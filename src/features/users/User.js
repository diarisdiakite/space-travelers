import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { selectUserById } from './usersSlice';
import { selectAllJoinedMissions } from '../missions/missionsSlice';
import { getAllBookedRockets } from '../rockets/rocketsSlice';

function User() {
  const { userId } = useParams();

  const user = useSelector((state) => selectUserById(state, Number(userId)));

  const userJoinedMissions = useSelector(selectAllJoinedMissions);
  const userBookedRockets = useSelector(getAllBookedRockets);

  const content = (
    <div>
      <h3 key={userId}>
        {user?.name}
      </h3>
      <h4>
        Missions
        (
        {userJoinedMissions.length}
        )
      </h4>
      {userJoinedMissions.map((mission) => (
        <li key={mission.id}>
          <Link to={`/missions/${mission.mission_id}`}>{mission.mission_name}</Link>
        </li>
      ))}
      <div>
        <h4>
          My Rockets
          (
          {userBookedRockets.length}
          )
        </h4>
        {userBookedRockets.map((rocket) => (
          <li key={rocket.id}>{rocket.name}</li>
        ))}
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
