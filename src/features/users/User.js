import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { selectUserById } from './usersSlice';
import { selectAllJoinedMissions } from '../missions/missionsSlice';

function User() {
  const { userId } = useParams();

  const user = useSelector((state) => selectUserById(state, Number(userId)));

  const userJoinedMissions = useSelector(selectAllJoinedMissions);
  console.log(userJoinedMissions);

  const content = (
    <div>
      <h2 key={userId}>
        {user?.name}
      </h2>
      <h3>
        Missions
        (
        {userJoinedMissions.length}
        )
      </h3>
      {userJoinedMissions.map((mission) => (
        <li key={mission.id}>
          <Link to={`/missions/${mission.id}`}>{mission.mission_name}</Link>
        </li>
      ))}
    </div>
  );

  return (
    <div className="main-container" key={`user-${userId}`}>
      {content}
    </div>
  );
}

export default User;
