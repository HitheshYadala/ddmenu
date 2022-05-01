import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const HomePage = () => {
  return (
    <Card style={styles.card}>
      <Card.Img src="https://picsum.photos/150" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default HomePage;

const styles = {
  card: {
    width: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
};
