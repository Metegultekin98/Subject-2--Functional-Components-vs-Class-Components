import React, { Component, MouseEventHandler } from "react";

interface Props {
  firstName: string;
  lastName: string;
  [x: string]: any;
}

interface State {
  count: number;
}

class ClassComponent extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
    (this.increase as MouseEventHandler<HTMLButtonElement>) = (
      this.increase as MouseEventHandler<HTMLButtonElement>
    ).bind(this);
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div style={{ margin: "50px" }}>
        <h1>Welcome to Geeks for Geeks </h1>
        <h3>Counter App using Class Component : </h3>
        <h6>{`${this.props.firstName} ${this.props.lastName}`}</h6>
        <h2> {this.state.count}</h2>
        <button onClick={this.increase}> Add</button>
      </div>
    );
  }
}

export default ClassComponent;
