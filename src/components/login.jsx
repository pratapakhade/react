import React, { Component } from "react";
import footer from "./footer";
class Login extends React.Component {
  render() {
    return (
<html>
      <form>
      <div class="mb-3 w-50 mx-auto">
        <h1>Login PAge</h1>
       
  
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3 w-50 mx-auto ">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3  form-check w-50 mx-auto">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onclick="footer" class="btn btn-primary">Submit</button>
</form>
      </html>
    );
  }
}

export default Login;
