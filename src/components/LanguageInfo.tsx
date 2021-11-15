import React, { useContext } from "react";
import { ContinentContex } from "./ContinentContex";

type Props = {
  key: string;
  language: Language;
}

export const LanguageInfo: React.FC<Props> = (props) => {
  const { key, language } = props;
  const { isSelectedContinent, setIsSelectedContinent } = useContext(ContinentContex)

  return (
    <li
      className="list-group-item"
      key={key}
    >
      <button
        type="button"
        className="list-group-item list-group-item-action"
        onClick={() => {
          setIsSelectedContinent(!isSelectedContinent);
        }}
      >
        {language.name}
      </button>
    </li>
  )
}