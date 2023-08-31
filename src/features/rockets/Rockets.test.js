import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import store from '../store';
import Rockets from './Rockets';

describe('Rockets component', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <MemoryRouter>
                        <Rockets />
                    </MemoryRouter>
                </Provider>,
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
