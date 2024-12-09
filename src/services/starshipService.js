const BASE_URL = 'https://swapi.dev/api/starships/';

export const getStarships = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Failed to fetch starships.');
    return await response.json();
  } catch (error) {
    console.error(error);
    return { results: [] };
  }
};

export const searchStarships = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}?search=${query}`);
    if (!response.ok) throw new Error('Failed to search starships.');
    return await response.json();
  } catch (error) {
    console.error(error);
    return { results: [] };
  }
};
