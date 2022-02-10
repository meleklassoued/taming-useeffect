import "./App.css";
import { useFetch } from "./useFetch";
import { useState } from "react";
function App() {
  const [url, setUrl] = useState(null);
  const { data } = useFetch({
    url,
  });

  return (
    <div className='App'>
      <header className='App-header'>hello {JSON.stringify(data)}</header>
      <button onClick={() => setUrl("./melek.json")}> click</button>
      <button onClick={() => setUrl("./jawher.json")}> click mara okhra</button>
    </div>
  );
}

export default App;
