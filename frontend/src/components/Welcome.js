import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
const Welcome = () => (
  <Jumbotron>
    <h1>Images Gallery</h1>
    <p>
      This is simple application that retreives photo using Unsplash API. In order to start, enter the search item in the input field.
    </p>
    <p>
      <Button bsStyle="primary" href = "https://unsplash.com" target="_blank">Learn more</Button>
    </p>
  </Jumbotron>
);

export default Welcome;
