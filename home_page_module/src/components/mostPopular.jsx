import React, { Component } from 'react';
import first from "../main/books/first.jpg";
import five from "../main/books/five.jpg";
import twelve from "../main/books/twelve.jpg";
import ten from "../main/books/ten.jpg";

class MostPopular extends Component{

    render(){

        return(

            <div>
                <div class="row cols-3">
  <div class="col mt-3">
    <div class="card" >
      <img src={first} class="card-img-top" style={{width:300, height:200 } }   alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><b>Author: Chris Northwood</b></h5>
        <p class="card-text">Understand the technical foundations, 
        as well as the non-programming skills needed to be a successful full stack web developer.</p>
        <a href="#" class="btn btn-primary">Add to Cart </a>
      </div>
    </div>
  </div>
  <div class="col mt-3 ">
    <div class="card ">
      <img src={five} class="card-img-top" style={{width:300, height:200 } }  alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Robin Wieruch</h5>
        <p class="card-text">React is a JavaScript library for building user interfaces.
         It is maintained by Facebook and a community of individual developers and companies.</p>
         <a href="#" class="btn btn-primary">Add to Cart </a>
      </div>
    </div>
  </div>
  <div class="col mt-3">
    <div class="card">
      <img src={twelve} class="card-img-top" style={{width:300, height:200 } } alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Ashlee Vance</h5>
        <p class="card-text">HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets)
         are two of the core technologies for building Web pages. </p>
         <a href="#" class="btn btn-primary">Add to Cart </a>
      </div>
    </div>
  </div>
  <div class="col mt-3">
    <div class="card">
      <img src={ten} class="card-img-top" style={{width:300, height:200 } } alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Willow Crossley</h5>
        <p class="card-text">JavaScript, often abbreviated as JS, is a programming language that conforms
         to the ECMAScript specification. JavaScript is high-level,</p>
         <a href="#" class="btn btn-primary">Add to Cart </a>
      </div>
    </div>
  </div>
</div><br  />
<a href="/books" class="btn btn-primary"> Back to Home </a>
            </div>
        )
    }
}

export default MostPopular;