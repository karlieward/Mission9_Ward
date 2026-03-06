// Mission 9
// Karlie Ward
// create a website that lists out info about colleges in NCAA basketball

import './App.css';
// import file with all team data
import teamsData from './CollegeBasketballTeams.json';

// info for a school object
type SchoolData = {
  school: string;
  name: string;
  city: string;
  state: string;
};

// teams array
type TeamsJson = {
  teams: SchoolData[];
};

// extract from the array of teams
const schools = (teamsData as TeamsJson).teams;


// welcome heading
function Welcome() {
  return <>
  <h1>Weclome To MARCH MADNESS!</h1>
  <p>Here are all the teams participating in the NCAA:</p>
  </>
  
}

// school info 'card'
function School({
  schoolName,
  mascotName,
  location,
}: {
  schoolName: string;
  mascotName: string;
  location: string;
}) {
  return (
    <>
  
      <h2>{schoolName}</h2>
      <h3>{mascotName}</h3>
      <h3>{location}</h3>
    </>
  );
}

// loop through all schools and render component for each
function SchoolList() {
  return (
    <>
      {schools.map((singleSchool, index) => (
        <School
          key={index}
          schoolName={singleSchool.school}
          mascotName={singleSchool.name}
          location={`${singleSchool.city}, ${singleSchool.state}`}
        />
      ))}
    </>
  );
}




// root component + redner on screen heading/cards
function App() {

  return (
    <>
    <Welcome/>
    <SchoolList />
    </>
  )
}

export default App
