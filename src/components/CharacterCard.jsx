import PropTypes from "prop-types";
// import "../css/characterCards.css";

const CharacterCard = ({ name, nickName, imageUrl, background }) => {
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

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  nickName: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

export default CharacterCard;
