import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Details from '../components/detail';
import store from '../redux/store';

describe('Detail', () => {
    it('renders correctly', () => {
        const tree = renderer
        .create(
            <Provider store={store}>
            <BrowserRouter>
                <Details />
            </BrowserRouter>
            </Provider>,
        )
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
    });