import { useState } from "react";
import "./App.css";
import AddedList from "./Components/Get_data_list";
import CreateForm from "./Components/Form";

function App() {
  const [state, setState] = useState({
    added_list: [],
    filter: "",
    filter_data: [],
  });
  return (
    <div className="App">
      <div className="mainContainer">
        <CreateForm setState={setState} />
        <AddedList state={state} setState={setState} />
      </div>
    </div>
  );
}

export default App;
