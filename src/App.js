import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AddBooks from "./containers/AddBooks";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import SearchBooks from "./components/SearchBooks";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={AddBooks} />
        <Route path="/search" component={SearchBooks} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
