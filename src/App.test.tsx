import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


//НА ПРАКТИКЕ ПИСАЛ ТЕСТЫ ДЛЯ РЮДЬЮСЕРОВ И СМОТРЕЛ ИСТОРИИ ЧЕРЕЗ STORYBOOK. В ДАННОМ ПРИЛОЖЕНИИ НЕ ИСПОЛЬЗОВАЛ ИХ , ПРОШУ ПРОСТИТЬ :))