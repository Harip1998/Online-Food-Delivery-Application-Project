import React from 'react';
import { BrowserRouter,  } from 'react-router-dom'
import './App.css';
import Restaurant_Nav from "./Components/Restaurant_Page/Restaurant_Nav";
import Home_Nav from "./Components/Home_Page/Home_Nav";

class App extends React.Component{
  
  render(){
  return (
    <BrowserRouter>
        <div className="App">
           <switch>
              <Home_Nav />
              <Restaurant_Nav /> 
           </switch>
        </div>
  </BrowserRouter>
  );
}
}
export default App;
