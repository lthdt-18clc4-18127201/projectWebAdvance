import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <HomePage />
      </div>
    </>
  );
}

export default App;
