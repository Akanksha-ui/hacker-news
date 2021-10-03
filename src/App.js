import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import New from "./pages/New";
import Top from "./pages/Top";
import Job from "./pages/Job";
import Show from "./pages/Show";
import Ask from "./pages/Ask";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/New" component={New} />
        <Route exact path="/" component={New} />
        <Route exact path="/Top" component={Top} />
        <Route exact path="/Job" component={Job} />
        <Route exact path="/Show" component={Show} />
        <Route exact path="/Ask" component={Ask} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
