import Header from "./components/Header.js";
import CharacterRatings from "./components/CharacterRatings.js";
import CharacterCards from "./components/CharacterCards.js";

import { data } from "../types";
import "./css/header.css";

const App = () => {
  return (
    <>
      <Header />
      <CharacterRatings characters={data} />
      <CharacterCards characters={data} />
    </>
  );
};

export default App;
