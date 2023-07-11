import React, { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = state => {
    if (state === 'good') {
      setGood(prevGood => prevGood + 1);
    } else if (state === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (state === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
  };
  ///
  // const onLeaveFeedback = state => {
  //   const updateState = {
  //     good: setGood,
  //     neutral: setNeutral,
  //     bad: setBad,
  //   };

  //   if (updateState.hasOwnProperty(state)) {
  //     updateState[state](prevState => prevState + 1);
  //   }
  // };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default App;
