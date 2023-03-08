import logo from './logo.svg';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Form,
  Input,
} from 'antd';
import './App.css';

function App() {

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
        >
          <Form.Item label="DatePicker">
            <DatePicker />
          </Form.Item>

          <Form.Item label="Input">
            <Input />
          </Form.Item>

          <Form.Item label="Button">
            <Button>Button</Button>
          </Form.Item>
        </Form>
      </>

    </div>
  );
}

export default App;
