import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from './routers/Home';
import Navigaion from './routers/Navigation';
import Detail from './routers/Detail';

function App() {
  return (
    <HashRouter>
      <Navigaion />
      <Route path="/" exact={true} component={Home} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}
export default App;
