import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import InstaClone from "./components/InstaClone";
import NetflixClone from "./components/NetflixClone";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/instaclone" component={InstaClone} />
        <Route path="/netflix-clone" component={NetflixClone} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
