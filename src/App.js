import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <Home />} />
    </BrowserRouter>
  );
}

export default App;
