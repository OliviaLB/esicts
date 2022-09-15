import { Fragment } from "react";

import Nav from "./Nav/Nav";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import classes from "./Layout.module.css";

const Layout = (props: any) => {
  return (
    <Fragment>
      <Nav />
      <Banner />
      <main className={classes.main}>{props.children} </main>

      <Footer />
    </Fragment>
  );
};

export default Layout;
