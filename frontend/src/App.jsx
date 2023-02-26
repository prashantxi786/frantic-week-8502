

 import SmallNavbar from "./Components/Navbar/SmallNavbar"
 import Footer from "./Components/Footer/Footer"
import "./App.css";
import Allroutes from "./Routes/Allroutes";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Signin from './Components/Auth Components/Signin'
import ProductsRoutes from "./Routes/ProductsRoutes";
import New  from "./Pages/ProductPages/New"
import Dahsboard from "./Pages/admin/Dahsboard";
import Navbar from "./Components/Navbar/Navbar"



import Cart from "./Pages/Cart/cart";

function App() {
  return (

    <div className="App">

      
      <div className="big">
        <Navbar />
      </div> 
      <div className="small">
        <SmallNavbar />
      </div> 


      <Allroutes/>
     

      
    </div>
  );

}

export default App;
