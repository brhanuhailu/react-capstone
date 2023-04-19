import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../components/Links';

describe('Links', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Nav />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});