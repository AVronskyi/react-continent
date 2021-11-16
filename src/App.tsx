import React from 'react';
import './App.css';
import { ContinentInfo } from './components/ContinentInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useQuery } from '@apollo/client';
import { GET_ALL_CONTINENTS } from './api/api';

const App: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_CONTINENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <ul className="list-group">
        {data.continents.map((continent: Continent) => (
          <ContinentInfo
            key={continent.name}
            continent={continent}
          />
        ))}
      </ul>

    </div>
  )
};

export default App;
