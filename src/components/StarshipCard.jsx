const StarshipCard = ({ starship }) => {
  const { name, starship_class, manufacturer, model } = starship;

  return (
    <li>
      <h2>{name}</h2>
      <p><strong>Class:</strong> {starship_class}</p>
      <p><strong>Manufacturer:</strong> {manufacturer}</p>
      <p><strong>Model:</strong> {model}</p>
    </li>
  );
};

export default StarshipCard;
