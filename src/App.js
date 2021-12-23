import { Fragment } from "react";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Posts from "./Components/Posts/Posts";

export const Layout = (props) => {
  return (
    <Fragment>
      <NavBar />
      {props.children}
      <Footer />
    </Fragment>
  );
};

function App() {
  return (
    <Layout>
      <Posts />
    </Layout>
  );
}

export default App;
