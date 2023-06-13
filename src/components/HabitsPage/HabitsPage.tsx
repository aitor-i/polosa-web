import Navigation from 'components/Navigation';
import React from 'react';
import PercentageCircle from './PercentageCircle';

export const HabitsPage = () => {
  return (
    <main>
      <Navigation />
      <hgroup>
        <h1>Habits</h1>
      </hgroup>
      <PercentageCircle size="SMALL" percentage={15} />
      <PercentageCircle percentage={36} shape="SLIM" />
      <PercentageCircle size="BIG" percentage={76} />
    </main>
  );
};
