import React from 'react';
import './style/App.css';
import Home from './Images/Home.svg';
import Education from './Images/Education.svg';
import People from './Images/People.svg';
import Mail from './Images/Mail.svg';
import Setting from './Images/Setting.svg';
import Exit from './Images/Exit.svg';
import { Link } from 'react-router-dom';

function App() {

  return (
    <div>
      <div className='menu'>
        <div className='menu__column'>
          
          <div className='menu__flex'><div className='f_'>F.</div>
            <div className='ul__flex'>
              <a href="#"><img src={Home} alt='Home' /></a>
              <a href="#"><img src={Education} alt='Education' /></a>
              <a href="#"><img src={People} alt='People' /></a>
              <a href="#"><img src={Mail} alt='Mail' /></a>
              <a href="#"><img src={Setting} alt='Setting' /></a>
              <a href="#"><img src={Exit} alt='Exit' /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
