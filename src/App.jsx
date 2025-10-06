import { Outlet } from "react-router-dom";
import UseApiCalling from "./Components/ApiCalling";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import appStore from "./utils/appStore";
import {Provider} from "react-redux"

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
