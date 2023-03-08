import { Button, DatePicker, Form, Input, AutoComplete } from 'antd';
import { useState } from 'react';

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
      <>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"

          style={{
            maxWidth: 600,
          }}
          onFinish={onFinish}
        >
          <Form.Item name='date' label="date field">
            <DatePicker />
          </Form.Item>

          <Form.Item name='autocomplete' label="autocomplete">
            <AutoComplete
              options={options}
              style={{
                width: 200,
              }}
              onSearch={(text) => setOptions(getPanelValue(text))}
              placeholder="input here"
            />
          </Form.Item>

          <Form.Item name='textFieldOne' label="input one">
            <Input />
          </Form.Item>

          <Form.Item name='textFieldTwo' label="input two">
            <Input />
          </Form.Item>

          <Form.Item name='textFieldThree' label="Input three">
            <Input />
          </Form.Item>

          <Form.Item label="Button">
            <Button htmlType='submit'>submit</Button>
          </Form.Item>
        </Form>
      </>

    </div>
  );
}

export default App;
