import { Form } from "antd";
import Input from "antd/lib/input/Input";
import React from "react";
import { Link } from "react-router-dom";
import '../resources/authentication.css'

function Register () {

	const onFinish = (values)=> {
		console.log(values)
	}

	return (
		<div className="register">
			{/* <h1>Expense Tracker Registration</h1> */}
			<div className="row justify-content-center align-items-center w-100 h-100">
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
        <div className="col-md-4">
          <Form layout="vertical" onFinish={onFinish}>
            <h1>REGISTER</h1>
						<hr />
            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/login">Already Registered? Click Here To Login</Link>
              <button className="primary" type="submit">REGISTER</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
