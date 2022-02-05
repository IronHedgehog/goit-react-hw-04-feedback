import PropTypes from 'prop-types';

const Buttons = ({ names, onClick }) => {
  return (
    <>
      {names.map(name => {
        return (
          <button key={name} name={name} onClick={onClick}>
            {name}
          </button>
        );
      })}
    </>
  );
};

export default Buttons;

Buttons.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};
