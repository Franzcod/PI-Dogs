import styles from "./App.module.css";
import { Init } from "./Components/Init/Init";
import { Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Menu from "./Components/Menu/Menu";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Create from "./Components/CreateNew/Create";
import Details from "./Components/Home/Details/Details";

function App() {
  return (
    <div className={styles.app}>
      <Route exact path="/" component={Init} />
      <Route path="/" component={Nav} />

      <Route path="/home" component={Menu} />
      <Route path="/create" component={Menu} />
      <Route path="/game" component={Menu} />
      <Route path="/about" component={Menu} />
      {/*}<Route path="/details" component={Menu} />*/}

      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/create" component={Create} />

      <Route path="/details/:id" component={Details} />
    </div>
  );
}

export default App;
