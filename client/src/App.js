import { useCallback, useState, useEffect } from 'react';
import './App.css';

/* Link: Launch
  DropDown
  Launch Date = Calender
  Mission Name - ''
  Rocket Type - ''
  Destination Exoplanet
  button Launch Mission
*/

/* link: Upcoming - Future Missions
No. Date Mission Rocket Destination
x deletes item 
*/

/* link: History - Previous Missions
  No. Date Mission Rocket Customers
*/

function App() {
  const [planets, setPlanets] = useState([]);

  const fetchMyAPI = useCallback(async () => {
    let response = await fetch('http://localhost:5000/planets');
    response = await response.json();
    console.log('API response', response);
    setPlanets(response);
  }, []);

  useEffect(() => {
    fetchMyAPI();
  }, [fetchMyAPI]);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>NASA Project</h1>
        <p>Planets: {planets}</p>
      </header>
    </div>
  );
}

export default App;
