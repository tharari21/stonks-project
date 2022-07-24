import { useState } from 'react';
import Portfolio from './pages/Portfolio'
import Home from "./pages/Home";
import Browse from './pages/Browse'
import Header from './components/Header'
import './App.css';

function App() {
  const [screen, setScreen] = useState('home');
  // page will be set to the component we will render depending on the current screen
  let page;
  
  
  if (screen === 'portfolio') {
    page = <Portfolio />
  }
  else if (screen=== 'browse') {
    page = <Browse />
  }
  else {
    page = <Home />
  }
  
  return (
    <div className='App'>
      <Header onSwitchScreen={setScreen} />
     {page}

    </div>
  );
}

export default App;
