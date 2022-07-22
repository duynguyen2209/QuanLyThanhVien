import * as React from 'react';
import Admin from './components/Admin';
import Register from './components/Register';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Admin/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
