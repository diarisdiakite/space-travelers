import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import UsersList from './UsersList';

describe('UsersList component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <UsersList />
          </MemoryRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
