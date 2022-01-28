import { render, screen } from '@testing-library/react';
import { DragonLabel } from './';

test('should render default color #d4d4d444 when unlisted type', () => {
  const type = 'test';

  render(
    <DragonLabel variant={type}>
      {type}
    </DragonLabel>
  );

  const element = screen.getByText(type);

  expect(element).toHaveStyle({ 'background': '#d4d4d444' })
});

test('should render default color #DA593244 when fire type', () => {
  const type = 'fire';

  render(
    <DragonLabel variant={type}>
      {type}
    </DragonLabel>
  );

  const element = screen.getByText(type);

  expect(element).toHaveStyle({ 'background': '#DA593244' })
});