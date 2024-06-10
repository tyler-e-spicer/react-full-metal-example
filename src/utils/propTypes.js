import PropTypes from "prop-types";

export const characterPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  nickName: PropTypes.string,
  skillset: PropTypes.arrayOf(PropTypes.string).isRequired,
  votes: PropTypes.number.isRequired,
  background: PropTypes.string,
  imageUrl: PropTypes.string,
});
