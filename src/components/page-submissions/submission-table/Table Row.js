import React from 'react';
import Item from './Table Item';

function App(props) {
  const numbers = Array.from(Array(7), (v,k) => k *= 3)
  // numbers = [0, 3, 6, 9, 12, 15, 18]
  const listItems = numbers.map((i) =>
    <Item header={props.header} id={i} />
  )

  return (
    <tr>
      <th>{props.header}</th>
      {listItems}
    </tr>
  );
}

export default App;
