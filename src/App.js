import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import add from "./Pages/AddProduct/AddProduct";
import ship from "./Pages/Shipping/Shipping";
import detail from "./Pages/Detail/Detail";
import Home from "./Pages/Home/Home";
import income from "./Pages/Income/Income";
import cart from "./Pages/Cart/Cart";
import profile from "./Pages/Profile/Profile";
import PrivateRoute from "./component/PrivateRoute";
import { ContextProvider } from "./Context/Context";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={detail} />
          <PrivateRoute exact path="/add" component={add} />
          <PrivateRoute exact path="/ship" component={ship} />
          <PrivateRoute exact path="/income" component={income} />
          <PrivateRoute exact path="/cart" component={cart} />
          <PrivateRoute exact path="/profile" component={profile} />
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
