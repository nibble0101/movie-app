import React, { useContext } from "react";
import Zoom from "react-reveal/Zoom";
import { context } from "../../store/ContextProvider";
const url = "https://image.tmdb.org/t/p/w300/";

function People(props) {
  //   const { generalConfig, data } = useContext(context);
  const [people, setPeople] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  React.useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/person/popular?api_key=" +
      process.env.REACT_APP_API_KEY +
      "&page=" +
      pageNumber;
    const fetchData = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => setPeople(data));
    };
    fetchData();
  }, [pageNumber]);
  return (
    <div className="show-wrapper">
      <h1> People </h1>
      <div className="show">
        {people &&
          people.results.map((v, i) => {
            return (
              <Zoom key={Math.random()}>
                <img src={url + v.profile_path} key={"people" + i} />
              </Zoom>
            );
          })}
      </div>
    </div>
  );
}

export default People;
