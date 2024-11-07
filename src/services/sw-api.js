export async function getAllStarships(setState) {
  try {
    const url = `https://swapi.dev/api/starships`;
    const res = await fetch(url);
    const starshipsData = await res.json();
    console.log(starshipsData);
    setState(starshipsData);
  } catch (error) {
    console.log(`Unable to fetch allStarShips`, error);
  }
}
