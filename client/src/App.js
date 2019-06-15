import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
        </header>
        <div>
            <Route exact path="/" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;