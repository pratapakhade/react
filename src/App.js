import "./App.css";
import Home from "./components/home";
import Nav from "./components/nav";
import Login from "./components/login";
import PageNotFound from "./components/pagenotfound";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Product from "./components/product";
import AddProduct from "./components/addproduct";
import UpdateProduct from "./components/updateproduct";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
     
        <Route path="/addproduct" component={AddProduct} />
        <Route path="/product" component={Product} />
        <Route path="/updateproduct/:productId" component={UpdateProduct} />
        <Redirect exact path="/" to="/home" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;