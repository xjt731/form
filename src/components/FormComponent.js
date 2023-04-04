import { Button, DatePicker, Form, Input, AutoComplete } from 'antd';
import { Fragment, useState } from 'react';
import DatePickerComponent from './DatePickerComponent';
import AutoCompleteComponent from './AutoCompleteComponent';

const FormComponent = () => {

  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <>
      <Form 
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        
        style={{
          maxWidth: 600,
        }}
        colon={false}
        onFinish={onFinish}
      >
        <Form.Item name='date' label="Date field" rules={[{ required: true, message: 'Please choose one date!' }]}>
          <DatePickerComponent />
        </Form.Item>

        <Form.Item name='autocomplete' label="Autocomplete" rules={[{ required: true, message: 'Please input your information!' }]}>
          <AutoCompleteComponent
          />
        </Form.Item>

        <Form.Item name='textFieldOne' label="Input one" rules={[{ required: true, message: 'Please input text field one!' }]}>
          <Input />
        </Form.Item>

        <Form.Item name='textFieldTwo' label="Input two" rules={[{ required: true, message: 'Please input text field two!' }]}>
          <Input />
        </Form.Item>

        <Form.Item name='textFieldThree' label="Input three" rules={[{ required: true, message: 'Please input text field three!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label=" " >
          <Button htmlType='submit' type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default FormComponent