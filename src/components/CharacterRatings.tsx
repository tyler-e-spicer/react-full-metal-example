import "../css/characterRatings.css";
import { Character, CharactersProps } from "../../types";

const CharacterRatings: React.FC<CharactersProps> = ({ characters }) => {
  const charactersCopy = characters.slice();
  const sortedCharacters = charactersCopy.sort(
    (a, b) => (b.votes ?? 0) - (a.votes ?? 0)
  );
  const topCharacters = sortedCharacters.slice(0, 5);

  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
          {/* Could separate this out into its own component */}
          {topCharacters.map((char, index) => (
            <tr
              key={crypto.randomUUID()}
              // double check the odds/evens aren't off below
              className={index % 2 ? "dark" : "light"}
            >
              <td>
                {char.nickName ? `${char.name} "${char.nickName}"` : char.name}
              </td>
              <td>{char.skillset?.join(", ")}</td>
              <td>{char.votes ?? 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CharacterRatings;
