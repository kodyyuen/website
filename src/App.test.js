import { render, screen, within } from '@testing-library/react';
import App from './App';

test('visitors can explore projects and request a current resume', () => {
  const { container } = render(<App />);
  const projectSection = container.querySelector('#projects');
  expect(screen.getByRole('link', { name: 'View my work' })).toHaveAttribute('href', '#projects');
  expect(within(projectSection).getByText('GetRecs')).toBeInTheDocument();
  expect(within(projectSection).getByRole('link', { name: /Backend repo/i })).toHaveAttribute(
    'href', 'https://github.com/kodyyuen/getrecs-node-server-app'
  );
  expect(screen.getByRole('link', { name: 'email me' })).toHaveAttribute(
    'href', 'mailto:work@kodyyuen.com?subject=Portfolio%20inquiry'
  );
  expect(container.querySelector('a[href$=".pdf"]')).not.toBeInTheDocument();
});
