import React from 'react';
import FeedbackOptions from '../Feedback/FeedbackOptions';
import PropTypes from 'prop-types';

const Section = ({ title, onLeaveFeedback, options }) => (
  <div>
    {title}
    <br />
    <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={options} />
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};

export default Section;
