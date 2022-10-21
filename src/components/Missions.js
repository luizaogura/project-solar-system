import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';


class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map(({ name: nome, year, country, destination }) => (
          <MissionCard
            key={ nome }
            name={ nome }
            year={ year }
            country={ country }
            destination={ destination }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
