import React, { Fragment } from 'react';
import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';

const Statistics = ({
  isOpen,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <Fragment>
    {isOpen ? (
      <Fragment>
        <h2>Statictics</h2>
        <span>Good:{good}</span>
        <br />
        <span>Neutral:{neutral}</span>
        <br />
        <span>Bad:{bad}</span>
        <br />
        <span>Total:{total}</span>
        <br />
        <span>Positive feedbak:{positivePercentage}%</span>
      </Fragment>
    ) : (
      <div>
        <Notification message="No feedback given" />
      </div>
    )}
  </Fragment>
);

Statistics.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
