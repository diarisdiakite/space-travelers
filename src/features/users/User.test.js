import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import User from './User';

describe('User component', () => {
  it('renders correctly', () => {
    /* const userReservations = {
      id: 1,
      name: 'My profile',
      description: 'User\'s description',
      missionsByUser: ['mission1', 'mission2'],
      rocketsByUser: ['rocket1', 'rocket2'],
    } */
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <User /* userReservations={userReservations} */ />
          </MemoryRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
