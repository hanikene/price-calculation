import { Provider } from "react-redux";
import { store } from "./redux";
import Homepage from "./components/Homepage";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <Homepage />
      <Cart />
    </Provider>
  );
}

export default App;
