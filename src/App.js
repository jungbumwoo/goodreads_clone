import React from 'react';
import { HashRouter, Route} from "react-router-dom";
import BookDetail from "./routes/BookDetail";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import AddBook from "./routes/AddBook";


function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/addbook" component={AddBook} />
      <Route path="/book/:id" component={BookDetail}/>
      <Route path="/profile" component={Profile}/>
    </HashRouter>
  );
}

export default App;
