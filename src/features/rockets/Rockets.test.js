import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import store from '../store';
import Rockets from './Rockets';
import imageError from '../../assets/images/image_not_available.png';

describe('Rockets component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <Rockets
              id="1"
              rocketName="a"
              description="a"
              flickrImages={imageError}
              reserved={false}
            />
          </MemoryRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
