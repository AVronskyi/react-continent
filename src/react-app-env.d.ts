/// <reference types="react-scripts" />

interface Continent {
  name: string;
  countries?: Country[];
}

interface Country {
  name: string;
  languages?: Language[];
}

interface Language {
  name: string
}