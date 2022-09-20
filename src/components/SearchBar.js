import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topic: "" };
    this.searchRef = React.createRef();
  }
  // onInputChange = (event) => {
  //   this.setState({ topic: event.target.value });
  // };
  // onFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(this.state.topic);
  // };

  // render() {
  //   return (
  //     <div className="ui segment">
  //       <form className="ui form" onSubmit={this.onFormSubmit}>
  //         <div className="field">
  //           <label htmlFor="search">Image search</label>
  //           <input
  //             id="search"
  //             type="text"
  //             value={this.state.term}
  //             onChange={this.onInputChange}
  //           />
  //         </div>
  //       </form>
  //     </div>
  //   );
  // }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.search(this.searchRef.current.value);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search">Search</label>
            <input id="search" type="text" ref={this.searchRef} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
