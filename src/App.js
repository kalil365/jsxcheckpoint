import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto'
import FullName from './Component/Profile/FullName'
import Address from './Component/Profile/Address'

function App() {
  return (
    <div className="App" style={{borderStyle:'double',color:'blueviolet',borderRadius:'10',
    margin:'100',
    backgroundColor:'#BDCAFE'}}>
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
