import { Button, DatePicker, Form, Input, AutoComplete } from 'antd';
import { useState } from 'react';

export default function AutoCompleteComponent(){
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
        <AutoComplete
              options={options}
              style={{
                width: 200,
              }}
              onSearch={(text) => setOptions(getPanelValue(text))}
              placeholder="input here"
            />
    )
}
