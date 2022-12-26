import React, { FC, MouseEventHandler, useState } from "react";

interface Props {
  firstName: string;
  lastName: string;
  [x: string]: any;
}

// YADA: const FunctionalComponent = ({ firstName, lastName, ...rest}: Props) => {
const FunctionalComponent: FC<Props> = (props) => {
  const [count, setCount] = useState<number>(0);

  const increase: MouseEventHandler<HTMLButtonElement> = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ margin: "50px" }}>
      <h1>Welcome to Geeks for Geeks </h1>
      <h3>Counter App using Functional Component : </h3>
      <h6>
        {props.firstName} {props.lastName}
      </h6>
      <h2>{count}</h2>
      <button onClick={increase}>Add</button>
    </div>
  );
};

export default FunctionalComponent;
