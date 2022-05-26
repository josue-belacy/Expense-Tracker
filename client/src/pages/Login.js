import { Form } from "antd";
import Input from "antd/lib/input/Input";
import React from "react";
import { Link } from "react-router-dom";
import '../resources/authentication.css'

function Login () {

	const onFinish = (values)=> {
		console.log(values)
	}

	return (
		<div className="register">
			<h1>Expense Tracker Login</h1>
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
					<div className="lottie">
						<lottie-player
							src="https://assets3.lottiefiles.com/packages/lf20_xx9zron9.json"
							background="transparent"
							speed="1"
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
