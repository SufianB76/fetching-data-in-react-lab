import StarshipCard from './StarshipCard';

const StarshipList = ({ starships }) => {
  return (
    <section>
      <p>Number of results: {starships.length}</p>
      <ul>
        {starships.map((starship) => (
          <StarshipCard key={starship.name} starship={starship} />
        ))}
      </ul>
    </section>
  );
};

export default StarshipList;
