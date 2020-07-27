import React, {useState, useEffect} from "react";
import {Redirect} from "react-router-dom";

const queryUrl = "https://api.themoviedb.org/3/search/person?api_key=";
const queryExtension = "&query=";

export default function PeopleSearch(props) {
    const [query, setQuery] = useState("");
    const [value, setValue] = useState("");
    const [data, setData] = useState([]);
    const changeHandle = (e) => {
      setValue(e.target.value);
    };
    const submitHandle = (e) => {
      if(!value){
          alert("Please enter name of personality before submitting");
          e.preventDefault();
          return null;
      }
      e.preventDefault();
      setQuery(value);
    };
  useEffect(() => {
      if(!query){
          return
      }
      const url = queryUrl + process.env.REACT_APP_API_KEY + queryExtension + encodeURI(query) 
      async function fetchData(){
          console.log(url)
          const data = await fetch(url).then(response => response.json());
          console.log(data);
          setData(data.results);
      }
      fetchData();
  }, [query])
  if(data.length){
      return <Redirect push to = {{ pathname: `/people/search/${query.replace(/\s+/g, '')}`, state:{data:data}}} />
  }
  return (
    <div className="main-search">
      <form onSubmit = {submitHandle} >
        <input
          type="text"
          value = {value}
          onChange = {changeHandle}
          name="search"
          placeholder="Name of personality..."
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
