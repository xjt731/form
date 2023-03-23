import { Button, Form, Input, AutoComplete } from 'antd';
import { useState } from 'react';

import  FormComponent from './components/FormComponent';

function App() {
  // text hints used for AutoComplete
  const [options, setOptions] = useState([]);
  //return a object, and it which could be set how many text hints are able to appear on screen 
  const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
  });
  //return an array which could be changed 
  const getPanelValue = (searchText) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  //collecting all information that users type in this form
  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <div>
      <FormComponent/>

    </div>
  );
}

export default App;
