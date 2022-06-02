import { Form, message } from "antd";
import Input from "antd/lib/input/Input";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../resources/authentication.css'
import axios from "axios";
// import Password from "antd/lib/input/Password";

function Login () {
  const navigate = useNavigate()
	const onFinish = async(values)=> {
    try {
      const response = await axios.post("/api/users/login", values)
      localStorage.setItem('expense-tracker-user' , JSON.stringify({...response.data , password:''})); 
      message.success('Login successful')
      navigate('/')
    } catch (error) {
      message.error('Login failed')
    }
	}

	return (
		<div className="register">
			<div className="row justify-content-center align-items-center w-100 h-100">
        <div className="col-md-4">
          <Form layout="vertical" onFinish={onFinish}>
            <h1>Login</h1>
						<hr />
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/register">Not Registered? Click Here To Register</Link>
              <button className="primary" type="submit">LOGIN</button>
            </div>
          </Form>
        </div>
				<div className="col-md-5">
					<div className="lottie-2">
						<lottie-player
							src="https://assets3.lottiefiles.com/packages/lf20_ystsffqy.json"
							background="transparent"
							speed=".75"
							loop
							autoplay
						  ></lottie-player>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
