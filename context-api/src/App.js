import { createContext } from "react";
import CompA from "./components/CompA";
import { AppProvider } from "./context/context";
import UseReducerHook from "./UseReducerHook";

function App() {
  return (
    <>
      <AppProvider>
        <CompA />
      </AppProvider>
      {/* <UseReducerHook /> */}
    </>
  );
}

export default App;
