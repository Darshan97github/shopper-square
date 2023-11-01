import { React, useState } from "react";
// import Topbar from "./src/Assests/Topbar/Topbar";
// import { Switch, Route, Redirect } from "react-router-dom";
// import { Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch, Redirect } from 'react-router-dom';
// import Login from "../../Authentication/Login";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer.js";
// import { componentList } from "./data";
import Login from "./Authentication/Login";
// import Header from "./Components/Header/Header.js";
import Header1 from "./Components/Header/Header1.js";
import Footer from "./Components/Footer/Footer";
import Topbar from "./src/Assests/Topbar/Topbar"
import { componentList } from "./Components/App/data";

// console.log('Header1', Header1)

function App() {
  const [user, setUser] = useState(null);
  const componentListRefine = componentList.slice(0,13);
  if (user !== null) {
    return (
      <>
        <Topbar />
        {/* <Header /> */}
        <Header1/>
        <Switch>
          {componentListRefine.map((value, id) => {
            return (
              <Route
                key={id}
                exact
                path={value.link}
                component={value.component}
              />
            );
          })}
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Switch>
          <Route exact path="/login" >
              <Login setUser={setUser} />
          </Route>
          <Redirect to="/login" />
        </Switch>
      </>
    );
  }
}

export default App;
