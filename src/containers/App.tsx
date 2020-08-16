import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

import useDeviceDetect from "../utils/userAgent";
import NotFound from "../utils/NotFound";
import "./App.scss";
import { Footer, GamesList, Header } from "../components";

const App = () => {
  const { isMobile } = useDeviceDetect();
  console.log(isMobile, "isMobile");

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="App">
          <Switch>
            <Route exact path="/" component={GamesList} />
            <Route exact path="/games/:category" component={GamesList} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
