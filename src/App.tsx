import React from 'react';
import './App.css';
import continents from './components/continents';
import { Continentslist } from './components/ContinentsList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <ul className="list-group">
        {continents.map(continent => (
          <Continentslist
            key={continent.name}
            continent={continent}
          />
        ))}
      </ul>

    </div>
  )
};

export default App;
