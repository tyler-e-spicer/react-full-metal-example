import CharacterCard from "./CharacterCard";
import { CharactersProps } from "../../types";
import "../css/characterCards.css";

const CharacterCards: React.FC<CharactersProps> = ({ characters }) => {
  // localeCompare returns 1, -1, or 0 depending on order of string
  const sortedChars = characters
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section id="character-cards">
      {sortedChars.map((character) => (
        <CharacterCard
          key={crypto.randomUUID()}
          name={character.name}
          nickName={character.nickName}
          imageUrl={character.imageUrl}
          background={character.background}
        />
      ))}
    </section>
  );
};

export default CharacterCards;
