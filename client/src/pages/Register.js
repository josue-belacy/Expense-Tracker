import { Button } from 'antd';
import { FormProvider } from 'rc-field-form';
import React from 'react';

function Register() {
	return ( 
  <div className='register'>
    <div class="row">
      

      <div className="col-md-5">
        
      </div>
      <div className="col-md-5">
        <Form layout='vertical'>

        <Form.Item label='Name' name='name'>

            <Input />

        </Form.Item>
        <Form.Item label='Email' name='email'>

            <Input />

        </Form.Item>
        <Form.Item label='Password' name='password'>

            <Input />

        </Form.Item>
        
        <div className='d-flex justify-content-between align-items-center'>
          <Link to="/login">Already Registered? Click Here To Login</Link>
          <Button className='primary'>REGISTER</Button>

        </div>
      </Form>
    
    </div>
  </div>
  )
}

export default Register;
