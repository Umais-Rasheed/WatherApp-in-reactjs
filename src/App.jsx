import './App.css';
import Search from './Components/Search';
import Result from './Components/Result';
import { useState } from 'react';
import axios from "axios";

function App() {
  const [search,setSearch ] = useState("");
  const [Weather,setWeather ] = useState([]);
  const [history,setHistory ] = useState([]);

  const changeSearch = (value) => {
    setSearch(value);
  }

  const searchWeatherHandler = () => {
    
    if(search !== ""){
      axios.get(`
      https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=79e753006790a2869a9ef0da6bae84fd&units=metric
      `)
      // This block executes if the API call is successful
     .then(
      (response) => {
        // checks if the search term is alridy present
        if(history.indexOf(search) === -1) {
          // keeps track of past searches
          setHistory(
            [
              ...history,
              search
            ]
          )
        }
        //to show api data
        console.log(response.data); 
        setWeather(response.data)
      }
     )
    //  executes if the API call encounters an error
     .catch(
      (error) => {
        console.log(error);
      }
     )
    }
  } 

  const historySearchHandler = async (data) => {
    searchWeatherHandler();

    if(data !== ""){
      axios.get(`
      https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=79e753006790a2869a9ef0da6bae84fd
      `)
     .then(
      (response) => {
        if(history.indexOf(data) === -1) {
          setHistory(
            [
              ...history,
              data
            ]
          )
        }
        console.log(response.data);
        setWeather(response.data)
      }
     ).catch(
      (error) => {
        console.log(error);
      }
     )
    }
  }

  return (
    <div className="max-w-[1240px] mx-auto mt-8 p-3 bg-gray-100">
      <Search searchData={search} eventHandler={changeSearch} searchWeather={searchWeatherHandler}/>
      <Result weatherData={Weather} historyData={history} historySearch={historySearchHandler}/>
    </div>
  );
}

export default App;
