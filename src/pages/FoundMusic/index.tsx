import React from 'react';
import { Button, Form } from 'antd'
import PhoneTime from '@/components/PhoneTime';
import Test from '@/components/Test';

const FoundMusic: React.FC = () => {
  const [form] = Form.useForm()

  const submit = () => {
    form.validateFields().then(res => {
      console.log(res)
    })
  }
      
  return (
    <>
      FoundMusic

      <Form form={form}>
        <Form.Item name="a">
          <PhoneTime />
        </Form.Item>
        <Form.Item name="b">
          <Test />
        </Form.Item>
      </Form>
      <Button onClick={submit}>submit</Button>
    </>
  );
}

export default FoundMusic;
