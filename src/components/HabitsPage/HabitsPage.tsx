import Navigation from 'components/Navigation';
import React from 'react';
import PercentageCircle from './PercentageCircle';
import NewHabit from './NewHabit';

export const HabitsPage = () => {
  return (
    <main>
      <Navigation />
      <hgroup>
        <h1>Habits</h1>
      </hgroup>
      <PercentageCircle size="SMALL" percentage={15} />
      <NewHabit />
    </main>
  );
};
