import logo from './logo.svg';
import React from 'react';
import './App.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faUser, faTrash, faList, faHome, faPlus, faSearch, faUtensils } from "@fortawesome/free-solid-svg-icons";

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { Navbar, Nav, Container } from 'react-bootstrap';

import Home from './components/Home';
import RestaurantUpdate from './components/RestaurantUpdate';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantList from './components/RestaurantList';
import Login from './components/Login';
import Logout from './components/Logout';
import Protected from './components/Protected';

function App() {
  return (
    <div className="App">

      <Router>

        {/* <Route path="/list"> <RestaurantList /> </Route>
        <Route path="/create"> <RestaurantCreate /> </Route>
        <Route path="/search"> <RestaurantSearch /> </Route> */}
        {/* <Route path="/update/:id"  element={<RestaurantUpdate animate={true}/>}></Route>
          {/* <Route path="/update/:id"  render={routeProps => ( <RestaurantUpdate routeProps={routeProps} animate={true} />  )}/> */}
        {/* <Route path="/update/:id"  render={(props) => <RestaurantUpdate {...props} />} /> */}

      
        {/* <Route path="/update/:id"
          render={props => (
            <RestaurantUpdate {...props} />
          )}
        >
        </Route> */}


        <Route path="/login"
          render={props => (
            <Login {...props} />
          )}
        >
        </Route>

        {/* <Route path="/detail"> <RestaurantDetail /> </Route> */}
        <Route path="/logout"> <Logout /> </Route>
        <Protected  path="/detail" component={RestaurantDetail}/>
        <Protected  path="/search" component={RestaurantSearch}/>

        <Protected  path="/update/:id" component={RestaurantUpdate}/>
        <Protected  path="/list" component={RestaurantList}/>
        <Protected  path="/create" component={RestaurantCreate}/>

        {/* <Route exact path="/"> <Home /> </Route> */}        
        <Protected  exact path="/" component={Home}/>
      </Router>
    </div>
  );
}

export default App;
