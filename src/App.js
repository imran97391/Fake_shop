import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { Headers } from './components/header';
import { Productlisting } from './components/productListing';
import { ProductDetalis } from './components/productDetails';
import { ProductComponent } from './components/productComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Headers />
        <Routes>
          <Route exact path='/' element={<Productlisting/>} />
          <Route exact path='/product/'  element={<ProductComponent/>} />
          <Route exact path='/product/:productId'  element={<ProductDetalis/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
