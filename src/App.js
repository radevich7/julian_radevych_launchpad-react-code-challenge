import { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// Components
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import PostalLookUp from "./Components/PostalLookUp/PostalLookUp";
import Posts from "./Components/Posts/Posts";
import Universities from "./Components/Universities/Universities";

export const Layout = (props) => {
  return (
    <Fragment>
      <BrowserRouter>
        <NavBar />
        {props.children}
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
};

function App() {
  return (
    <Layout>
      <ToastContainer />
      <Switch>
        <Route path="/" exact component={Posts} />
        <Route path="/universities" exact component={Universities} />
        <Route path="/postal" exact component={PostalLookUp} />
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </Layout>
  );
}

export default App;
