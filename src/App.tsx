import React, { useState } from 'react';
import './App.css';
import continents from './components/continents';
import { Continentslist } from './components/ContinentsList';

// const ListCoutri: React.FC<Country> = ({ countries }) => {
//   let languages = null;
//   if (countries.languages && countries.languages.length) {
//     languages = (
//       <ul>
//         {countries.languages.map(l => (
//           <Languages item={i} key={languages.name} />
//         ))}
//       </ul>
//     );
//   }
//   return (
//     <li>
//       {countries.name}
//       {languages}
//     </li>
//   )
// };

// const Languages: React.FC<Language> = ({ languages }) => {
  
//   return (
//     <li>
//       {languages.name}
//     </li>
//   )
// };

const App: React.FC = () => {
  return (
    <div className="App">
      <ul>
        {continents.map((continent: Continent) => (
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
