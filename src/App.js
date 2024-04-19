import { Fragment, useEffect, useState } from 'react';
import "./App.css";
import NavScrollExample from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Upload from './Uploader';
import Slider from './Slider';

const App = () => {
  return(
    <Fragment>
      <Slider/>
      <div className='heading'>NOVA CONVERTOR</div>
      <Upload/>
    </Fragment>
  )
  
  
};

export default App;
