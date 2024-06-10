import { Character, CharactersProps } from "../../types";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { name, nickName, imageUrl, background } = character;

  return (
    <div className="card">
      <div className="card-titles">
        <h3>{name}</h3>
        {nickName && <h4>{nickName}</h4>}
      </div>
      {/* Should provide alts on the char objects */}
      <img src={imageUrl} alt="" />
      <p>{background}</p>
    </div>
  );
};

export default CharacterCard;
