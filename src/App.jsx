import { useState, useEffect } from 'react';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import { getStarships, searchStarships } from './services/starshipService';

const App = () => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStarships = async () => {
      const data = await getStarships();
      setStarships(data.results);
      setLoading(false);
    };
    fetchStarships();
  }, []);

  const handleSearch = async (query) => {
    setLoading(true);
    const data = await searchStarships(query);
    setStarships(data.results);
    setLoading(false);
  };

  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch onSearch={handleSearch} />
      {loading ? <p>Loading...</p> : <StarshipList starships={starships} />}
    </main>
  );
};

export default App;
