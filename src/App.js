import { Component } from 'react/cjs/react.production.min';
import './App.css';
import Buttons from './components/buttons/Buttons';
import Notification from './components/Notification/Notification';
import Section from './components/section/Section';
import Statistics from './components/statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = e => {
    const { name } = e.target;
    this.setState(prev => ({
      [name]: prev[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      onClick,
      state,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();
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
  }
}

export default App;
