import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateProduct from "./CreateProduct";
import Dashboard from "./Dashboard";
import EditProduct from "./EditProduct";
import Products from "./Products";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid">
              <Switch>
                <Route path="/" component={Dashboard} exact={true}></Route>
                <Route
                  path="/product"
                  component={Products}
                  exact={true}
                ></Route>
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
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
