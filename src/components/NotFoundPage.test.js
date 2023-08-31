import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../features/store';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <NotFoundPage />
          </MemoryRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
