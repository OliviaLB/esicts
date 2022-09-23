import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

import About from "./Pages/About";
import Welcome from "./Pages/Home";
import Treatments from "./Pages/Treatments";
import Contact from "./Pages/Contact";
import Layout from "./Components/Layout/Layout";
import AllBlogs from "./Pages/AllBlogs";
import BlogEdit from "./Pages/BlogEdit";
import BlogDetail from "./Pages/BlogDetail";
import NewBlog from "./Pages/NewBlog";
import NotFound from "./Pages/NotFound";

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
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/" exact>
          <Redirect to="/blogs" />
        </Route>
        <Route path="/blogs" exact>
          <AllBlogs />
        </Route>
        <Route path="/blogs/:blogId">
          <BlogDetail />
        </Route>

        <Route path="/blogedit/:blogId">
          <BlogEdit />
        </Route>

        <Route path="/new-blog">
          <NewBlog />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
