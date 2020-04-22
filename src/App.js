import React, { Component, Fragment } from 'react';
import Section from './Components/Section/Section';
import Statictics from './Components/Statistics/Statistics';
import PropTypes from 'prop-types';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    isOpen: false,
  };

  static defaultProps = {
    step: 1,
    positiveFeedback: 0,
  };

  static options = { good: 'Good', neutral: 'Neutral', bad: 'Bad' };

  handleFeedbackIncrement = e => {
    if (e.target.name === 'Good')
      this.setState(state => ({
        good: state.good + this.props.step,
        isOpen: true,
      }));
    else if (e.target.name === 'Neutral')
      this.setState(state => ({
        neutral: state.neutral + this.props.step,
        isOpen: true,
      }));
    else if (e.target.name === 'Bad')
      this.setState(state => ({
        bad: state.bad + this.props.step,
        isOpen: true,
      })); gi
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good !== 0
      ? (
        (this.state.good /
          (this.state.good + this.state.neutral + this.state.bad)) *
        100
      ).toFixed(2)
      : '0';
  };

  render() {
    const { neutral } = this.state;
    const { good } = this.state;
    const { bad } = this.state;
    const { isOpen } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <Fragment>
        <Section
          title="Please leave feedback"
          onLeaveFeedback={this.handleFeedbackIncrement}
          options={App.options}
        />

        <Statictics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          isOpen={isOpen}
          positivePercentage={positiveFeedback}
        ></Statictics>
      </Fragment>
    );
  }
}

App.propTypes = {
  step: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
