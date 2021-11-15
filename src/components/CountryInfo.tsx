import React, { useState } from "react";
import { LanguageInfo } from "./LanguageInfo";

type Props = {
  key: string;
  country: Country;
}

export const CountryInfo: React.FC<Props> = (props) => {
  const { key, country } = props;
  const [isSelectedCountry, setIsSelectedCountry] = useState(false);

  const handleClick = () => {
    setIsSelectedCountry(!isSelectedCountry);
  };
  

  return (
    <li
      className="list-group-item"
      key={key}
    >
      <button
        type="button"
        className="list-group-item list-group-item-action"
        onClick={handleClick}
      >
        {country.name}
      </button>

      <ul>
        {isSelectedCountry && (
          country.languages.map(language => (
          <LanguageInfo
            key={language.name}
            language={language}
          />
        )))}
      </ul>
    </li>
  )
}