import { useEffect } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {

  useEffect(() => {
    const fetchDocument = async () => {
      const response = await fetch('./MockData.json')
      const data = await response.json();
      console.log(data);
      const total = data.reduce((elem, curr) => elem + parseFloat(curr.cost),0)
      console.log(total)
    }
    fetchDocument();
  }, [])

  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
