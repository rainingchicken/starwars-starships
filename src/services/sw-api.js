export async function getAllStarships(setState, setError) {
  try {
    const url = `https://swapi.dev/api/starships`;
    const res = await fetch(url);
    const starshipsData = await res.json();
    console.log(starshipsData);
    setState(starshipsData); //set starshipsData to starShips state
  } catch (error) {
    console.log(`Unable to fetch allStarShips`, error);
    setError(`Unable to fetch allStarShips`, error);
  }
}
