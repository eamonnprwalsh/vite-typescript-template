import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/results">Go to Results</Link>
    </div>
  );
};

export default HomePage;
