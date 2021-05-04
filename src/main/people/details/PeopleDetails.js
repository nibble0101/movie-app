import React, { useState, useEffect } from "react";
import Details from "./Details";
const baseUrl = "https://api.themoviedb.org/3/person";

function TvShowDetails(props) {
  const [details, setDetails] = useState({});
  const { params } = props.match;
  useEffect(() => {
    const url = `${baseUrl}/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    async function fetchDetails() {
      try{
        const details = await fetch(url).then((response) => response.json());
        setDetails(details);

      }catch(error){
          console.log(error);
      }finally{

      }
      
    }
    fetchDetails();
  }, [params.id]);
  return <Details details={details} />;
}

export default TvShowDetails;
