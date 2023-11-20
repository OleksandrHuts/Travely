import React from 'react';
import './css/style.scss';
import './css/main.scss';


// components

import Background from './components/Background';
import Table_grid from './components/Table_grid';
import Grida from './components/Grid';
import FAQ from './components/faq';
import Comments from './components/Comments';

function App() {
  return (
    <div className="App wrapper">
      <Background/>
      <Grida />
      <Table_grid />
      <FAQ />
      <Comments/>
    </div>
  );
}

export default App;
