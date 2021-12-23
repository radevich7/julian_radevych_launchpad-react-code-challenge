import { Fragment } from "react";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Posts from "./Components/Posts/Posts";
import Universities from "./Components/Universities/Universities";
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
      <Universities />
      {/* <Posts /> */}
    </Layout>
  );
}

export default App;
