import React from 'react';

function MissionList({ dataTable }) {
  return (
    <div className="mission-list">
      <h2>Mes Missions</h2>
      <ul>
        {dataTable.map((mission, index) => (
          <li key={index}>
            <h3>{mission.structure}</h3>
            <p>Durée : {mission.duree}</p>
            <p>Outils : {mission.outils}</p>
            <ul>
              {mission.mission.map((task, taskIndex) => (
                <li key={taskIndex}>{task}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MissionList;