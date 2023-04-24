
import './App.css';
import {action,comedy,thriller} from './urls.js'
import RowCards from './Components/RowCards/RowCards'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';


function App() {
  

  return (
   <div>
    <NavBar/>
    <Banner/>
    <RowCards urls={action} title="Action Movies"  />
    <RowCards urls={comedy} title="Comedy Movies" isSmall />
    <RowCards urls={thriller} title="Thriller Movies" isSmall />
   </div>
  );
}

export default App;
