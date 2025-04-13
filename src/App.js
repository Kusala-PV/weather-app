
import React ,{useState} from 'react';
function App() {
  const [city,setCity] = useState("");
  const [temp ,setTemp] = useState("");
  const changeHandler = e => {
    setCity(e.target.value);
  }
  const submitHandler = e => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
    .then(response => response.json()).then(data => {
      const kelvin = data.main.temp;
      const celsius = kelvin-273.15;
      setTemp("Temperature at " + city+ " " + Math.round(celsius)+"C");
      setCity("");
    }
    ).catch(err => console.log(err));
  }
  return (
    <center>
    <div className ="card mt-5">
      <div className="card-body">
        <h4 className="card-title"> Weather App</h4>
        <form onSubmit={submitHandler}>
          <input type="text" name="city" value={city} onChange = {changeHandler}/><br/><br/>
          <input type="submit" value= "Get Temperature"/>
        </form>
        <h1> {temp} </h1>
      </div>
      </div>
      </center>
  );
}

export default App;
