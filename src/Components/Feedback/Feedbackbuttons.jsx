import React from 'react';
import PropTypes from 'prop-types';

const Feedbackbutton = ({ option, onLeaveFeedback }) => (
  <button type="button" onClick={onLeaveFeedback}>
    {option}
  </button>
);

Feedbackbutton.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedbackbutton;
