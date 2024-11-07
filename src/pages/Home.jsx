import { useEffect, useState } from "react";
import { getAllStarships } from "../services/sw-api";

const Home = () => {
  // state, state function
  const [starShips, setStarShips] = useState();

  useEffect(() => {
    getAllStarships(setStarShips);
  }, []);

  return (
    <div>
      {starShips ? (
        starShips.results.map((starShip) => <li>{starShip.name}</li>)
      ) : (
        <>Loading...</>
      )}
    </div>
    // <div>{starShips && starShips.results.map((starShip) => <li>bruh</li>)}</div>
  );
};

export default Home;
