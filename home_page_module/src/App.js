import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Books from "./components/books";
import Home from "./components/home";
import MostPopular from "./components/mostPopular";
import NewReleases from "./components/newReleases";
import { Route, Switch, Redirect } from "react-router-dom";
import PageNotFound from "./components/pagenotfound";
import BookDetails from "./components/bookdetails";
import MixedCollection from "./components/mixedCollection";
import AuthorPreference from "./components/authorPreference";
function App(){
 return (
      <div>
      <NavBar />
      <Switch>
        <Route path="/books" exact component={Books} />
        <Route path="/books/:id?" component={BookDetails} />
        <Route path="/" exact component={Home} />
        <Redirect from="/home" to="/" />
        <Route path="/mixedcollection" component={MixedCollection} />
        <Route path="/mostPopular" component={MostPopular} />
        <Route path="/newReleases" component={NewReleases} />
      
        
        
         <Route path="/authorPreference" component={AuthorPreference} /> 
        <Route component={PageNotFound} />
      </Switch>
    </div>   
    );
  }
export default App;
