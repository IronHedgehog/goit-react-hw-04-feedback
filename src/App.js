import { useState } from 'react';
import './App.css';
import Buttons from './components/buttons/Buttons';
import Notification from './components/Notification/Notification';
import Section from './components/section/Section';
import Statistics from './components/statistics/Statistics';

const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClick = e => {
    // this.setState(prev => ({
    //   [name]: prev[name] + 1,
    // }));
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(prev => {
          return prev + 1;
        });
        break;
      case 'neutral':
        setNeutral(prev => {
          return prev + 1;
        });
        break;
      case 'bad':
        setBad(prev => {
          return prev + 1;
        });
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    // console.log(good);
    // const  good, neutral, bad  = this.state;
    return good + neutral + bad;
  };

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / total);
  };
  const positivePercentage = countPositiveFeedbackPercentage();

  const state = {
    good: good,
    neutral: neutral,
    bad: bad,
  };
  const names = Object.keys(state);
  return (
    <main>
      <Section title={'Please leave feedback'}>
        <Buttons names={names} onClick={onClick} />
      </Section>

      <Section title={'Statistics'}>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </main>
  );
};

export default App;
