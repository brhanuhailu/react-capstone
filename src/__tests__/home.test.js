import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from '../components/home';
import store from '../redux/store';
import fetchCrypto from '../redux/crypto/cryptoSlice';


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
