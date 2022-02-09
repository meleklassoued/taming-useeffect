import "./App.css";
import { useFetch } from "./useFetch";
function App() {
  const { data } = useFetch({
    url: "/melek.json",
  });
  return (
    <div className='App'>
      <header className='App-header'>hello {JSON.stringify(data)}</header>
    </div>
  );
}

export default App;
