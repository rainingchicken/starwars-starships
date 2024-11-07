import { useEffect, useState } from "react";
import { getAllStarships } from "../services/sw-api";
import StarShipCard from "../components/StarShipCard";

const Home = () => {
  // state, state function
  const [starShips, setStarShips] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    //special cases: fetching data, timer, DOM
    document.title = "Star Wars React";
    getAllStarships(setStarShips, setError);
  }, []);

  return (
    <div className="starshipcardcontainer">
      {starShips ? (
        starShips.results.map((starShip) => (
          <StarShipCard key={starShip.name} starshipName={starShip.name} />
        ))
      ) : (
        <>Loading...</>
      )}
      {error && <>{error}</>}
    </div>
    // <div>{starShips && starShips.results.map((starShip) => <li>bruh</li>)}</div>
  );
};

export default Home;
