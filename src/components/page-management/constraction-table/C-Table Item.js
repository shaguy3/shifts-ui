import React from 'react'
import Form from 'react-bootstrap/Form'
import { myConfig } from '../../../config'

function App(props) {
    // TODO: get the Bakarim list from the DB
    const bakarim_options = myConfig.bakarim_short.map((name) => 
    <option value={name}>{name}</option>
  )

  return (
    <td>
      <Form.Control as="select" name="" id="" required>
        <option value="" selected>---</option>
        {bakarim_options}
        {/*TODO: if there's only 1 bakar, choose him in advance*/}
      </Form.Control>
    </td>
  );
}


export default App;