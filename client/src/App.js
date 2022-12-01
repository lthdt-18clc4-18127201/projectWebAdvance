import { useState, useEffect } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useQuery } from "react-query";
import HomePage from "./components/HomePage";
import NavBar from "./components/Navbar";
import getMemes from "./api/MemeList";
import LoginGooglePage from "./components/LoginGooglePage";

function App() {
  const { data, error, isLoading } = useQuery("memes", getMemes);
  const [info, setInfo] = useState([]);

  const handleSubmit = () => {
    setInfo(data[Math.floor(Math.random() * 100)]);
  };

  useEffect(() => {
    if (isLoading) {
      <h1>Loading.....</h1>;
    } else if (error) {
      <Alert variant="danger">{error.message}</Alert>;
    } else {
      setInfo(data[Math.floor(Math.random() * 100)]);
    }
  }, [isLoading, error, data]);
  return (
    <>
      <NavBar />
      <LoginGooglePage />
      <div className="App">
        <HomePage />
        <h1 className="mb-4">Welcome to the Memes List</h1>
        <Card className="card-information mb-4" style={{ color: "black" }}>
          <Card.Img className="card-img" src={info.url} />
          <Card.Body>
            <Card.Title className="text">{info.name}</Card.Title>
          </Card.Body>
        </Card>
        <Alert variant="success">Want to see more?</Alert>
        <Button onClick={handleSubmit}>Click here</Button>
      </div>
    </>
  );
}

export default App;
