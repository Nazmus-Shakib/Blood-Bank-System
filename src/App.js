import React, { createContext, useState } from "react";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import AllDetails from "./components/AllDetails/AllDetails";
import DonateBlood from "./components/DonateBlood/DonateBlood";
import SubmitDetails from "./components/SubmitDetails/SubmitDetails";
import LogInAdmin from "./components/LogInAdmin/LogInAdmin";

export const UserContext = createContext();

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [realAdmin, setRealAdmin] = useState(false);

  return (
    <UserContext.Provider
      value={[users, setUsers, user, setUser, realAdmin, setRealAdmin]}
    >
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
            <Footer></Footer>
          </Route>

          <Route path="/admin">
            <LogInAdmin></LogInAdmin>
          </Route>

          <Route path="/submitDetails">
            <SubmitDetails></SubmitDetails>
          </Route>

          <Route path="/donateBlood">
            <DonateBlood></DonateBlood>
            <Footer></Footer>
          </Route>

          <Route path="/allDetails">
            <AllDetails></AllDetails>
            <Footer></Footer>
          </Route>

          <Route exact path="/">
            <Home></Home>
            <Footer></Footer>
          </Route>

          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
