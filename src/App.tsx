import Header from "./components/Header.js";
import CharacterRatings from "./components/CharacterRatings";
import CharacterCards from "./components/CharacterCards";

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
