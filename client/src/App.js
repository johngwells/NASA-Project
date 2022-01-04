import React, { useState, useEffect } from 'react';
import './App.css';

import Select from 'react-select';

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMyAPI = async () => {
      let response = await fetch('http://localhost:5000/planets');
      response = await response.json();
      console.log('API response', response);
      setPlanets(response);
      setIsLoading(false);
    };
    fetchMyAPI();
  }, []);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: '#1DA1F2',
      borderBottom: '1px dotted pink',
      color: state.isSelected ? '#000' : 'white',
      padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 200,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided };
    }
  }

  const mappedData = planets.map(planet => {
    return (
      <ul key={planet['kepler_name']}>
        <li>{planet['kepler_name']}</li>
      </ul>
    );
  });

  const dropDownOptions = [];

  const dropdownData = planets.map(planet => {
    let options = {
      value: planet['kepler_name'],
      label: planet['kepler_name']
    };

    return dropDownOptions.push(options);
  });

  const loadingList = isLoading ? 'loading...' : mappedData;
  const loadingDropdown = isLoading ? 'loading' : dropdownData;

  return (
    <div className='App'>
      <header className='App-header'>
        <section>
          <h1>NASA Project</h1>
          <div>
            <p>Planets With Possible Life:</p>
            {/* {loadingList} */}
          </div>
        </section>
        <section>
          <Select styles={customStyles} options={dropDownOptions}></Select>
        </section>
      </header>
    </div>
  );
}

export default App;
