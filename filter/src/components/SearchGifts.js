import { useState } from "react";
import React from "react";
import Gift_Filter_Sort from "./Gift_Filter_Sort";
import {
  Form,
  InputGroup,
  Button,
  FormControl,
  Col,
  Row,
} from "react-bootstrap";

//functional component
function SearchGifts() {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [fetchData, setData] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  // const CustomButton = ()=> {
  //   // ...
  // }
  
  // CustomButton.defaultProps = {
  //   color: 'blue'
  // };

  //same as component didMounted
  const searchOutput = async (event) => {
    console.log("22222222222: ",searchValue)
    event.preventDefault();
    const URL = "http://api.giphy.com/v1/gifs/search?q=";
    const APIKEY = "&api_key=JDwoSNpqCHUB6d1Ls8W0yuAERZVXUj6L";
    try {
      const response = await fetch(URL + searchValue + APIKEY);
      console.log("respose about asyn", response);
      if (response.status == 200) {
        const result = await response.json();
        console.log("result result result: ", result);
        setIsLoaded(true);
        setData(result.data);
      } else {
        setError(true);
      }
    } catch (err) {
      console.log("err", err);
    }
  }; //useEffect reset

  if (error) {
    return <div>Error:</div>;
  }
  console.log("User input", searchValue);
  if (isLoaded && fetchData != null) {
    return (
      <div className="wrapper">
        {/* we are passing the fetchData to the GiftFilter using gifts as name */}
        <Form onSubmit={(event) => searchOutput(event)}>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                Name
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder="Search"
                onChange={(event) => setSearchValue(event.target.value)}
              />
            </Col>

            <Col xs="auto">
              <Button type="submit" className="mb-2">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
        <Gift_Filter_Sort gifts={fetchData} />
      </div>
    );
  }
  return (
    <div>
      <Form onSubmit={(event) => searchOutput(event)}>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
              Name
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              placeholder="Search"
              onChange={(event) => setSearchValue(event.target.value)}
            />
          </Col>

          <Col xs="auto">
            <Button type="submit" className="mb-2">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default SearchGifts;
