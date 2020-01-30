import React from 'react';
import { HashRouter, Route} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Profile from "./routes/Profile";


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
