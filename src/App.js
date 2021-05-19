
import './App.css';
import Body from './Body';
import Header from './Header';
import SideBar from './SideBar';
import Stream from './Stream';

function App() {
  return (
    //BEM NAMING CONVENTION
    <div className="app">

      <Header/>

      <div className="app__main">
      <SideBar/>
      
      <Body/>
      




      </div>
      

      
    </div>
  );
}

export default App;
