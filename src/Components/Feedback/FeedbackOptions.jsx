import React, { Fragment } from 'react';
import Feedbackbutton from './Feedbackbuttons';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Fragment>
    <Feedbackbutton option={options.good} onLeaveFeedback={onLeaveFeedback} />
    <Feedbackbutton
      option={options.neutral}
      onLeaveFeedback={onLeaveFeedback}
    />
    <Feedbackbutton option={options.bad} onLeaveFeedback={onLeaveFeedback} />
  </Fragment>
);

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
