import React, {useState, useEffect} from "react";
import Details from "./Details";
const baseUrl = "https://api.themoviedb.org/3/tv/";
const urlExtension_1 = "?api_key=";
const urlExtension_2 = "&language=en-US";

function TvShowDetails(props) {
    const[details, setDetails] = useState({genres:[], episode_run_time:[], networks:[]});
    const {params} = props.match
    useEffect(() => {
        const url = baseUrl + params.id + urlExtension_1 + process.env.REACT_APP_API_KEY + urlExtension_2;
         async function fetchDetails(){
              const details = await fetch(url).then(response => response.json());
              console.log(details)
              setDetails(details);
         }
         fetchDetails()
    }, [params.id])
    return <Details details = {details} />;
    // return <h1> Hello World </h1>
}

export default TvShowDetails;