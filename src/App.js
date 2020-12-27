import logo from './logo.svg';
import './App.css';

import TeamPage from "./components/ourTeam";
import ProfilePage from "./components/profile";

function App() {
  return (
    <div className="App">
     <TeamPage/>
     <ProfilePage></ProfilePage>
    </div>
  );
}

export default App;
