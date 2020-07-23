import React from "react";

export default function Test(props){
    console.log(props)
    return <h1> Test {props.location.id} </h1>
}