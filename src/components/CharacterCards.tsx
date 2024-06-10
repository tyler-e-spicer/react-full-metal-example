import CharacterCard from "./CharacterCard";
import { Character, CharactersProps } from "../../types";
import "../css/characterCards.css";

const CharacterCards = ({ characters }: CharactersProps) => {
  // localeCompare returns 1, -1, or 0 depending on order of string
  const sortedChars: Character[] = characters
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section id="character-cards">
      {sortedChars.map((character) => (
        <CharacterCard key={crypto.randomUUID()} character={character} />
      ))}
    </section>
  );
};

export default CharacterCards;
