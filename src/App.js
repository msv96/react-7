import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateProduct from "./CreateProduct";
import Dashboard from "./Dashboard";
import EditProduct from "./EditProduct";
import Products from "./Products";

function App() {
  return (
    <BrowserRouter>
      <div className="container p-4">
        <Switch>
          <Route path="/" component={Dashboard} exact={true} key="hqw88"></Route>
          <Route path="/product" component={Products} exact={true} key="jkk03"></Route>
          <Route
            path="/create-product"
            component={CreateProduct}
            exact={true}
            key="tye83"
          ></Route>
          <Route
            path="/edit-product/:id"
            component={EditProduct}
            exact={true}
            key="hsu35"
          ></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
