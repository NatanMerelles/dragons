import { render, screen, waitFor } from '@testing-library/react';
import { Dragons } from './';
import Context from '../../tests/contextsProvider';
import FakeFetch from '../../tests/fetchStub';
import fakeData from './dragons.mock.json';

test('should render dragon card', async () => {
  global.fetch = jest.fn().mockImplementation(FakeFetch(fakeData));

  render(
    <Context>
      <Dragons />
    </Context>
  );

  await waitFor(() => expect(screen.getByText(/fakeDragon/i)).toBeInTheDocument())
});