import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import store from '../../store';
import MissionsListElements from './MissionsListElements';

describe('MissionsListElements component', () => {
  it('renders correctly', () => {
    /* const missions = [
      {
        mission_id: 1878900,
        mission_name: 'My mission',
        description: 'My mission description',
        website: 'www.my-mission.org',
      },
    ]; */
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <MissionsListElements /* missions={missions} */ />
          </MemoryRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
