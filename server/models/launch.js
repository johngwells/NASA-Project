const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: 'Kepler Explorer',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 21, 3030'),
  destination: 'Kepler-442 b',
  customer: ['Me', 'NASA'],
  upcoming: true,
  success: true,
}

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values())
}

module.exports = {
  getAllLaunches
}
