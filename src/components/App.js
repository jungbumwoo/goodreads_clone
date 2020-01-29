import React from 'react';
import { HashRouter, Route} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/detail" component={Detail}/>
      <Route path="/profile" component={Profile}/>
    </HashRouter>
  );
}

export default App;
