import React from "react";

class Employeereq extends React.Component {
  state = { HR: "" };

  yesHandler = () => {
    this.setState({ HR: "You are selected Buddy " });
  };

  noHandler = () => {
    this.setState({
      HR: "Sorry Bro Petrol Bunk next time (Varata mammey durrr) ",
    });
  };

  render() {
    return (
      <main className="main1">
        <h1>State component</h1>
        {/* <pre>{JSON.stringify(this.state)}</pre> */}
        <h3>Cheems : I'm selected sir !?</h3>
        <h3>HR : {this.state.HR}</h3>
        <button onClick={this.yesHandler}>Yes</button>
        <button onClick={this.noHandler}>No</button>
      </main>
    );
  }
}

export default Employeereq;
