import React from 'react';
import './App.css';
import continents from './components/continents';
import { ContinentInfo } from './components/ContinentInfo';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <ul className="list-group">
        {continents.map(continent => (
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
