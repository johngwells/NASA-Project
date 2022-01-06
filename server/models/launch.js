const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: 'Kepler Explorer',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 21, 3030'),
  destination: 'Kepler-442 b',
  customer: ['Me', 'NASA'],
  upcoming: true,
  success: true
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber, 
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ['NASA'],
      flightNumber: latestFlightNumber
  }));
}

module.exports = {
  getAllLaunches,
  addNewLaunch
};
