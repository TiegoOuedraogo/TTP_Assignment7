import React from "react";
import SingleGift from "./SingleGift";
import "./css/Gift.css";
import {
  Accordion,
  InputGroup,
  Button,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

//class component
//the fetchData has the data
//GitfFilter got the dat from Fetch Data
class Gift_Filter_Sort extends React.Component {
  constructor(props) {
    super(props);
    //initializing the states
    this.state = {
      minHeight: 0,
      maxHeight: 10000,
      minWidth: 0,
      maxWidth: 10000,
      minSize: 0,
      maxSize: 10000,
      gifts: this.props.gifts,
    };
  }
  //function that reacts to the field  changes
  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
      console.log(this.state);
    };
  };
  //being in the class you cannot use const
  filterByHeight = () => {
    let gifts = this.state.gifts;
    let newfilfter = gifts.filter((gift) => {
      const height = gift.images.original.height;
      return height > this.state.minHeight && height < this.state.maxHeight;
    });
    console.log("line 33 ", newfilfter);
    this.setState({ gifts: newfilfter });
  };

  filterByWidth = () => {
    let gifts = this.state.gifts;
    console.log("in the  filter Width ");
    let newfilfter = gifts.filter((gift) => {
      const width = gift.images.original.width;
      return width > this.state.minWidth && width < this.state.maxWidth;
    });
    this.setState({ gifts: newfilfter });
  };

  filterBySize = () => {
    let gifts = this.state.gifts;
    let newfilfter = gifts.filter((gift) => {
      const size = gift.images.original.size;
      return size > this.state.minSize && size < this.state.maxSize;
    });
    //console.log("line 33 ", newfilfter);
    this.setState({ gifts: newfilfter });
    console.log("the  new Size: ", newfilfter);
  };

  //Sorting functions
  // sort by Height
  
  sortByHeight = () => {
    console.log("UnSorted", this.state.gifts);
    const sortedGifts = this.state.gifts.sort((a, b) => {
      const heightA = a.images.original.height;
      const heightB = b.images.original.height;
      return heightA - heightB;
    });
    //the only to change the  value in the state
    this.setState({ Gifts: sortedGifts });
    console.log("Sorted", this.state.gifts);
  };

  sortByWidth = () => {
    console.log("UnSorted", this.state.gifts);
    const sortedGifts = this.state.gifts.sort((a, b) => {
      const widthA = a.images.original.width;
      const widthB = b.images.original.width;
      return widthA - widthB;
    });
    //the only to change the  value in the state
    this.setState({ Gifts: sortedGifts });
    console.log("Sorted", this.state.gifts);
  };

  sortBySize = () => {
    console.log("UnSorted", this.state.gifts);
    const sortedGifts = this.state.gifts.sort((a, b) => {
      const sizeA = a.images.original.size;
      const sizeB = b.images.original.size;
      return sizeA - sizeB;
    });
    //the only to change the  value in the state
    this.setState({ Gifts: sortedGifts });
    console.log("Sorted", this.state.gifts);
  };

  sortByTitle = () => {
    const sortedGifts = this.state.gifts.sort((a, b) => {
      const titleA = a.title.toUpperCase(); // ignore upper and lowercase
      const titleB = b.title.toUpperCase(); // ignore upper and lowercase
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    this.setState({ Gifts: sortedGifts });
  };
  // sort by name

  render() {
    // console.log("we are trying to see what props contains ", this.props);
    //here we importing the all url and assign it to gifts
    let gifts = this.state.gifts;
    // console.log("free gift", gifts);
    console.log(
      "min and max Heeight ",
      this.state.minHeight,
      this.state.maxHeight
    );
    //console.log("min and max Size ", this.state.minSize, this.state.maxSize);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10">
            <div className="row">
              <h4>Filter</h4>
              <Accordion className="col-sm">
                <Accordion.Item eventKey="0" className="col-sm">
                  <Accordion.Header>Height</Accordion.Header>
                  <Accordion.Body>
                    <InputGroup className="mb-3">
                      <FormControl
                        type="number"
                        placeholder="min"
                        onChange={this.fieldChanged("minHeight")}
                      />
                      -
                      <FormControl
                        type="number"
                        placeholder="max"
                        onChange={this.fieldChanged("maxHeight")}
                      />
                      -
                      <Button variant="secondary" onClick={this.filterByHeight}>
                        GO
                      </Button>
                    </InputGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion className="col-sm">
                <Accordion.Item eventKey="1" className="col-sm">
                  <Accordion.Header>Width</Accordion.Header>
                  <Accordion.Body>
                    <InputGroup className="mb-3">
                      <FormControl
                        type="number"
                        placeholder="min"
                        onChange={this.fieldChanged("minWidth")}
                      />
                      -
                      <FormControl
                        type="number"
                        placeholder="max"
                        onChange={this.fieldChanged("maxWidth")}
                      />
                      -
                      <Button variant="secondary" onClick={this.filterByWidth}>
                        GO
                      </Button>
                    </InputGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion className="col-sm">
                <Accordion.Item eventKey="2" className="col-sm">
                  <Accordion.Header>Size</Accordion.Header>
                  <Accordion.Body>
                    <InputGroup className="mb-3">
                      <FormControl
                        type="number"
                        placeholder="min"
                        onChange={this.fieldChanged("minSize")}
                      />
                      -
                      <FormControl
                        type="number"
                        placeholder="max"
                        onChange={this.fieldChanged("maxSize")}
                      />
                      -
                      <Button variant="secondary" onClick={this.filterBySize}>
                        GO
                      </Button>
                    </InputGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="col-2">
            <DropdownButton
              variant="outline-secondary"
              title="SortBy"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item onClick={this.sortByTitle}>Title</Dropdown.Item>
              <Dropdown.Item onClick={this.sortByHeight}>Height</Dropdown.Item>
              <Dropdown.Item onClick={this.sortByWidth}>Width</Dropdown.Item>
              <Dropdown.Item onClick={this.sortBySize}>Size</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>

        {/* first thing is to print
          to print we have to use the map function
      */}
        {gifts.map((gift) => (
          <SingleGift gift={gift} key={gift.id} />
        ))}
      </div>
    );
  }
}

export default Gift_Filter_Sort;
