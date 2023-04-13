import './App.css';
import ProfilePhoto from './Components/ProfilePhoto';
import FullName from './Components/FullName';
import Address from './Components/Address';
import Bio from './Components/Bio';


function App() {
  return (
    <div className='profile'>
    <h2>ABOUT ME</h2>
      <div class="under-line">
          <div class="line-up">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
      <ProfilePhoto/>
      <FullName />
      <Address />
      <Bio/>
      <div className='buttons'>
      <button>HIRE ME</button>
      <button>DOWNLOAD MY CV</button>
      </div>
    </div>

    );
}

export default App;
