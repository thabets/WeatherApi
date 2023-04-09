import React from "react";
// import { useState, useEffect } from "react";

// function Search() {
//   const [lat, setLat] = useState([]);
//   const [long, setLong] = useState([]);
//   const [data, setData] = useState([]);
//   const [city, setCity] = useState({ name: "" });

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       setLat(position.coords.latitude);
//       setLong(position.coords.longitude);
//     });
//     console.log("latitude is :", lat);
//     console.log("longitude is :", long);
//   });

//   setCity(document.getElementById("city"));
  
//   console.log("city");
//   fetch(
//     `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
//   )
//     .then((res) => res.json())
//     .then((result) => {
//       setData(result);
//       console.log(result);
//     });
// }

// export default Search;
