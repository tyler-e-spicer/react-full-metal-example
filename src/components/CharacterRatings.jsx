import "../css/characterRatings.css";
import PropTypes from "prop-types";
import { characterPropTypes } from "../utils/propTypes";

const CharacterRatings = ({ characters }) => {
  const charactersCopy = characters.slice();
  const sortedCharacters = charactersCopy.sort((a, b) => b.votes - a.votes);
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
              <td>{char.skillset.join(", ")}</td>
              <td>{char.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

CharacterRatings.propTypes = {
  characters: PropTypes.arrayOf(characterPropTypes).isRequired,
};

export default CharacterRatings;
