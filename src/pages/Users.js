import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Users = () => {
  const [count, setCount] = React.useState(0);
  return (
    <Container>
      <p>Simple counter</p>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Add</Button>
      <Button onClick={() => setCount(0)}>Reset</Button>
    </Container>
  );
};

export default Users;
