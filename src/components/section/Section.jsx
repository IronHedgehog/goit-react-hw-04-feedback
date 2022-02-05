import PropTypes from 'prop-types';

const Section = ({ children, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
