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
          <Route path="/" component={Dashboard} exact={true}></Route>
          <Route path="/product" component={Products} exact={true}></Route>
          <Route
            path="/product/create"
            component={CreateProduct}
            exact={true}
          ></Route>
          <Route
            path="/product/edit/:id"
            component={EditProduct}
            exact={true}
          ></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
