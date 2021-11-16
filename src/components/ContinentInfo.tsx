import React, { useState } from "react";
import { ContinentContex } from "./ContinentContex";
import { CountryInfo } from "./CountryInfo";

type Props = {
  key: string;
  continent: Continent;
}

export const ContinentInfo: React.FC<Props> = (props) => {
  const { key, continent } = props;
  const [isSelectedContinent, setIsSelectedContinent] = useState(false);

  const handleClick = () => {
    setIsSelectedContinent(!isSelectedContinent);
  };
  
  const value = {
    isSelectedContinent,
    setIsSelectedContinent,
  }

  return (
    <ContinentContex.Provider value={value}>
      <li
        className="list-group-item"
        key={key}
      >
        <button
          type="button"
          className="list-group-item list-group-item-action"
          onClick={handleClick}
        >
          {continent.name}
        </button>

        <ul className="list-group">
          {isSelectedContinent && (
            continent.countries.map(country => (
              <CountryInfo
                key={country.name}
                country={country}
              />
          )))}
        </ul>
      </li>
    </ContinentContex.Provider>
  )
}
