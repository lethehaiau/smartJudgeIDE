import React from "react";
import "./Home.css";
import ComputerImage from "./computer.jpg";
import { Container, Button } from "@material-ui/core";
import { useHistory, NavLink } from "react-router-dom";

function Home() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/practice");
  };

  return (
    <div className="Home" style={{ backgroundImage: `url(${ComputerImage})` }}>
      <Container maxWidth="md" style={{ padding: "0px" }}>
        <div className="Main">
          <div className="Main-Header"> SMART JUDGE</div>
          <div className="Main-Slogan">
            Online platform to practice with programming problems and receive
            auto-generated repair.
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClick}
            style={{ marginBottom: "0.5rem" }}
          >
            PRACTICE
          </Button>
          <div>
            or <NavLink to="/admin">Admin</NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
