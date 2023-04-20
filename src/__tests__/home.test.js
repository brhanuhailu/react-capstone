import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from '../components/home';
import store from '../redux/store';
import cryptoSlice, { fetchCrypto, getdetails } from '../redux/crypto/cryptoSlice';

describe('Home page', () => {
  beforeEach(async () => {
    await store.dispatch(fetchCrypto);
  });

  it('should renders home page correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Tests redux pure functions', () => {
  const initialState = {
    isLoding: false,
    crypto: [
      { id: 1, name: 'Bitcoin', show: false },
      { id: 2, name: 'Ethereum', show: false },
    ],
    isEror: false,
  };
  const expectedValue = {
    isLoding: false,
    crypto: [
      { id: 1, name: 'Bitcoin', show: true },
      { id: 2, name: 'Ethereum', show: false },
    ],
    isEror: false,
  };
  const action = getdetails(1);
  const reducer = cryptoSlice(initialState, action);
  expect(action.type).toEqual('crypto/getdetails');
  expect(reducer).toEqual(expectedValue);
});
