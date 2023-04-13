
import Navbar from "./Navbar/Nav";
import Routing from "./Routing/RoutesSeperation";

import store from "./Store/Store";
import { Provider } from "react-redux";



function App() {
  store.subscribe(()=>{
    localStorage.setItem('reduxStore' ,  JSON.stringify(store.getState()))
  })
  return (
    <div className="App">
      <Provider store={store}>

       
      <Routing/>
      </Provider>
    </div>
  );
}

export default App;
