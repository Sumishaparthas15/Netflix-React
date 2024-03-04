import React from 'react'
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { actions,orginals,comedy,Romance,Horror } from './urls'; 


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={actions} title='Actions' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={Romance} title='Romance' isSmall/>
      <RowPost url={Horror} title='Horror' isSmall/>

    </div>
  );
}

export default App;
