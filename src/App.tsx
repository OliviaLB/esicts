import { Redirect, Route, Switch } from "react-router-dom";
import './App.css';

import About from "./Pages/About";
import Welcome from "./Pages/Home";
import Treatments from "./Pages/Treatments";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Layout from "./Components/Layout/Layout"
import Blogger from "./Pages/Blogger";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Welcome />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/treatments">
          <Treatments />
        </Route>

        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/blogger">
          <Blogger />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
