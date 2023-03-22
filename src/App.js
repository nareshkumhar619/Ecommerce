import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './COMPONENT/Header';
import CardDetails from './COMPONENT/CardDetails';
import Card from "./COMPONENT/Card"
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
 <Header/>
<Routes>
  <Route path='/' element={<Card/>} />
  <Route path='/cart/:id' element={<CardDetails/>}/>X
</Routes>

    </>
  );
}

export default App;
