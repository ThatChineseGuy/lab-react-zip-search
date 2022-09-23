import React, {useState} from "react";
import "./App.css";

function City(city, state, lat, long, EstimatedPopulation, TotalWages) {
  return (<div>
    <div class="answerhead">
      {city},{state}
    </div>
      <ul>
        <li>State: {state}</li>
        <li>Location: ({lat},{long}</li>
        <li>Population(estimated): {EstimatedPopulation}</li>
        <li>Total Wages:{TotalWages}</li>
      </ul>
    
    
    </div>
  );
}

function ZipSearchField(value, change) {
  return(<div>
    <form method="get">
      <label for="Zip Code">Zip Code:</label>
      <input id="Zip Code" type="text" value={value}></input>
    </form>
  </div>
  );
}

function App() {
  const [data, setData] = useState("");
  const [zipCode, setZipCode] = useState([]);

  const zipchange = (event) => {
    const newzip = event.target.value;
    setData(newzip);
  }

  const fetchData = () => {
    fetch('https://ctp-zip-api.herokuapp.com/zip/' + zipCode , {
      'mode' : 'cors',
      headers: {
        'Content-Type' : 'application/json',
      }
    })
    .then((response) => response.json())
    .then((responseData) => setData(responseData))
    .catch((error) => console.log(error));
  }
  return (
    <div className="App">
      <div className="App-header">
        <h1>Zip Code Search</h1>
      </div>
      <div className="mx-auto" style={{ maxWidth: 400 }}>
        <ZipSearchField value={data} change={zipchange}/>
        <div>
          <City 
            city ={setZipCode.City}
            state = {setZipCode.state}
            lat = {setZipCode.lat}
            long={setZipCode.long}
            EstimatedPopulation={setZipCode.EstimatedPopulation}
            TotalWages={setZipCode.TotalWages}
            />
          <City />
        </div>
      </div>
    </div>
  );
}

export default App;