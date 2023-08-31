import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import store from '../store';
import Rockets from './Rockets';
import imageError from '../../assets/images/image_not_available.png';

describe('Rockets component', () => {
  it('renders correctly', () => {
    const data = [
      {
        id: '5e9d0d95eda69955f709d1eb',
        name: 'Falcon 1',
        type: 'rocket',
        flickr_images: imageError,
        description: 'The Falcon 1 was an expendable launch system privately',
        reserved: false,
      },
    ];
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <Rockets
              id={data[0].id}
              rocketName={data[0].name}
              description={data[0].description}
              flickrImages={data[0].flickr_images}
              reserved={data[0].reserved}
            />
          </MemoryRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
