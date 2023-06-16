import { Link } from 'react-router-dom';
import Feature1 from 'components/common/feature/Feature1';
import HomeFeature from './HomeFeature';

const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/results">Go to Results</Link>
      <Feature1 />
      <HomeFeature />
    </div>
  );
};

export default HomePage;
